import React from 'react';
import { useEffect,useState } from 'react';

function Component() {

    const pageName = useState("Brand");
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hello");
        // try {
        //     console.log("Form Submitted");
        //     const response = await axios.post(`${BASE_URL}/login`, {
        //         username: email,
        //         password: password,
        //     });

        //     console.log(response.data);

        //     if (response.data.success) {
        //         console.log("Login Successful");
        //         localStorage.setItem('username', response.data.username);
        //         navigate('/admin/dashboard');
        //     } else {
        //         console.log("Username Or Password Wrong");
        //         setError('Invalid username or password');
        //     }
        // } catch (error) {
        //     console.error("Error during login:", error);
        //     setError('An error occurred. Please try again.');
        // }
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
                            <input type="text" className="form-control" id="category_name" name="category_name" placeholder="Enter Here" />
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
