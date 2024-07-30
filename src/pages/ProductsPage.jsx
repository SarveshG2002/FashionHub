import React, { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../components/Host.jsx';
import { useState } from 'react';
import { getAllbrands, getAllCategories, getAllProducts } from '../components/CommonData';
// import {  } from '../components/CommonData';

function Component() {
    const [pageName] = useState("Product");
    const [productName, setProductName] = useState("");
    const [brandid, setBrandId] = useState("");
    const [categoryid, setCategoryId] = useState("");
    const [brandLists, setBrandList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [productImage, setProductImage] = useState(null);
    const [productImage1, setProductImage1] = useState(null);
    const [productImage2, setProductImage2] = useState(null);
    const [productImage3, setProductImage3] = useState(null);
    const [productImage4, setProductImage4] = useState(null);
    const [productDesc, setProductDesc] = useState("");

    useEffect(() => {
        initiate();
    }, []);

    const initiate = async () => {
        setBrandList(await getAllbrands());
        setCategoryList(await getAllCategories());

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('product_name', productName);
            formData.append('brand_id', brandid);
            formData.append('category_id', categoryid);
            formData.append('image', productImage);
            formData.append('image1', productImage1);
            formData.append('image2', productImage2);
            formData.append('image3', productImage3);
            formData.append('image4', productImage4);
            formData.append('description', productDesc);

            const response = await axios.post(`${BASE_URL}/products/addProduct`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response)

            // if (response.data.success) {
            //     // console.log(response);
            //     // Handle success (e.g., show a success message, clear the form)
            //     // alert("Category added successfully!");
            //     setCategoryList(prevCategory => [...prevCategory, response.data.data]);
            //     setCategoryName("");
            //     setCategoryImage(null);
            //     setCategoryDesc("");
            // }



        } catch (error) {
            console.error("Error adding category:", error);
            alert("An error occurred while adding the category. Please try again.");
        }
    };
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
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="brand">Brand</label>
                                <select
                                    id="brand"
                                    name="brand"
                                    className='form-control'
                                    value={brandid}
                                    onChange={(e) => setBrandId(e.target.value)}
                                >
                                    <option value="">Select Brand</option>
                                    {brandLists.map((brand) => (
                                        <option key={brand._id} value={brand._id}>
                                            {brand.brand_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="category">Category</label>
                                <select
                                    id="category"
                                    name="category"
                                    className='form-control'
                                    value={categoryid}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    {categoryList.map((category) => (
                                        <option key={category._id} value={category._id}>
                                            {category.category_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="category_image">{pageName} Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="category_image"
                                    name="category_image"
                                    onChange={(e) => setProductImage(e.target.files[0])}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="category_image1">{pageName} Image1</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="category_image1"
                                    name="category_image1"
                                    onChange={(e) => setProductImage1(e.target.files[0])}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="category_image2">{pageName} Image2</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="category_image2"
                                    name="category_image2"
                                    onChange={(e) => setProductImage2(e.target.files[0])}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="category_image3">{pageName} Image3</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="category_image3"
                                    name="category_image3"
                                    onChange={(e) => setProductImage3(e.target.files[0])}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="category_image4">{pageName} Image4</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="category_image4"
                                    name="category_image4"
                                    onChange={(e) => setProductImage4(e.target.files[0])}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="category_desc">{pageName} Description</label>
                                <textarea
                                    className="form-control"
                                    id="category_desc"
                                    name="category_desc"
                                    placeholder="Enter Here"
                                    value={productDesc}
                                    onChange={(e) => setProductDesc(e.target.value)}
                                />
                            </div>

                            <div className="col-md-12 mt-3 form-group">
                                <input type="submit" name="submit" value="Add" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <br />
            <div className="card">
                <div className="card-header">
                    {pageName} List
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>
                                    Sr.
                                </th>
                                <th>
                                    {pageName} Name
                                </th>
                                <th>
                                    {pageName} Image
                                </th>
                                <th>
                                    Description
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoryList.map((category, key) => (
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{category.category_name}</td>
                                    <td>
                                        <img src={`../server/uploads/categories/${category.category_image}`} alt={category.category_name} style={{ width: "150px" }} />
                                    </td>
                                    <td>
                                        {category.description}
                                    </td>
                                    <td>
                                        <button className="btn btn-primary" onClick={(e) => setEditData(key)}>
                                            Edit
                                        </button>&nbsp;
                                        <button className='btn btn-danger' onClick={(e) => deleteCategory(category._id, e)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}

export default Component;