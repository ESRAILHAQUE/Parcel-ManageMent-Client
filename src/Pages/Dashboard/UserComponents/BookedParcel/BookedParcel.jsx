import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import ParcelTabular from "./UserParcelTabular";
import { useContext } from "react";
import { Authcontext } from "../../../../Providers/AuthProviders";
import UserParcelTabular from "./UserParcelTabular";

function BookedParcel() {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(Authcontext);
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${user.email}`);
      //  console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="text-center font-extrabold bg-base-200">
            <tr>
              <th>#</th>
              <th>Type</th>
              <th>
                Requested <br /> Delivery Date
              </th>
              <th>
                Approximate <br /> Delivery Date
              </th>
              <th>Booking Date</th>
              <th>
                Delivery Men <br />
                ID
              </th>
              <th>Booking Status</th>
              <th>Update</th>
              <th>Cancel</th>
              <th>Review</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {parcels.map((parcel, index) => (
              <UserParcelTabular
                key={parcel._id}
                parcel={parcel}
                index={index + 1}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default BookedParcel;
