import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom"

function Dashboard() {
  return (
    <div className="flex">
      <div className="bg-orange-300 min-h-screen">
        <p>My Cart</p>
        <ul className=" text-blue-800 p-4 space-y-2">
          <li>
            <NavLink>My Profile</NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/parcelBooking'}>Book a Parcel</NavLink>
          </li>
          <li>
            <NavLink> My Parcels</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"} className="flex gap-2 items-center">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <p>My cart item</p>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
export default Dashboard