import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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



 const router = createBrowserRouter([

  {
path:"/",
element: <App/>
  },
  {
   path: "/login",
   element: <LoginAccount/>
  },
  {
    path: "/register",
    element: <RegisterAccount/>
  },
  {
    path: "/aboutUs",
    element: <AboutUs/>
  },
  {
    path: "/section1",
    element: <Section1P/>
  },
  {
    path: "/section2",
    element: <Section2P/>
  },
  {
    path: "/section3",
    element: <Section3P/>
  },
  {
  path: "/changePassword",
  element: <RecoveryPassword/>
}, {
  path: "/resetPassword",
  element: <ResetPassword/>
},
{
  path: "/freight",
  element: <Freight/>
},
{
  path: "/sucess",
  element: <Sucess/>
},
{
  path: "/failure",
  element: <Failure/>
},
{
  path: "/pending",
  element: <Pending/>
}
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
