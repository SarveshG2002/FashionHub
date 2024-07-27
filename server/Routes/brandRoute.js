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
                "message": "Brand added successfully",
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

export default brandRouter;
