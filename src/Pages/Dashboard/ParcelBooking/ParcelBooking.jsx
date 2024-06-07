import React, { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Authcontext } from "../../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import parcelImg from '../../../assets/Parcel/parcel.png'
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

function ParcelBooking() {
    const { user } = useContext(Authcontext);
  const axiosPublic = useAxiosPublic();
  const { data: DBusers = [], refetch } = useQuery({
    queryKey: ["DBusers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`allUsers/${user.email}`);
      //  console.log(res.data);
      return res.data;
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [price, setPrice] = useState(0);

  const calculatePrice = (weight) => {
      if (weight <= 1) {
          return 50;
         
    } 
    if (weight <= 2) return 100;
    return 150;
  };

  useEffect(() => {
    const weight = parseFloat(watch("parcelWeight")) || 0;
    setPrice(calculatePrice(weight));
  }, [watch("parcelWeight")]);

  const onSubmit = (data) => {
    const bookingData = {
      ...data,
      name: user.displayName,
      email: user.email,
      bookingDate:new Date().toLocaleDateString("en-CA"),
      price,
      Status:'Pending',
    };

    axiosPublic
      .post("/user/bookings", bookingData)
      .then((response) => {
        console.log("Booking submitted: ", response.data);
          reset();
          if (response.data.insertedId) {
               Swal.fire({
                 position: "top-end",
                 icon: "success",
                 title: "Bookings success",
                 showConfirmButton: false,
                 timer: 1500,
               });
          }
      })
      .catch((error) => {
        console.error("There was an error submitting the booking!", error);
      });
    refetch();
  };

  return (
    <>
      <Helmet>
        <title>DelivTract | Bookings</title>
      </Helmet>
      <div className=" flex justify-center mt-2 mx-auto">
        <img className=" w-56" src={parcelImg} alt="" />
      </div>
      {/* <div className="divider"></div> */}
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content">
          <div className="card w-full shadow-2xl bg-base-100">
            <form
              className="card-body w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col md:flex-row lg:flex-row gap-6 justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    value={user?.displayName || DBusers?.name}
                    readOnly
                    {...register("name")}
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
                    value={user.email}
                    readOnly
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row lg:flex-row gap-6 justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    {...register("phoneNumber", { required: true })}
                  />
                  {errors.phoneNumber && <span>This field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Parcel Type</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Parcel Type"
                    className="input input-bordered"
                    {...register("parcelType", { required: true })}
                  />
                  {errors.parcelType && <span>This field is required</span>}
                </div>
              </div>

              <div className="flex flex-col md:flex-row lg:flex-row gap-6 justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Parcel Weight (kg)</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Parcel Weight"
                    className="input input-bordered"
                    {...register("parcelWeight", { required: true, min: 1 })}
                  />
                  {errors.parcelWeight && <span> must be greater than 0</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Receiver’s Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Receiver’s Name"
                    className="input input-bordered"
                    {...register("receiverName", { required: true })}
                  />
                  {errors.receiverName && <span>This field is required</span>}
                </div>
              </div>

              <div className="flex flex-col md:flex-row lg:flex-row gap-6 justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Receiver's Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Receiver's Phone Number"
                    className="input input-bordered"
                    {...register("receiverPhoneNumber", { required: true })}
                  />
                  {errors.receiverPhoneNumber && (
                    <span>This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Parcel Delivery Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Parcel Delivery Address"
                    className="input input-bordered"
                    {...register("deliveryAddress", { required: true })}
                  />
                  {errors.deliveryAddress && (
                    <span>This field is required</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row lg:flex-row gap-6 justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Requested Delivery Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Requested Delivery Date"
                    className="input input-bordered"
                    {...register("deliveryDate")}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Delivery Address Latitude
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="i.e 21.121365496"
                    className="input input-bordered"
                    {...register("deliveryLatitude", { required: true })}
                  />
                  {errors.deliveryLatitude && (
                    <span>This field is required</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row lg:flex-row gap-6 justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Delivery Address Longitude
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="i.e 21.121365496"
                    className="input input-bordered"
                    {...register("deliveryLongitude", { required: true })}
                  />
                  {errors.deliveryLongitude && (
                    <span>This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price (Tk)</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    className="input input-bordered"
                    value={price}
                    readOnly
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ParcelBooking;
