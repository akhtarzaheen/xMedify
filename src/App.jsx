import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import BookingPage from './pages/BookingPage/BookingPage';
import MyBookings from './pages/MyBookings/MyBookings';
import { AppProvider } from './context/AppContext';
import styles from './App.module.css';

function App() {
  return (
    <AppProvider>
      <div className={styles.app}>
        <Header />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/booking/:centerId" element={<BookingPage />} />
            <Route path="/my-bookings" element={<MyBookings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;