// src/config/config.js
const getLocalIP = () => {
    // You can dynamically fetch the IP address here or use a static one
    // For example, fetching from an environment variable or using a static IP
    // Here, we'll use a static IP for simplicity
    return 'http://localhost:3000';
    // return 'http://192.168.0.108:8080'
}

export const BASE_URL = getLocalIP();
