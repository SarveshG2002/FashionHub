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
                                <label htmlFor="category_name">{pageName} Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="category_name"
                                    name="category_name"
                                    placeholder="Enter Here"
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                />
                            </div>
                            
                            <div className="col-md-6 form-group">
                                <label htmlFor="category">Category</label>
                                <select
                                    id="category"
                                    name="category"
                                    className='form-control'
                                    value={productid}
                                    onChange={(e) => setProductId(e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    {productList.map((product) => (
                                        <option key={product._id} value={product._id}>
                                            {product.product_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="col-md-6 form-group">
                                <label htmlFor="category_desc">{pageName} Description</label>
                                <textarea
                                    className="form-control"
                                    id="category_desc"
                                    name="category_desc"
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