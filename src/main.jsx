import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthLayout from './Layouts/AuthLayout.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AddNewCampaign from './Components/AddNewCampaign.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Private from './Components/Private.jsx';
import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />
  },
  {
    path: "/addNewCampaign",
    element: <Private><AddNewCampaign></AddNewCampaign></Private>,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
        {
          path: "/auth/login",
          element: <Login></Login>,
        },
        {
          path: "/auth/register",
          element: <Register></Register>,
        },
      ],
},

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
