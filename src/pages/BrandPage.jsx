import React from 'react';
import { useEffect,useState } from 'react';

function Component() {

    const pageName = useState("Brand");
    const [brandName,setBrandName] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hello");
        try {
            console.log("Form Submitted");
            const response = await axios.post(`${BASE_URL}/saveBrand`, {
                brand_name: brandName
            });

            console.log(response.data);

            
        } catch (error) {
            console.error("Error during login:", error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                Add {pageName}
            </div>
            <div className="card-body">
                <form className="col-md-12 row" encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className="col-md-12 row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="category_name">{pageName} Name</label>
                            <input type="text" className="form-control" id="brand_name" name="brand_name" placeholder="Enter Here" onChange={(e)=>setBrandName(e.target.value)}/>
                        </div>
                        <div className="col-md-6 form-group">
                            {/* You can add more form fields here if needed */}
                        </div>
                        <div className="col-md-6 mt-3 form-group">
                            <input type="submit" name="submit" value="Add" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Component;
