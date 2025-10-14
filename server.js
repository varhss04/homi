import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;
const client = new MongoClient(MONGODB_URI, {
  serverSelectionTimeoutMS: 5000
});

let db;

async function connectDB() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    db = client.db('homi_lunch');
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    console.log('\nPlease check:');
    console.log('1. Your MongoDB connection string is correct');
    console.log('2. Your IP address is whitelisted in MongoDB Atlas');
    console.log('3. Your username/password are correct');
  }
}

connectDB();

app.post('/api/registrations/create', async (req, res) => {
  try {
    if (!db) {
      return res.status(503).json({
        success: false,
        error: 'Database not connected. Please check server logs.'
      });
    }

    const registrationData = {
      parent_name: req.body.parent_name,
      student_name: req.body.student_name,
      grade: req.body.grade,
      phone: req.body.phone,
      email: req.body.email,
      address_line1: req.body.address_line1,
      address_line2: req.body.address_line2,
      landmark: req.body.landmark,
      city: req.body.city,
      pincode: req.body.pincode,
      payment_status: 'pending',
      created_at: new Date(),
    };

    const result = await db.collection('registrations').insertOne(registrationData);
    
    console.log('Registration saved:', result.insertedId);
    
    res.status(201).json({
      success: true,
      id: result.insertedId,
      data: { ...registrationData, id: result.insertedId }
    });
  } catch (error) {
    console.error('Error saving registration:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.post('/api/registrations/:id/payment', async (req, res) => {
  try {
    const { id } = req.params;
    const { payment_screenshot_url } = req.body;

    const result = await db.collection('registrations').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          payment_screenshot_url,
          payment_status: 'submitted',
          updated_at: new Date()
        }
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        error: 'Registration not found'
      });
    }

    console.log('Payment updated for:', id);

    res.status(200).json({
      success: true,
      message: 'Payment screenshot updated'
    });
  } catch (error) {
    console.error('Error updating payment:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
