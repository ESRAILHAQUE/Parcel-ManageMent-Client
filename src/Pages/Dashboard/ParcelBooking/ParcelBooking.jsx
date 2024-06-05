import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Authcontext } from "../../../Providers/AuthProviders";

function ParcelBooking() {
    const { user } = useContext(Authcontext);
    console.log(user)
 return (
   <>
     <Helmet>
       <title>DelivTract | Bookings</title>
     </Helmet>
     <div className="hero min-h-screen bg-base-200">
       <div className="hero-content">
         <div className="card w-full shadow-2xl bg-base-100">
           <form className="card-body">
             <div className="flex flex-col gap-2">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Name</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Name"
                   className="input input-bordered"
                   value={user.displayName} // Replace with the actual user name state
                   readOnly
                   required
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input
                   type="email"
                   placeholder="Email"
                   className="input input-bordered"
                   value={user.email} // Replace with the actual user email state
                   readOnly
                   required
                 />
               </div>
             </div>

             <div className="flex flex-col gap-2">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Phone Number</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Phone Number"
                   className="input input-bordered"
                   required
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Parcel Type</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Parcel Type"
                   className="input input-bordered"
                   required
                 />
               </div>
             </div>

             <div className="flex flex-col gap-2">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Parcel Weight (kg)</span>
                 </label>
                 <input
                   type="number"
                   placeholder="Parcel Weight"
                   className="input input-bordered"
                   required
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Receiver’s Name</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Receiver’s Name"
                   className="input input-bordered"
                   required
                 />
               </div>
             </div>

             <div className="flex flex-col gap-2">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Receiver's Phone Number</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Receiver's Phone Number"
                   className="input input-bordered"
                   required
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Parcel Delivery Address</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Parcel Delivery Address"
                   className="input input-bordered"
                   required
                 />
               </div>
             </div>

             <div className="flex flex-col gap-2">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Requested Delivery Date</span>
                 </label>
                 <input
                   type="date"
                   placeholder="Requested Delivery Date"
                   className="input input-bordered"
                   required
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Delivery Address Latitude</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Delivery Address Latitude"
                   className="input input-bordered"
                   required
                 />
               </div>
             </div>

             <div className="flex flex-col gap-2">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">
                     Delivery Address Longitude
                   </span>
                 </label>
                 <input
                   type="text"
                   placeholder="Delivery Address Longitude"
                   className="input input-bordered"
                   required
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Price (Tk)</span>
                 </label>
                 <input
                   type="number"
                   placeholder="Price"
                   className="input input-bordered"
                   value={price} // Replace with the calculated price state
                   readOnly
                   required
                 />
               </div>
             </div>

             <div className="form-control mt-6">
               <button className="btn btn-primary">Submit</button>
             </div>
           </form>
         </div>
       </div>
     </div>
   </>
 );
}
export default ParcelBooking