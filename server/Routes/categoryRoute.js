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
            return res.json({ success: false, message: "Category image is required" });
        }

        const newCategory = new Category({
            category_name,
            category_image,
            description
        });

        await newCategory.save();

        res.json({
            success: true,
            message: "Category saved successfully",
            data: newCategory
        });
    } catch (error) {
        res.json({
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
        res.json({
            success: false,
            message: "Error fetching categories: " + error.message
        });
    }
});

categoryRouter.get('/getCategoryById', async (req, res) => {
    try {
        const { id } = req.body;
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
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

categoryRouter.put('/updateCategory', upload.single('category_image'), async (req, res) => {
    try {
        const { category_name, description, id } = req.body;
        const updateData = { category_name, description };

        if (req.file) {
            updateData.category_image = req.file.filename;
        }

        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if (!updatedCategory) {
            return res.json({
                success: false,
                message: "Category not found"
            });
        }

        res.json({
            success: true,
            message: "Category updated successfully",
            data: updatedCategory
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Error updating category: " + error.message
        });
    }
});


categoryRouter.delete('/deleteCategory', async (req, res) => {
    try {
        const {id} = req.body;
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.json({
                success: false,
                message: "Category not found"
            });
        }
        res.json({
            success: true,
            message: "Category deleted successfully"
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Error deleting category: " + error.message
        });
    }
});

export default categoryRouter;