// routes/varientRouter.js
import express from 'express';
import Varient from '../Models/Varient.js';

const varientRouter = express.Router();

varientRouter.post('/addVarient', async (req, res) => {
  const {
    varient_name,
    product,
    selling_price,
    regular_price,
    color,
    height,
    width,
    bredth,
    weight,
    description,
    smallSizeQuantity,
    mediumSizeQuantity,
    largeSizeQuantity,
    extraLargeSizeQuantity,
    extraExtraLargeSizeQuantity
  } = req.body;

  try {
    const newVarient = new Varient({
      varient_name,
      product,
      selling_price,
      regular_price,
      color,
      height,
      width,
      bredth,
      weight,
      description,
      smallSizeQuantity,
      mediumSizeQuantity,
      largeSizeQuantity,
      extraLargeSizeQuantity,
      extraExtraLargeSizeQuantity
    });

    const savedVarient = await newVarient.save();
    res.json({
      success: true,
      message: "Varient added successfully",
      data: savedVarient
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error adding varient: " + error.message
    });
  }
});

export default varientRouter;
