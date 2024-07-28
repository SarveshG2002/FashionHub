import React, { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../components/Host.jsx';
import { useState } from 'react';

function Component() {
    const [pageName] = useState("Category");
    const [categoryName, setCategoryName] = useState("");
    const [categoryImage, setCategoryImage] = useState(null);
    const [categoryDesc, setCategoryDesc] = useState("");
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getAllCategories();
    }, []);

    const getAllCategories = async (e) => {
        const response = await axios.get(`${BASE_URL}/category/getAllCategories`);
        console.log(response);
        if (response.data.success) {
            setCategoryList(response.data.data)
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('category_name', categoryName);
            formData.append('category_image', categoryImage);
            formData.append('description', categoryDesc);

            const response = await axios.post(`${BASE_URL}/category/saveCategory`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if(response.data.success){
                console.log(response);
                // Handle success (e.g., show a success message, clear the form)
                // alert("Category added successfully!");
                setCategoryList(prevCategory => [...prevCategory, response.data.data]);
                setCategoryName("");
                setCategoryImage(null);
                setCategoryDesc("");
            }

            

        } catch (error) {
            console.error("Error adding category:", error);
            alert("An error occurred while adding the category. Please try again.");
        }
    };

    const deleteCategory = async (id, e) => {
        console.log(id);
        try {
            if (window.confirm("Are you sure?")) {
                await axios.post(`${BASE_URL}/category/deleteCategory`, {
                    id: id
                })
                setCategoryList(categoryList.filter(category => category._id !== id));
            }
        } catch (error) {
            console.log(error)
        }
    };

    // const handleImageChange = (e) => {
    //     setCategoryImage(e.target.files[0]);
    // };

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
                                <label htmlFor="category_image">{pageName} Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="category_image"
                                    name="category_image"
                                    onChange={(e)=>setCategoryImage(e.target.files[0])}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="category_desc">{pageName} Description</label>
                                <textarea
                                    className="form-control"
                                    id="category_desc"
                                    name="category_desc"
                                    placeholder="Enter Here"
                                    value={categoryDesc}
                                    onChange={(e) => setCategoryDesc(e.target.value)}
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