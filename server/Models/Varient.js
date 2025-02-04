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
    // required : true,
  },
  color : {
    type : String,
    // required : true,
  },
  height : {
    type : String,
    // required : true,
  },
  width : {
    type : String,
    // required : true,
  },
  bredth : {
    type : String,
    // required : true,
  },
  weight : {
    type : String,
    // required : true,
  },
  description : {
    type : String,
    required : false,
  },
  smallSizeQuantity : {
    type : String,
    // required : true,
  },
  mediumSizeQuantity : {
    type : String,
    // required : true,
  },
  largeSizeQuantity : {
    type : String,
    // required : true,
  },
  extraLargeSizeQuantity : {
    type : String,
    // required : true,
  },
  extraExtraLargeSizeQuantity : {
    type : String,
    // required : true,
  },
}, { timestamps: true });

// Create and export Admin model
const Varient = mongoose.model('varients', varientSchema);
export default Varient;
