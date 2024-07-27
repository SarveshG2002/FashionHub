
import express from 'express';
import Brands from '../Models/Brands.js';
import Brands from '../Models/Brands.js';
const brandRouter = express.Router();




brandRouter.post('/saveBrand', async (req, res) => {
    try {
        const {brand_name} = req.body;
        const Brands = new Brands({
            brand_name
        });

        if(await Brands.save()){
            res.json({
                "success":true,
                "message":"Brand Added successfully",
            });
        }else{
            res.json({
                "success":false,
                "message":"Can't Add Brand"
            })
        }
        // res.status(201).json(newUser);
    } catch (err) {
        res.json({
            "success":false,
            "message":"Something went wrong"
        })
    }
});


export default brandRouter;