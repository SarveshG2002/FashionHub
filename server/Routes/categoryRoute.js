import express from 'express';
import multer from 'multer';
import path from 'path';
import Category from '../Models/Category.js';

const categoryRouter = express.Router();

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/categories/'); // Make sure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

categoryRouter.post('/saveCategory', upload.single('category_image'), async (req, res) => {
    try {
        const { category_name, description } = req.body;
        const category_image = req.file ? req.file.filename : null;

        if (!category_image) {
            return res.status(400).json({ success: false, message: "Category image is required" });
        }

        const newCategory = new Category({
            category_name,
            category_image,
            description
        });

        await newCategory.save();

        res.status(201).json({
            success: true,
            message: "Category saved successfully",
            data: newCategory
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error saving category: " + error.message
        });
    }
});

categoryRouter.get('/getAllCategories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json({
            success: true,
            data: categories
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching categories: " + error.message
        });
    }
});

export default categoryRouter;