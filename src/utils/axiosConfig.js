import axios from "axios";

// Define the base URL for API requests
// This uses an environment variable (VITE_API_BASE_URL) to dynamically set the API base URL
// Ensure this variable is defined in your environment or .env file

const baseURL = import.meta.env.VITE_API_BASE_URL;

// Create an Axios instance with the base URL and credentials
const axiosInstance = axios.create({
  baseURL, // Base URL for all requests
  withCredentials: true, // Include cookies and credentials with every request
});

// Add a response interceptor to handle responses globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      alert("Session expired. Please log in again.");
      localStorage.removeItem("isLoggedIn");
      window.location.href = "/";
    }
    // Reject the promise with the error object for further handling
    return Promise.reject(error);
  }
);

export default axiosInstance;
