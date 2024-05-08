import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import { useContext, useEffect } from 'react';
import {Context} from "../src/index.js";
import axios from 'axios';




function App() {


  

  const { isAuth, setIsAuth } = useContext(Context);
  const navigate = useNavigate();

  useEffect(
    () => {
      const fetchUser = async () => {
        const response = await axios.get(
          "http://localhost:4000/api/v1/admin/details",
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            }
          }
        ).then((res)=>{
          setIsAuth(true);
          
        }).catch(error=>{
          setIsAuth(false);
          navigate('login');
        })
      };
      fetchUser();
    }
    ,
    [isAuth]
  );

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
      </Routes>
      <ToastContainer position='top-center' />
    </>
  );
}

export default App;
