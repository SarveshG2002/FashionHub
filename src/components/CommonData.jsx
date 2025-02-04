// api.js
import axios from 'axios';
import { BASE_URL } from './Host.jsx';

export const getAllbrands = async () => {
    try {
        let response = await axios.post(`${BASE_URL}/brands/getAllBrands`);

        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/category/getAllCategories`);
        if (response.data.success) {
            console.log("", response);
            return response.data.data;
        } else {
            throw new Error('Failed to fetch categories');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products/getAllProducts`);
        if (response.data.success) {
            console.log("", response);
            return response.data.data;
        } else {
            throw new Error('Failed to fetch categories');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getAllVarients = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/varients/getAllVarients`);
        if (response.data.success) {
            console.log("", response);
            return response.data.data;
        } else {
            throw new Error('Failed to fetch categories');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
