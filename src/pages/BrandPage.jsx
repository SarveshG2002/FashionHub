import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../components/Host.jsx';
import { useEffect, useState } from 'react';

function Component() {

    const [pageName] = useState("Brand");
    const [brandName, setBrandName] = useState("");
    const [brands, setBrands] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        getAllbrands();
    }, [])

    const getAllbrands = async () => {
        try {
            let brands = await axios.post(`${BASE_URL}/brands/getAllBrands`);
            console.log(brands);
            setBrands(brands.data.data);
        } catch (error) {
            console.log(error);
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hello");
        try {
            console.log("Form Submitted");
            const response = await axios.post(`${BASE_URL}/brands/saveBrand`, {
                brand_name: brandName
            });

            console.log(response.data);
            setBrands(prevBrands => [...prevBrands, response.data.data]);

            // Clear the input field after successful submission
            setBrandName("");

        } catch (error) {
            console.error("Error during login:", error);
            // setError('An error occurred. Please try again.');
        }
    };

    const deleteBrand = async (id, e) => {
        console.log(id);
        try {
            if (window.confirm("Are you sure?")) {
                await axios.post(`${BASE_URL}/brands/deleteBrand`, {
                    id: id
                })
                setBrands(brands.filter(brand => brand._id !== id));
            }
        } catch (error) {
            console.log(error)
        }
    };

    const setEditData = async (key) => {
        if (showModal) {

        } else {
            console.log(brands[key])
            setBrandName(brands[key].brand_name)
            setEditingId(brands[key]["_id"])

        }
        setShowModal(!showModal)

    }


    const handleEdit = async (e) => {
        e.preventDefault();
        console.log("hello");
        try {
            console.log("Form Submitted");
            const response = await axios.post(`${BASE_URL}/brands/updateBrand`, {
                brand_name: brandName,
                id:editingId
            });

            console.log(response.data);
            if(response.data.success){
                // setBrands(prevBrands => [...prevBrands, response.data.data]);
                getAllbrands();
                // Clear the input field after successful submission
                setBrandName("");
                setShowModal(!showModal)
            }
            

        } catch (error) {
            console.error("Error during login:", error);
            // setError('An error occurred. Please try again.');
        }
    };

    // const toggleShow = () => ;

    return (
        <>



            {showModal && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit {pageName}</h5>
                                <button type="button" className="close" onClick={setEditData}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleEdit}>
                                    <div className="form-group">
                                        <label htmlFor="brand_name">{pageName} Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="brand_name"
                                            value={brandName}
                                            onChange={(e) => setBrandName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-2">
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModal && <div className="modal-backdrop fade show"></div>}

            <div className="card">
                <div className="card-header">
                    Add {pageName}
                </div>
                <div className="card-body">
                    <form className="col-md-12 row" encType="multipart/form-data" onSubmit={handleSubmit}>
                        <div className="col-md-12 row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="category_name">{pageName} Name</label>
                                <input type="text" className="form-control" id="brand_name" name="brand_name" placeholder="Enter Here" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
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
            <div className="card">
                <div className="card-header">
                    Brand List
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>
                                    Sr.
                                </th>
                                <th>
                                    Brand Name
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {brands.map((brand, key) => (
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{brand.brand_name}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={(e) => setEditData(key)}>
                                            Edit
                                        </button>
                                        <button className='btn btn-danger' onClick={(e) => deleteBrand(brand._id, e)}>
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
