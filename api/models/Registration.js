const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  parent_name: { type: String, required: true },
  student_name: { type: String, required: true },
  grade: { type: String },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address_line1: { type: String },
  address_line2: { type: String },
  landmark: { type: String },
  city: { type: String },
  pincode: { type: String },
  payment_status: { type: String, default: 'pending' },
  payment_screenshot_url: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Registration || mongoose.model('Registration', RegistrationSchema);
