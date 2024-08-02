// models/admin.js
import mongoose from 'mongoose';

// Define Admin schema
const varientSchema = new mongoose.Schema({
  varient_name : {
    type : String,
    required : true,
  },
  product : {
    type : String,
    required : true,
  },
  selling_price : {
    type : String,
    required : true,
  },
  regular_price : {
    type : String,
    required : true,
  },
  instock : {
    type : String,
    required : true,
  },
  description : {
    type : String,
    required : true,
  }
}, { timestamps: true });

// Create and export Admin model
const Varient = mongoose.model('varients', varientSchema);
export default Varient;
