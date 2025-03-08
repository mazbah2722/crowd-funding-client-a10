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
import MyCampaign from './Components/MyCampaign.jsx';
import MyDonation from './Components/MyDonation.jsx';
import AllCampaign from './Components/AllCampaign.jsx';
import DetailsPage from './Pages/DetailsPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />
  },
  {
    path: "/AllCampaign",
    element:<AllCampaign></AllCampaign>,
    loader: () => fetch('http://localhost:5000/campaign')
  },
  {
    path: "/addNewCampaign",
    element: <Private><AddNewCampaign></AddNewCampaign></Private>,
  },
  {
    path: "/myCampaign",
    element: <Private><MyCampaign></MyCampaign></Private>,
    // loader: () => fetch('http://localhost:5000/campaign')
  },
  {
    path: '/detailsPage/:id',
    element: <DetailsPage></DetailsPage>,
    loader: ({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
  },
  {
    path: "/myDonation",
    element: <Private><MyDonation></MyDonation></Private>,
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
