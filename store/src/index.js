import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LayoutWrapper from '../src/GlobalRule/LayoutWrapper.jsx';
// Importando rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginAccount from './pages/LoginAccount.jsx';
import RegisterAccount from './pages/RegisterAccount.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Section1P from './pages/SectionsPages/Section1P.jsx';
import Section2P from '../src/pages/SectionsPages/Section2P.jsx';
import Section3P from '../src/pages/SectionsPages/Section3P.jsx';
import RecoveryPassword from './pages/RecoveryPassword/RecoveryPassword.jsx';
import ResetPassword from './pages/ResetPassword/ResetPassword.jsx';
import Freight from './pages/Freight/freight.jsx';
import Sucess from './pages/MercadoPago/Sucess.jsx';
import Failure from './pages/MercadoPago/Failure.jsx';
import Pending from './pages/MercadoPago/Pending.jsx';
import Profile from './pages/Profile/Profile.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWrapper><App /></LayoutWrapper>
  },
  {
    path: '/login',
    element: <LayoutWrapper><LoginAccount /></LayoutWrapper>
  },
  {
    path: '/register',
    element: <LayoutWrapper><RegisterAccount /></LayoutWrapper>
  },
  {
    path: '/aboutUs',
    element: <LayoutWrapper><AboutUs /></LayoutWrapper>
  },
  {
    path: '/section1',
    element: <LayoutWrapper><Section1P /></LayoutWrapper>
  },
  {
    path: '/section2',
    element: <LayoutWrapper><Section2P /></LayoutWrapper>
  },
  {
    path: '/section3',
    element: <LayoutWrapper><Section3P /></LayoutWrapper>
  },
  {
    path: '/changePassword',
    element: <LayoutWrapper><RecoveryPassword /></LayoutWrapper>
  },
  {
    path: '/resetPassword',
    element: <LayoutWrapper><ResetPassword /></LayoutWrapper>
  },
  {
    path: '/freight',
    element: <LayoutWrapper><Freight /></LayoutWrapper>
  },
  {
    path: '/success',
    element: <LayoutWrapper><Sucess /></LayoutWrapper>
  },
  {
    path: '/failure',
    element: <LayoutWrapper><Failure /></LayoutWrapper>
  },
  {
    path: '/pending',
    element: <LayoutWrapper><Pending /></LayoutWrapper>
  },
  {
    path: '/profile',
    element: <LayoutWrapper><Profile /></LayoutWrapper>
  },
]);

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
