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

brandRouter.post('/getAllBrands', async (req, res) => {
    try {
        console.log("hello")
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
