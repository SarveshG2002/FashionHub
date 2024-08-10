// models/admin.js
import mongoose from 'mongoose';

// Define Admin schema
const categorySchema = new mongoose.Schema({
  product_name : {
    type : String,
    required : true,
  },
  brand_id : {
    type : String,
    required : true,
  },
  category_id : {
    type : String,
    required : true,
  },
  image : {
    type : String,
    required : true,
  },
  image1 : {
    type : String,
    required : false,
  },
  image2 : {
    type : String,
    required : false,
  },
  image3 : {
    type : String,
    required : false,
  },
  image4 : {
    type : String,
    required : false,
  },
  description : {
    type : String,
    required : true,
  },
  men : {
    type : String,
    required : true,
  },
  women : {
    type : String,
    required : true,
  }
}, { timestamps: true });

// Create and export Admin model
const Category = mongoose.model('products', categorySchema);
export default Category;
