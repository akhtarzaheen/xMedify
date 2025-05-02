import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchStates, fetchCities, fetchMedicalCenters } from '../services/apiService';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [bookings, setBookings] = useState(localStorage.getItem('bookings') ? JSON.parse(localStorage.getItem('bookings')) :[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load states on component mount
  useEffect(() => {
    const loadStates = async () => {
      try {
        setLoading(true);
        const statesData = await fetchStates();
        setStates(statesData);
      } catch (err) {
        setError('Failed to load states. Please try again later.');
        console.error('Error loading states:', err);
      } finally {
        setLoading(false);
      }
    };

    loadStates();
  }, []);

  // Load cities when state changes
  useEffect(() => {
    const loadCities = async () => {
      if (selectedState) {
        try {
          setLoading(true);
          const citiesData = await fetchCities(selectedState);
          setCities(citiesData);
        } catch (err) {
          setError('Failed to load cities. Please try again later.');
          console.error('Error loading cities:', err);
        } finally {
          setLoading(false);
        }
      } else {
        setCities([]);
      }
    };

    loadCities();
  }, [selectedState]);

  // Load medical centers when both state and city are selected
  const searchMedicalCenters = async () => {
    if (selectedState && selectedCity) {
      try {
        setLoading(true);
        const centersData = await fetchMedicalCenters(selectedState, selectedCity);
        setMedicalCenters(centersData);
        return centersData;
      } catch (err) {
        setError('Failed to load medical centers. Please try again later.');
        console.error('Error loading medical centers:', err);
        return [];
      } finally {
        setLoading(false);
      }
    } else {
      return [];
    }
  };

  // Load bookings from localStorage
  useEffect(() => {
    const storedBookings = localStorage.getItem('bookings');
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    }
  }, []);

  // Save bookings to localStorage when they change
  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  // Add a new booking
  const addBooking = (booking) => {
    setBookings((prevBookings) => [...prevBookings, booking]);
  };

  // Cancel a booking
  const cancelBooking = (bookingId) => {
    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.id !== bookingId)
    );
  };

  return (
    <AppContext.Provider
      value={{
        states,
        cities,
        selectedState,
        setSelectedState,
        selectedCity,
        setSelectedCity,
        medicalCenters,
        setMedicalCenters,
        bookings,
        addBooking,
        cancelBooking,
        loading,
        error,
        searchMedicalCenters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};