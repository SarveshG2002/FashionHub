import express from 'express';
import multer from 'multer';
import path from 'path';
import Product from '../Models/Product.js';

const productRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/products/'); // Make sure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Route to add a product
// Route to add a product
productRouter.post('/addProduct', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
  { name: 'image4', maxCount: 1 }
]), async (req, res) => {
  const { product_name, brand_id, category_id, description } = req.body;
  const images = req.files;

  try {
    const newProduct = new Product({
      product_name,
      brand_id,
      category_id,
      description,
      image: images.image ? path.basename(images.image[0].path) : '',
      image1: images.image1 ? path.basename(images.image1[0].path) : '',
      image2: images.image2 ? path.basename(images.image2[0].path) : '',
      image3: images.image3 ? path.basename(images.image3[0].path) : '',
      image4: images.image4 ? path.basename(images.image4[0].path) : ''
    });

    const savedProduct = await newProduct.save();
    res.json({
      success: true,
      message: "Product saved successfully",
      data: savedProduct
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error saving Products: " + error.message
    });
  }
});


productRouter.get('/getAllProducts', async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $lookup: {
          from: 'brands',
          let: { brandId: { $toObjectId: '$brand_id' } },
          pipeline: [
            { $match: { $expr: { $eq: ['$_id', '$$brandId'] } } }
          ],
          as: 'brandDetails'
        }
      },
      {
        $unwind: '$brandDetails'
      },
      {
        $lookup: {
          from: 'categories',
          let: { categoryId: { $toObjectId: '$category_id' } },
          pipeline: [
            { $match: { $expr: { $eq: ['$_id', '$$categoryId'] } } }
          ],
          as: 'categoryDetails'
        }
      },
      {
        $unwind: '$categoryDetails'
      },
      {
        $project: {
          product_name: 1,
          brand_id: 1,
          category_id: 1,
          image: 1,
          image1: 1,
          image2: 1,
          image3: 1,
          image4: 1,
          description: 1,
          brand_name: '$brandDetails.brand_name',
          category_name: '$categoryDetails.category_name',
          category_image: '$categoryDetails.category_image',
          category_description: '$categoryDetails.description'
        }
      }
    ]);

    res.json({
      success: true,
      data: products
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error fetching products: " + error.message
    });
  }
});


productRouter.get('/getProductById', async (req, res) => {
  try {
    const { id } = req.body;
    const product = await Product.findById(id);
    if (!product) {
      return res.json({
        success: false,
        message: "Product not found"
      });
    }
    res.json({
      success: true,
      data: category
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error fetching category: " + error.message
    });
  }
});

export default productRouter;