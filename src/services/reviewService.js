import axios from 'axios';

const API_URL = 'http://localhost:8000/api/reviews/';

// Create axios instance for reviews
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Get all active reviews
const getReviews = async () => {
  try {
    const response = await axiosInstance.get('');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Network error' };
  }
};

const reviewService = {
  getReviews,
};

export default reviewService; 