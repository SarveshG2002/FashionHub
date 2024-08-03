import React, { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../components/Host.jsx';
import { useState } from 'react';
import { getAllbrands, getAllCategories, getAllProducts } from '../components/CommonData';
function Component() {
    const [pageName] = useState("Varients");
    const [productList, setProductList] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [productid, setProductId] = useState("");
    const [regularPrice, setRegularPrice] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [instock, setInstock] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [bredth, setBredth] = useState("");
    const [weight, setWeight] = useState("");
    const [varientDesc, setVarientDesc] = useState("");
    useEffect(() => {
        initiate();
    }, []);

    const initiate = async () => {
        // setBrandList(await getAllbrands());
        // setCategoryList(await getAllCategories());
        setProductList(await getAllProducts());
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
    }
    return (
        <>
           <div className="card">
                <div className="card-header">
                    Add {pageName}
                </div>
                <div className="card-body">
                    <form className="col-md-12 row" encType="multipart/form-data" onSubmit={handleSubmit}>
                        <div className="col-md-12 row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="varient_name">{pageName} Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="varient_name"
                                    name="varient_name"
                                    placeholder="Enter Here"
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                />
                            </div>
                            
                            <div className="col-md-6 form-group">
                                <label htmlFor="product">Product</label>
                                <select
                                    id="product"
                                    name="product"
                                    className='form-control'
                                    value={productid}
                                    onChange={(e) => setProductId(e.target.value)}
                                >
                                    <option value="">Select Product</option>
                                    {productList.map((product) => (
                                        <option key={product._id} value={product._id}>
                                            {product.product_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-6 form-group">
                                <label htmlFor="regular_price">Regular Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="regular_price"
                                    name="regular_price"
                                    placeholder="Enter Here"
                                    value={regularPrice}
                                    onChange={(e) => setRegularPrice(e.target.value)}
                                />
                            </div>

                            <div className="col-md-6 form-group">
                                <label htmlFor="selling_price">Selling Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="selling_price"
                                    name="selling_price"
                                    placeholder="Enter Here"
                                    value={sellingPrice}
                                    onChange={(e) => setSellingPrice(e.target.value)}
                                />
                            </div>

                            <div className="col-md-6 form-group">
                                <label htmlFor="instock">In Stock</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="instock"
                                    name="instock"
                                    placeholder="Enter Here"
                                    value={instock}
                                    onChange={(e) => setInstock(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="instock">Height</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="instock"
                                    name="instock"
                                    placeholder="Enter Here"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="instock">Width</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="instock"
                                    name="instock"
                                    placeholder="Enter Here"
                                    value={width}
                                    onChange={(e) => setWidth(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="instock">Bredth</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="instock"
                                    name="instock"
                                    placeholder="Enter Here"
                                    value={bredth}
                                    onChange={(e) => setBredth(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="instock">Weight</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="instock"
                                    name="instock"
                                    placeholder="Enter Here"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                />
                            </div>
                            
                            <div className="col-md-6 form-group">
                                <label htmlFor="varient_desc">{pageName} Description</label>
                                <textarea
                                    className="form-control"
                                    id="varient_desc"
                                    name="varient_desc"
                                    placeholder="Enter Here"
                                    value={varientDesc}
                                    onChange={(e) => setVarientDesc(e.target.value)}
                                />
                            </div>

                            <div className="col-md-12 mt-3 form-group">
                                <input type="submit" name="submit" value="Add" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Component;