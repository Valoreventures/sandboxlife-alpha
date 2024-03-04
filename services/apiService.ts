import axios from 'axios';

// Create an instance of axios with the base URL
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// Set up a utility function to handle GET requests
const getAPI = async (path) => {
  try {
    const result = await API.get(path);
    return result.data;
  } catch (error) {
    // handle error
    throw error;
  }
};

// Set up a utility function to handle POST requests
const postAPI = async (path, payload) => {
  try {
    const result = await API.post(path, payload);
    return result.data;
  } catch (error) {
    // handle error
    throw error;
  }
};

// Similarly, for PUT requests
const putAPI = async (path, payload) => {
  try {
    const result = await API.put(path, payload);
    return result.data;
  } catch (error) {
    // handle error
    throw error;
  }
};

// Add other methods as needed...

export {
  getAPI,
  postAPI,
  putAPI,
  // other methods...
};
