import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../components/Host.jsx';
import { useEffect, useState } from 'react';

function Component() {
    const [pageName] = useState("Category");
    const [categoryName, setCategoryName] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hello");
        try {
            console.log("Form Submitted");
            const response = await axios.post(`${BASE_URL}/category/saveCategory`, {
                brand_name: brandName
            });

            console.log(response);

        } catch (error) {
            console.error("Error during login:", error);
            // setError('An error occurred. Please try again.');
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
                                <input type="text" className="form-control" id="category_name" name="category_name" placeholder="Enter Here" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="category_image">{pageName} Image</label>
                                <input type="file" className="form-control" id="category_image" name="category_image" placeholder="Enter Here" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="category_desc">{pageName} Description</label>
                                <input type="text" className="form-control" id="category_desc" name="category_desc" placeholder="Enter Here" />
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