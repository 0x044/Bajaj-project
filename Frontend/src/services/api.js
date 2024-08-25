import axios from 'axios';

const API_URL = 'http://localhost:3000/bfhl'; // Replace with your actual backend URL

export const processBfhlData = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error processing BFHL data:', error);
    throw error;
  }
};