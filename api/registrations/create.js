import connectDB from '../utils/db.js';
import Registration from '../models/Registration.js';

export default async function handler(req, res) {
  // Set CORS headers
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
    await connectDB();

    const registrationData = {
      parent_name: req.body.parent_name,
      student_name: req.body.student_name,
      grade: req.body.grade,
      phone: req.body.phone,
      email: req.body.email,
      address_line1: req.body.address_line1,
      address_line2: req.body.address_line2,
      city: req.body.city,
      pincode: req.body.pincode,
      payment_status: 'pending',
      created_at: new Date(),
    };

    const registration = new Registration(registrationData);
    await registration.save();

    console.log('Registration saved:', registration._id);

    res.status(201).json({
      success: true,
      id: registration._id,
      data: { ...registrationData, id: registration._id }
    });

  } catch (error) {
    console.error('Error saving registration:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
