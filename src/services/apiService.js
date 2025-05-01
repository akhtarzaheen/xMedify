import axios from 'axios';

const BASE_URL = 'https://meddata-backend.onrender.com';

// Fetch all states
export const fetchStates = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/states`);
    return response.data;
  } catch (error) {
    console.error('Error fetching states:', error);
    throw error;
  }
};

// Fetch cities for a specific state
export const fetchCities = async (state) => {
  try {
    const response = await axios.get(`${BASE_URL}/cities/${state}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching cities for ${state}:`, error);
    throw error;
  }
};

// Fetch medical centers for a specific state and city
export const fetchMedicalCenters = async (state, city) => {
  try {
    const response = await axios.get(`${BASE_URL}/data`, {
      params: {
        state,
        city
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching medical centers for ${city}, ${state}:`, error);
    throw error;
  }
};

// Get medical center by ID from the local storage (mock function)
export const getMedicalCenterById = (centerId, medicalCenters) => {
  return medicalCenters.find(center => center['Provider ID'] === centerId);
};


