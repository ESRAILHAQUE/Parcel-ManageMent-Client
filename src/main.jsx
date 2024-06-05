import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "@fontsource/jetbrains-mono"; // Defaults to weight 400
import "@fontsource/jetbrains-mono/400.css"; // Specify weight
import "@fontsource/jetbrains-mono/400-italic.css"; // Specify weight and style
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { Helmet, HelmetProvider } from "react-helmet-async";
import "animate.css";
import AuthProviders from './Providers/AuthProviders.jsx';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <div className='border-red-800 '>
          
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>
);