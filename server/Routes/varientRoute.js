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
    console.log(error)
    res.json({
      success: false,
      message: "Error adding varient: " + error.message
    });
  }
});



varientRouter.post('/updateVarient', async (req, res) => {
  try {
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
      extraExtraLargeSizeQuantity,
      id
    } = req.body; // Extract the brand ID and new brand name from the request body

      const updatedBrand = await Varient.findByIdAndUpdate(id, { 
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
        extraExtraLargeSizeQuantity }, { new: true }); // Attempt to find and update the brand by ID

      if (updatedBrand) {
          res.json({
              "success": true,
              "message": "Varient updated successfully",
              "data": updatedBrand
          });
      } else {
          res.json({ // Set status to 404 Not Found if the brand was not found
              "success": false,
              "message": "Varient not found"
          });
      }
  } catch (err) {
      res.json({ // Set status to 500 Internal Server Error for other errors
          "success": false,
          "message": "Something went wrong: " + err
      });
  }
});


varientRouter.post('/deleteVarient', async (req, res) => {
  console.log("hello");
  try {
      const { id } = req.body; // Extract the brand ID from the request body
      const deletedVarient = await Varient.findByIdAndDelete(id); // Attempt to find and delete the brand by ID

      if (deletedVarient) {
          res.json({
              "success": true,
              "message": "Varient deleted successfully",
              "data": deletedVarient
          });
      } else {
          res.json({ // Set status to 404 Not Found if the brand was not found
              "success": false,
              "message": "Varient not found"
          });
      }
  } catch (err) {
      res.json({ // Set status to 500 Internal Server Error for other errors
          "success": false,
          "message": "Something went wrong: " + err
      });
  }
});

varientRouter.get('/getAllVarients', async (req, res) => {
  try {
    const varients = await Varient.aggregate([
      {
        $lookup: {
          from: "products",
          let: { productIdStr: "$product" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", { $toObjectId: "$$productIdStr" }]
                }
              }
            },
            {
              $lookup: {
                from: "brands",
                let: { brandIdStr: "$brand_id" }, // Use brand_id from products
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: ["$_id", { $toObjectId: "$$brandIdStr" }]
                      }
                    }
                  }
                ],
                as: "brand_data"
              }
            },
            {
              $lookup: {
                from: "categories",
                let: { categoryIdStr: "$category_id" }, // Use category_id from products
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: ["$_id", { $toObjectId: "$$categoryIdStr" }]
                      }
                    }
                  }
                ],
                as: "category_data"
              }
            },
            {
              $unwind: "$brand_data"
            },
            {
              $unwind: "$category_data"
            }
          ],
          as: "product_data"
        }
      },
      {
        $unwind: "$product_data"
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ["$product_data", "$$ROOT"]
          }
        }
      },
      {
        $project: {
          product_data: 0
        }
      }
    ]);

    res.json({
      success: true,
      data: varients
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error fetching varients: " + error.message
    });
  }
});





export default varientRouter;
