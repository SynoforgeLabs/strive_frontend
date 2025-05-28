import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tutor-applications/';

// Create axios instance for tutor applications
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Submit tutor application
const submitApplication = async (formData) => {
  try {
    // Create FormData object for file uploads
    const submitData = new FormData();
    
    // Add all form fields to FormData
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null && formData[key] !== undefined) {
        if (key === 'videoSubmission' || key === 'resume') {
          // Handle file uploads
          if (formData[key]) {
            submitData.append(key === 'videoSubmission' ? 'video_submission' : 'resume', formData[key]);
          }
        } else {
          // Convert form field names to snake_case for Django
          const djangoFieldName = key.replace(/([A-Z])/g, '_$1').toLowerCase();
          
          // Convert boolean strings to actual booleans
          let value = formData[key];
          if (value === 'yes') value = true;
          if (value === 'no') value = false;
          
          submitData.append(djangoFieldName, value);
        }
      }
    });
    
    const response = await axiosInstance.post('apply/', submitData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Network error' };
  }
};

// Get application status by application ID
const getApplicationStatus = async (applicationId) => {
  try {
    const response = await axiosInstance.get(`status/${applicationId}/`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Network error' };
  }
};

// Get application status by email
const getApplicationStatusByEmail = async (email) => {
  try {
    const response = await axiosInstance.post('status-by-email/', { email });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Network error' };
  }
};

const tutorApplicationService = {
  submitApplication,
  getApplicationStatus,
  getApplicationStatusByEmail,
};

export default tutorApplicationService; 