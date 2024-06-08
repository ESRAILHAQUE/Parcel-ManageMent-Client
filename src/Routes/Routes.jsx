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
import AllParcel from "../Pages/Dashboard/AllParcel/AllParcel";
import Statastics from "../Pages/Dashboard/Statastics/Statastics";
import BookedParcel from "../Pages/Dashboard/UserComponents/BookedParcel/BookedParcel";
import UserProfile from "../Pages/Dashboard/UserComponents/Profile/UserProfile";
import AdminRoutes from './AdminRoutes';
import UpdateParcel from "../Pages/Dashboard/UpdateParcel/UpdateParcel";
import DeliveryList from "../Pages/Dashboard/DeliveryMan/DeliveryList/DeliveryList";

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
  // Dashboard Page Routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // {
      //   path: "/dashboard",
      //   element: <Statastics></Statastics>,
      // },
      // Normal User Routes
      {
        path: "parcelBooking",
        element: <ParcelBooking></ParcelBooking>,
      },
      {
        path: "updateParcel/:id",
        element: <UpdateParcel></UpdateParcel>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/parcelsId/${params.id}`),
      },
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "userParcel",
        element: <BookedParcel></BookedParcel>,
      },
      // Delivery Man Routes
      // {
      //   path: "deliveryList",
      //   element: <DeliveryList></DeliveryList>,
      // },
      // Admin Routes
      {
        path: "allUsers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "allDelivery",
        element: <AllDeliveryMan></AllDeliveryMan>,
      },
      {
        path: "parcels",
        element: <AllParcel></AllParcel>,
      },
    ],
  },
]);