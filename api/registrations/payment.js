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

    const { id } = req.query;
    const { payment_screenshot_url } = req.body;

    const registration = await Registration.findByIdAndUpdate(
      id,
      {
        payment_screenshot_url,
        payment_status: 'submitted',
        updated_at: new Date()
      },
      { new: true }
    );

    if (!registration) {
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
}
