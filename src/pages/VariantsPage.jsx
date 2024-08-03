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
    const [color, setColor] = useState("");
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
                                <label htmlFor="color">Color</label><br />
                                <input
                                    type="color"
                                    className=""
                                    id="color"
                                    name="color"
                                    placeholder="Enter Here"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="height">Height</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="height"
                                    name="height"
                                    placeholder="Enter Here"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="width">Width</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="width"
                                    name="width"
                                    placeholder="Enter Here"
                                    value={width}
                                    onChange={(e) => setWidth(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="bredth">Bredth</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="bredth"
                                    name="bredth"
                                    placeholder="Enter Here"
                                    value={bredth}
                                    onChange={(e) => setBredth(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="weigth">Weight</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="weigth"
                                    name="weigth"
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

                            <div className="card-body table-responsive">
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>
                                                {pageName} Size
                                            </th>
                                            <th>
                                                Quantity
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Small (S)
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="smallSizeQuantity"
                                                    name="smallSizeQuantity"
                                                    placeholder="Enter Here"
                                                    value={weight}
                                                    onChange={(e) => setWeight(e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Medium (M)
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="mediumSizeQuantity"
                                                    name="mediumSizeQuantity"
                                                    placeholder="Enter Here"
                                                    value={weight}
                                                    onChange={(e) => setWeight(e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Large (L)
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="largeSizeQuantity"
                                                    name="largeSizeQuantity"
                                                    placeholder="Enter Here"
                                                    value={weight}
                                                    onChange={(e) => setWeight(e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Extra Large (XL)
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="extraLargeSizeQuantity"
                                                    name="extraLargeSizeQuantity"
                                                    placeholder="Enter Here"
                                                    value={weight}
                                                    onChange={(e) => setWeight(e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Extra Extra Large (XXL)
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="extraExtraLargeSizeQuantity"
                                                    name="extraExtraLargeSizeQuantity"
                                                    placeholder="Enter Here"
                                                    value={weight}
                                                    onChange={(e) => setWeight(e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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