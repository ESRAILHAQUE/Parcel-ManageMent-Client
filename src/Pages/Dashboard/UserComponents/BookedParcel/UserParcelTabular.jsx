import { FaEdit } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { GoCodeReview } from "react-icons/go";
import { ImCross } from "react-icons/im";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";
import BookedParcel from "./BookedParcel";
import Swal from "sweetalert2";



function UserParcelTabular({ parcel, index,refetch }) {
  //  const queryClient = useQueryClient();
  // const { refetch } = BookedParcel();
  const axiosSecure = useAxiosSecure();

 
  const handleCancel = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.patch(`/parcels/${id}`);
        console.log(res.data);
        if (res.data.modifiedCount>0) {
          refetch();
          Swal.fire({
            title: "Cancelled!",
            text: `${parcel.parcelType} has been Cancelled`,
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Error canceling parcel:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error deleting your file.",
          icon: "error",
        });
      }
    }
  };
  const {
    bookingDate,
    deliveryDate,
    parcelType,
    Status,
  } = parcel;

  return (
    <tr className="hover text-center">
      <th>{index}</th>
      <td>{parcelType}</td>
      <td>{deliveryDate}</td>
      <td>{deliveryDate}</td>
      <td>{bookingDate}</td>

      <td>{"D-344"}</td>
      <td className="text-orange-300">{Status}</td>
      <td>
        {Status === "Pending" ? (
          <button className="btn bg-purple-500 text-green-500  text-xl font-bold">
            <FaEdit></FaEdit>
          </button>
        ) : (
          <button
            disabled
            className="btn bg-purple-500 text-green-500  text-xl font-bold"
          >
            <FaEdit></FaEdit>
          </button>
        )}
      </td>
      <td>
        {Status === "Pending" ? (
          <button
            onClick={() => handleCancel(parcel._id)}
            className="btn bg-red-600 text-white text-xl font-bold"
          >
            <ImCross />
          </button>
        ) : (
          <button
            disabled
            onClick={() => handleCancel(parcel._id)}
            className="btn bg-red-600 text-white text-xl font-bold"
          >
            <ImCross />
          </button>
        )}
      </td>
      <td>
        {Status === "Delivered" ? (
          <button className="btn bg-yellow-400 text-white text-xl font-bold">
            <GoCodeReview />
          </button>
        ) : (
          <button
            disabled
            className="btn bg-yellow-400 text-white text-xl font-bold"
          >
            <GoCodeReview />
          </button>
        )}
      </td>
      <td>
        {Status === "Pending" ? (
          <button className="btn bg-green-500 text-white text-xl font-bold">
            <GiPayMoney />
          </button>
        ) : (
          <button  disabled className="btn bg-green-500 text-white text-xl font-bold">
            <GiPayMoney />
          </button>
        )}
      </td>
    </tr>
  );
}
export default UserParcelTabular;
