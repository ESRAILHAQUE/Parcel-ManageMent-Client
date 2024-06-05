import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Dashboard from "../Layout/Dashboard";
import ParcelBooking from "../Pages/Dashboard/ParcelBooking/ParcelBooking";
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllDeliveryMan from "../Pages/Dashboard/AllDeliveryMan/AllDeliveryMan";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "parcelBooking",
        element: <ParcelBooking></ParcelBooking>,
      },
      // Admin Routes
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "allDelivery",
        element: <AllDeliveryMan></AllDeliveryMan>,
      },
    ],
  },
]);