import connectDB from '../utils/db.cjs';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const db = await connectDB();

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
      error: error.message || 'Failed to save registration'
    });
  }
};
