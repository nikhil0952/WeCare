import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import Appointment from './pages/Appointment.js';
import AboutUs from './pages/AboutUs.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar.js';
import { useContext, useEffect } from 'react';
import { Context } from './index.js';
import axios from 'axios';

function App() {

  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(
    () => {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            "http://localhost:4000/api/v1/patient/details",
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          setIsAuthenticated(true);
          setUser(response.data.userData);

        } catch (error) {
          setIsAuthenticated(false);
          setUser({});
        }
      };
      fetchUser();
    }
    ,
    [isAuthenticated]
  );

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer position='top-center' />

    </>
  );
}

export default App;
