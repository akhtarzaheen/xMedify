// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAppContext } from '../../context/AppContext';
// import { Search, Building, User, Heart, Guitar as Hospital, Award, BookOpen } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();
//   const { 
//     states, 
//     cities, 
//     selectedState, 
//     setSelectedState, 
//     selectedCity, 
//     setSelectedCity, 
//     loading,
//     searchMedicalCenters
//   } = useAppContext();

//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//     setSelectedCity('');
//   };

//   const handleCityChange = (e) => {
//     setSelectedCity(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (selectedState && selectedCity) {
//       await searchMedicalCenters();
//       navigate('/search');
//     }
//   };

//   const specializations = [
//     { icon: <User size={24} />, name: 'Cardiology' },
//     { icon: <Heart size={24} />, name: 'Neurology' },
//     { icon: <BookOpen size={24} />, name: 'Pediatrics' },
//     { icon: <Hospital size={24} />, name: 'Orthopedics' },
//     { icon: <Award size={24} />, name: 'Dermatology' },
//     { icon: <User size={24} />, name: 'Ophthalmology' },
//     { icon: <Heart size={24} />, name: 'Gynecology' },
//     { icon: <Hospital size={24} />, name: 'Dentistry' }
//   ];

//   const doctors = [
//     { id: 1, name: 'Dr. Sarah Johnson', specialization: 'Cardiologist', image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//     { id: 2, name: 'Dr. James Wilson', specialization: 'Neurologist', image: 'https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//     { id: 3, name: 'Dr. Emily Roberts', specialization: 'Pediatrician', image: 'https://images.pexels.com/photos/5207089/pexels-photo-5207089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//     { id: 4, name: 'Dr. Michael Brown', specialization: 'Orthopedic Surgeon', image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
//   ];

//   const news = [
//     { id: 1, title: 'New Research on Heart Disease Prevention', image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', date: 'May 15, 2025' },
//     { id: 2, title: 'Breakthrough in Cancer Treatment Methodology', image: 'https://images.pexels.com/photos/3952043/pexels-photo-3952043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', date: 'May 10, 2025' },
//     { id: 3, title: 'COVID-19: Latest Updates and Recommendations', image: 'https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', date: 'May 5, 2025' }
//   ];

//   return (
//     <div className="home-page">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="container">
//           <div className="hero-content">
//             <div className="hero-text">
//               <h1>Find and Book the Best Medical Centers</h1>
//               <p>Search for top-rated medical centers in your area and book appointments easily</p>
              
//               <form className="search-form" onSubmit={handleSubmit}>
//                 <div className="search-container">
//                   <div className="search-group" id="state">
//                     <label htmlFor="state-select">State</label>
//                     <select
//                       id="state-select"
//                       value={selectedState}
//                       onChange={handleStateChange}
//                       disabled={loading}
//                       required
//                     >
//                       <option value="">Select State</option>
//                       {states.map((state, index) => (
//                         <option key={index} value={state}>
//                           {state}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
                  
//                   <div className="search-group" id="city">
//                     <label htmlFor="city-select">City</label>
//                     <select
//                       id="city-select"
//                       value={selectedCity}
//                       onChange={handleCityChange}
//                       disabled={!selectedState || loading}
//                       required
//                     >
//                       <option value="">Select City</option>
//                       {cities.map((city, index) => (
//                         <option key={index} value={city}>
//                           {city}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
                  
//                   <button 
//                     type="submit" 
//                     className="search-button"
//                     id="searchBtn"
//                     disabled={!selectedState || !selectedCity || loading}
//                   >
//                     <Search size={18} />
//                   Search
//                   </button>
//                 </div>
//               </form>
//             </div>
            
//             <div className="hero-image">
//               <img src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Medical professionals" />
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Services Section */}
//       <section className="services-section">
//         <div className="container">
//           <div className="services-container">
//             <div className="service-item">
//               <div className="service-icon">
//                 <Building size={24} />
//               </div>
//               <h3>Find Hospitals</h3>
//             </div>
//             <div className="service-item">
//               <div className="service-icon">
//                 <User size={24} />
//               </div>
//               <h3>Find Doctors</h3>
//             </div>
//             <div className="service-item">
//               <div className="service-icon">
//                 <Heart size={24} />
//               </div>
//               <h3>Health Checkups</h3>
//             </div>
//             <div className="service-item">
//               <div className="service-icon">
//                 <Hospital size={24} />
//               </div>
//               <h3>Lab Tests</h3>
//             </div>
//             <div className="service-item">
//               <div className="service-icon">
//                 <Award size={24} />
//               </div>
//               <h3>Medicines</h3>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Specialization Section */}
//       <section className="specialization-section">
//         <div className="container">
//           <h2 className="section-title">Find By Specialization</h2>
//           <div className="specialization-grid">
//             {specializations.map((specialization, index) => (
//               <div className="specialization-item" key={index}>
//                 <div className="specialization-icon">{specialization.icon}</div>
//                 <p>{specialization.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Doctors Section */}
//       <section className="doctors-section">
//         <div className="container">
//           <h2 className="section-title">Our Medical Specialists</h2>
//           <div className="doctors-carousel">
//             <Swiper
//               modules={[Pagination, Navigation, Autoplay]}
//               spaceBetween={30}
//               slidesPerView={1}
//               pagination={{ clickable: true }}
//               navigation
//               autoplay={{ delay: 5000 }}
//               breakpoints={{
//                 640: {
//                   slidesPerView: 2,
//                 },
//                 1024: {
//                   slidesPerView: 3,
//                 },
//               }}
//             >
//               {doctors.map((doctor) => (
//                 <SwiperSlide key={doctor.id}>
//                   <div className="doctor-card">
//                     <div className="doctor-image">
//                       <img src={doctor.image} alt={doctor.name} />
//                     </div>
//                     <div className="doctor-info">
//                       <h3>{doctor.name}</h3>
//                       <p>{doctor.specialization}</p>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </section>
      
//       {/* Patient Care Section */}
//       <section className="patient-care-section">
//         <div className="container">
//           <div className="patient-care-content">
//             <div className="patient-care-image">
//               <img src="https://images.pexels.com/photos/7089396/pexels-photo-7089396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Patient care" />
//             </div>
//             <div className="patient-care-text">
//               <h2>Patient Caring</h2>
//               <p>We are committed to providing the highest quality of care to our patients. Our team of medical professionals is dedicated to ensuring your comfort and well-being throughout your treatment.</p>
//               <ul className="care-features">
//                 <li>24/7 Emergency Services</li>
//                 <li>Personalized Treatment Plans</li>
//                 <li>Advanced Medical Technology</li>
//                 <li>Compassionate Healthcare Providers</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* News Section */}
//       <section className="news-section">
//         <div className="container">
//           <h2 className="section-title">Read Our Latest News</h2>
//           <div className="news-grid">
//             {news.map((item) => (
//               <div className="news-card" key={item.id}>
//                 <div className="news-image">
//                   <img src={item.image} alt={item.title} />
//                 </div>
//                 <div className="news-content">
//                   <h3>{item.title}</h3>
//                   <p className="news-date">{item.date}</p>
//                   <a href="#" className="read-more">Read More</a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* FAQ Section */}
//       <section className="faq-section">
//         <div className="container">
//           <h2 className="section-title">Frequently Asked Questions</h2>
//           <div className="faq-content">
//             <div className="faq-image">
//               <img src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Doctor and patient" />
//             </div>
//             <div className="faq-list">
//               <div className="faq-item">
//                 <h3>Why should I schedule an online doctor visit?</h3>
//                 <p>Online visits provide convenient access to healthcare professionals without the need to travel to a physical location.</p>
//               </div>
//               <div className="faq-item">
//                 <h3>How much does a consultation cost?</h3>
//                 <p>Consultation costs vary depending on the specialist and type of service. Many insurance plans cover online consultations.</p>
//               </div>
//               <div className="faq-item">
//                 <h3>How do I schedule an appointment?</h3>
//                 <p>You can schedule an appointment by selecting a medical center, choosing an available date and time slot, and confirming your booking.</p>
//               </div>
//               <div className="faq-item">
//                 <h3>What if I need to cancel or reschedule?</h3>
//                 <p>You can cancel or reschedule appointments through your account in the My Bookings section.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* App Download Section */}
//       <section className="app-download-section">
//         <div className="container">
//           <div className="app-content">
//             <div className="app-text">
//               <h2>Download the MedCenter App</h2>
//               <p>Get the best healthcare experience on your mobile device. Book appointments, consult with doctors, and access your medical records anytime, anywhere.</p>
//               <div className="app-buttons">
//                 <a href="#" className="app-button">
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
//                 </a>
//                 <a href="#" className="app-button">
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
//                 </a>
//               </div>
//             </div>
//             <div className="app-image">
//               <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Mobile app" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { Search, Building, User, Heart, Guitar as Hospital, Award, BookOpen } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { 
    states, 
    cities, 
    selectedState, 
    setSelectedState, 
    selectedCity, 
    setSelectedCity, 
    loading,
    searchMedicalCenters
  } = useAppContext();

  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setSelectedCity('');
    setStateDropdownOpen(false);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setCityDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      await searchMedicalCenters();
      navigate('/search');
    }
  };

  const specializations = [
    { icon: <User size={24} />, name: 'Cardiology' },
    { icon: <Heart size={24} />, name: 'Neurology' },
    { icon: <BookOpen size={24} />, name: 'Pediatrics' },
    { icon: <Hospital size={24} />, name: 'Orthopedics' },
    { icon: <Award size={24} />, name: 'Dermatology' },
    { icon: <User size={24} />, name: 'Ophthalmology' },
    { icon: <Heart size={24} />, name: 'Gynecology' },
    { icon: <Hospital size={24} />, name: 'Dentistry' }
  ];

  const doctors = [
    { id: 1, name: 'Dr. Sarah Johnson', specialization: 'Cardiologist', image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Dr. James Wilson', specialization: 'Neurologist', image: 'https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Dr. Emily Roberts', specialization: 'Pediatrician', image: 'https://images.pexels.com/photos/5207089/pexels-photo-5207089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, name: 'Dr. Michael Brown', specialization: 'Orthopedic Surgeon', image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ];

  const news = [
    { id: 1, title: 'New Research on Heart Disease Prevention', image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', date: 'May 15, 2025' },
    { id: 2, title: 'Breakthrough in Cancer Treatment Methodology', image: 'https://images.pexels.com/photos/3952043/pexels-photo-3952043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', date: 'May 10, 2025' },
    { id: 3, title: 'COVID-19: Latest Updates and Recommendations', image: 'https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', date: 'May 5, 2025' }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Find and Book the Best Medical Centers</h1>
              <p>Search for top-rated medical centers in your area and book appointments easily</p>
              
              <form className="search-form" onSubmit={handleSubmit}>
                <div className="search-container">
                  <div className="search-group" id="state">
                    <label>State</label>
                    <div 
                      className="dropdown-button"
                      onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
                    >
                      {selectedState || 'Select State'}
                    </div>
                    <ul className="dropdown-list" style={{ display: stateDropdownOpen ? 'block' : 'none' }}>
                      {states.map((state, index) => (
                        <li
                          key={index}
                          onClick={() => handleStateSelect(state)}
                        >
                          {state}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="search-group" id="city">
                    <label>City</label>
                    <div 
                      className="dropdown-button"
                      onClick={() => selectedState && setCityDropdownOpen(!cityDropdownOpen)}
                    >
                      {selectedCity || 'Select City'}
                    </div>
                    <ul className="dropdown-list" style={{ display: cityDropdownOpen ? 'block' : 'none' }}>
                      {cities.map((city, index) => (
                        <li
                          key={index}
                          onClick={() => handleCitySelect(city)}
                        >
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="search-button"
                    id="searchBtn"
                    disabled={!selectedState || !selectedCity || loading}
                  >
                    <Search size={18} />
                    <span>Search</span>
                  </button>
                </div>
              </form>
            </div>
            
            <div className="hero-image">
              <img src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Medical professionals" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="services-section">
        <div className="container">
          <div className="services-container">
            <div className="service-item">
              <div className="service-icon">
                <Building size={24} />
              </div>
              <h3>Find Hospitals</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <User size={24} />
              </div>
              <h3>Find Doctors</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <Heart size={24} />
              </div>
              <h3>Health Checkups</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <Hospital size={24} />
              </div>
              <h3>Lab Tests</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <Award size={24} />
              </div>
              <h3>Medicines</h3>
            </div>
          </div>
        </div>
      </section>
      
      <section className="specialization-section">
        <div className="container">
          <h2 className="section-title">Find By Specialization</h2>
          <div className="specialization-grid">
            {specializations.map((specialization, index) => (
              <div className="specialization-item" key={index}>
                <div className="specialization-icon">{specialization.icon}</div>
                <p>{specialization.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="doctors-section">
        <div className="container">
          <h2 className="section-title">Our Medical Specialists</h2>
          <div className="doctors-carousel">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {doctors.map((doctor) => (
                <SwiperSlide key={doctor.id}>
                  <div className="doctor-card">
                    <div className="doctor-image">
                      <img src={doctor.image} alt={doctor.name} />
                    </div>
                    <div className="doctor-info">
                      <h3>{doctor.name}</h3>
                      <p>{doctor.specialization}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      
      <section className="patient-care-section">
        <div className="container">
          <div className="patient-care-content">
            <div className="patient-care-image">
              <img src="https://images.pexels.com/photos/7089396/pexels-photo-7089396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Patient care" />
            </div>
            <div className="patient-care-text">
              <h2>Patient Caring</h2>
              <p>We are committed to providing the highest quality of care to our patients. Our team of medical professionals is dedicated to ensuring your comfort and well-being throughout your treatment.</p>
              <ul className="care-features">
                <li>24/7 Emergency Services</li>
                <li>Personalized Treatment Plans</li>
                <li>Advanced Medical Technology</li>
                <li>Compassionate Healthcare Providers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">Read Our Latest News</h2>
          <div className="news-grid">
            {news.map((item) => (
              <div className="news-card" key={item.id}>
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-content">
                  <h3>{item.title}</h3>
                  <p className="news-date">{item.date}</p>
                  <a href="#" className="read-more">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-content">
            <div className="faq-image">
              <img src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Doctor and patient" />
            </div>
            <div className="faq-list">
              <div className="faq-item">
                <h3>Why should I schedule an online doctor visit?</h3>
                <p>Online visits provide convenient access to healthcare professionals without the need to travel to a physical location.</p>
              </div>
              <div className="faq-item">
                <h3>How much does a consultation cost?</h3>
                <p>Consultation costs vary depending on the specialist and type of service. Many insurance plans cover online consultations.</p>
              </div>
              <div className="faq-item">
                <h3>How do I schedule an appointment?</h3>
                <p>You can schedule an appointment by selecting a medical center, choosing an available date and time slot, and confirming your booking.</p>
              </div>
              <div className="faq-item">
                <h3>What if I need to cancel or reschedule?</h3>
                <p>You can cancel or reschedule appointments through your account in the My Bookings section.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="app-download-section">
        <div className="container">
          <div className="app-content">
            <div className="app-text">
              <h2>Download the MedCenter App</h2>
              <p>Get the best healthcare experience on your mobile device. Book appointments, consult with doctors, and access your medical records anytime, anywhere.</p>
              <div className="app-buttons">
                <a href="#" className="app-button">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                </a>
                <a href="#" className="app-button">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                </a>
              </div>
            </div>
            <div className="app-image">
              <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Mobile app" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;



