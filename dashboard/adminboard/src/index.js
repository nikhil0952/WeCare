import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

export const Context = createContext({isAuth:false});

const AppWrapper = () => {
  const [isAuth, setIsAuth] = useState();
  const [admin, setAdmin] = useState();
  return (
    <Context.Provider value={{isAuth, setIsAuth, admin, setAdmin}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  )

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppWrapper/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
