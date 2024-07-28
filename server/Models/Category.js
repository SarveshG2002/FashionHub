// models/admin.js
import mongoose from 'mongoose';

// Define Admin schema
const categorySchema = new mongoose.Schema({
  category_name : {
    type : String,
    required : true,
  },
  category_image : {
    type : String,
    required : true,
  },
  description : {
    type : String,
    required : true,
  }
}, { timestamps: true });

// Create and export Admin model
const Category = mongoose.model('categories', categorySchema);
export default Category;
