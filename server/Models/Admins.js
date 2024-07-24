// models/admin.js
import mongoose from 'mongoose';

// Define Admin schema
const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Create and export Admin model
const Admins = mongoose.model('Admin', adminSchema);
export default Admins;
