// models/admin.js
import mongoose from 'mongoose';

// Define Admin schema
const brandScema = new mongoose.Schema({
  brand_name : {
    type : String,
    required : true,
  }
}, { timestamps: true });

// Create and export Admin model
const Brands = mongoose.model('brands', brandScema);
export default Brands;
