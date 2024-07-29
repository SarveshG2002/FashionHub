// api.js
import axios from 'axios';
import { BASE_URL } from './Host.jsx';

export const getAllbrands = async () => {
    try {
        let response = await axios.post(`${BASE_URL}/brands/getAllBrands`);
        console.log("",response);
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
            return response.data.data;
        } else {
            throw new Error('Failed to fetch categories');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
