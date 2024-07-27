import express from 'express';
import Brands from '../Models/Brands.js'; // Adjusted the import statement
const brandRouter = express.Router();

brandRouter.post('/saveBrand', async (req, res) => {
    try {
        const { brand_name } = req.body;
        const brand = new Brands({ // Changed Brands to brand
            brand_name
        });

        if (await brand.save()) { // Changed Brands to brand
            res.json({
                "success": true,
                "message": "Brand Save Successfully",
                "data":brand
            });
        } else {
            res.json({
                "success": false,
                "message": "Can't add brand"
            });
        }
    } catch (err) {
        res.json({
            "success": false,
            "message": "Something went wrong: " + err
        });
    }
});


brandRouter.post('/updateBrand', async (req, res) => {
    try {
        const { id, brand_name } = req.body; // Extract the brand ID and new brand name from the request body

        const updatedBrand = await Brands.findByIdAndUpdate(id, { brand_name }, { new: true }); // Attempt to find and update the brand by ID

        if (updatedBrand) {
            res.json({
                "success": true,
                "message": "Brand updated successfully",
                "data": updatedBrand
            });
        } else {
            res.json({ // Set status to 404 Not Found if the brand was not found
                "success": false,
                "message": "Brand not found"
            });
        }
    } catch (err) {
        res.json({ // Set status to 500 Internal Server Error for other errors
            "success": false,
            "message": "Something went wrong: " + err
        });
    }
});

brandRouter.post('/deleteBrand', async (req, res) => {
    console.log("hello");
    try {
        const { id } = req.body; // Extract the brand ID from the request body
        const deletedBrand = await Brands.findByIdAndDelete(id); // Attempt to find and delete the brand by ID

        if (deletedBrand) {
            res.json({
                "success": true,
                "message": "Brand deleted successfully",
                "data": deletedBrand
            });
        } else {
            res.json({ // Set status to 404 Not Found if the brand was not found
                "success": false,
                "message": "Brand not found"
            });
        }
    } catch (err) {
        res.json({ // Set status to 500 Internal Server Error for other errors
            "success": false,
            "message": "Something went wrong: " + err
        });
    }
});




brandRouter.post('/getAllBrands', async (req, res) => {
    try {
        // console.log("hello")
        const brands = await Brands.find(); // Retrieve all brand documents
        res.json({
            "success": true,
            "data": brands,
        });
    } catch (err) {
        res.json({
            "success": false,
            "message": "Something went wrong: " + err
        });
    }
});


export default brandRouter;
