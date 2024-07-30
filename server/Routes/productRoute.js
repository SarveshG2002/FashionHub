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
            image: images.image ? images.image[0].path : '',
            image1: images.image1 ? images.image1[0].path : '',
            image2: images.image2 ? images.image2[0].path : '',
            image3: images.image3 ? images.image3[0].path : '',
            image4: images.image4 ? images.image4[0].path : ''
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
        const products = await Product.find();
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