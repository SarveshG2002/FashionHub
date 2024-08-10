import React, { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../components/Host.jsx';
import { useState } from 'react';
import { getAllVarients, getAllProducts } from '../components/CommonData';
function Component() {
    const [pageName] = useState("Varients");
    const [productList, setProductList] = useState([]);
    const [varientList, setVarientList] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [productid, setProductId] = useState("");
    const [regularPrice, setRegularPrice] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [bredth, setBredth] = useState("");
    const [weight, setWeight] = useState("");
    const [varientDesc, setVarientDesc] = useState("");
    const [smallSizeQuantity, setSmallSizeQuantity] = useState("0");
    const [mediumSizeQuantity, setMediumSizeQuantity] = useState("0");
    const [largeSizeQuantity, setLargeSizeQuantity] = useState("0");
    const [extraLargeSizeQuantity, setExtraLargeSizeQuantity] = useState("0");
    const [extraExtraLargeSizeQuantity, setExtraExtraLargeSizeQuantity] = useState("0");

    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        initiate();
    }, []);

    const initiate = async () => {
        // setBrandList(await getAllbrands());
        // setCategoryList(await getAllCategories());
        setProductList(await getAllProducts());
        setVarientList(await getAllVarients());
        console.log("varientList", varientList)
    }
    const resetForm = () => {
        setCategoryName('');
        setProductId('');
        setRegularPrice('');
        setSellingPrice('');
        setColor('');
        setHeight('');
        setWidth('');
        setBredth('');
        setWeight('');
        setVarientDesc('');
        setSmallSizeQuantity('');
        setMediumSizeQuantity('');
        setLargeSizeQuantity('');
        setExtraLargeSizeQuantity('');
        setExtraExtraLargeSizeQuantity('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        console.log("Form Submitted");
        console.log(color)
        const response = await axios.post(`${BASE_URL}/varients/addVarient`, {
            varient_name: categoryName,
            product: productid,
            selling_price: sellingPrice,
            regular_price: regularPrice,
            color: color,
            height: height,
            width: width,
            bredth: bredth,
            weight: weight,
            description: varientDesc,
            smallSizeQuantity: smallSizeQuantity,
            mediumSizeQuantity: mediumSizeQuantity,
            largeSizeQuantity: largeSizeQuantity,
            extraLargeSizeQuantity: extraLargeSizeQuantity,
            extraExtraLargeSizeQuantity: extraExtraLargeSizeQuantity
        });
        console.log("Form Submitted");

        console.log(response.data);
        resetForm();
        setVarientList(await getAllVarients());

        // Clear the input field after successful submission
        // setBrandName("");

        } catch (error) {
            console.error("Error during login:", error);
            // setError('An error occurred. Please try again.');
        }
    }
    const setEditData = async (key) => {
        if (showModal) {

        } else {
            console.log(varientList[key])
            // setBrandName(brands[key].brand_name)
            // setEditingId(brands[key]["_id"])
            setCategoryName(varientList[key].varient_name)
            setProductId(varientList[key].product)
            setRegularPrice(varientList[key].regular_price)
            setSellingPrice(varientList[key].selling_price)
            setColor(varientList[key].color)
            setHeight(varientList[key].height)
            setWidth(varientList[key].width)
            setBredth(varientList[key].bredth)
            setWeight(varientList[key].weight)
            setVarientDesc(varientList[key].description)
            setSmallSizeQuantity(varientList[key].smallSizeQuantity)
            setMediumSizeQuantity(varientList[key].mediumSizeQuantity)
            setLargeSizeQuantity(varientList[key].largeSizeQuantity)
            setExtraLargeSizeQuantity(varientList[key].extraLargeSizeQuantity)
            setExtraExtraLargeSizeQuantity(varientList[key].extraExtraLargeSizeQuantity)

            setEditingId(varientList[key]._id)


        }
        setShowModal(!showModal)

    }

    const deletedVarient = async (id, e) => {
        console.log(id);
        try {
            if (window.confirm("Are you sure?")) {
                await axios.post(`${BASE_URL}/varients/deleteVarient`, {
                    id: id
                })
                setVarientList(varientList.filter(varient => varient._id !== id));
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
        console.log("Form Submitted");
        console.log(color)
        const response = await axios.post(`${BASE_URL}/varients/updateVarient`, {
            id:editingId,
            varient_name: categoryName,
            product: productid,
            selling_price: sellingPrice,
            regular_price: regularPrice,
            color: color,
            height: height,
            width: width,
            bredth: bredth,
            weight: weight,
            description: varientDesc,
            smallSizeQuantity: smallSizeQuantity,
            mediumSizeQuantity: mediumSizeQuantity,
            largeSizeQuantity: largeSizeQuantity,
            extraLargeSizeQuantity: extraLargeSizeQuantity,
            extraExtraLargeSizeQuantity: extraExtraLargeSizeQuantity
        });
        console.log("Form Submitted");

        console.log(response.data);
        resetForm();
        setVarientList(await getAllVarients());
        setShowModal(!showModal)
        

        // Clear the input field after successful submission
        // setBrandName("");

        } catch (error) {
            console.error("Error during login:", error);
            // setError('An error occurred. Please try again.');
        }
    }
    return (
        <>

            {showModal && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-lg " style={{ maxHeight: '90vh', overflowY: 'auto' }} role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit {pageName}</h5>
                                <button type="button" className="close" onClick={setEditData}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <form className="col-md-12 row" encType="multipart/form-data" onSubmit={handleEdit}>
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
                                                    value={smallSizeQuantity}
                                                    onChange={(e) => setSmallSizeQuantity(e.target.value)}
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
                                                    value={mediumSizeQuantity}
                                                    onChange={(e) => setMediumSizeQuantity(e.target.value)}
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
                                                    value={largeSizeQuantity}
                                                    onChange={(e) => setLargeSizeQuantity(e.target.value)}
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
                                                    value={extraLargeSizeQuantity}
                                                    onChange={(e) => setExtraLargeSizeQuantity(e.target.value)}
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
                                                    value={extraExtraLargeSizeQuantity}
                                                    onChange={(e) => setExtraExtraLargeSizeQuantity(e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="col-md-12 mt-3 form-group">
                                <input type="submit" name="submit" value="Update" className="btn btn-primary" />
                            </div>
                        </div>
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
                                                    value={smallSizeQuantity}
                                                    onChange={(e) => setSmallSizeQuantity(e.target.value)}
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
                                                    value={mediumSizeQuantity}
                                                    onChange={(e) => setMediumSizeQuantity(e.target.value)}
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
                                                    value={largeSizeQuantity}
                                                    onChange={(e) => setLargeSizeQuantity(e.target.value)}
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
                                                    value={extraLargeSizeQuantity}
                                                    onChange={(e) => setExtraLargeSizeQuantity(e.target.value)}
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
                                                    value={extraExtraLargeSizeQuantity}
                                                    onChange={(e) => setExtraExtraLargeSizeQuantity(e.target.value)}
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

            <div className="card">
                <div className="card-header">
                    Add {pageName}
                </div>
                <div className="card-body">
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>
                                        Sr.
                                    </th>
                                    <th>
                                        Product
                                    </th>
                                    <th>
                                        Varient
                                    </th>
                                    <th>
                                        Regular Price
                                    </th>
                                    <th>
                                        Selling Price
                                    </th>
                                    <th>
                                        Color
                                    </th>
                                    <th>
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    varientList.map((varient, key) => (
                                        <tr key={key}>
                                            <td>
                                                {key + 1}
                                            </td>
                                            <td>
                                                {varient.product}
                                            </td>
                                            <td>
                                                {varient.varient_name}
                                            </td>
                                            <td>
                                                {varient.regular_price}
                                            </td>
                                            <td>
                                                {varient.selling_price}
                                            </td>
                                            <td>
                                                {varient.color}
                                            </td>
                                            <td>
                                                <button className="btn btn-primary"  onClick={(e) => setEditData(key)}>
                                                    Edit
                                                </button>&nbsp;
                                                <button className='btn btn-danger' onClick={(e) => deletedVarient(varient._id, e)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Component;