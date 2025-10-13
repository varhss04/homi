const connectDB = require('../utils/db');
const { ObjectId } = require('mongodb');

module.exports = async function handler(req, res) {
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

    const urlParts = req.url.split('/');
    const id = urlParts[urlParts.length - 2];
    
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
      error: error.message || 'Failed to update payment'
    });
  }
};
