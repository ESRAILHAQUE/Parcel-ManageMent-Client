import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import { GoCodeReview } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { MdCancel, MdDelete, MdOutlineRateReview } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbFlagCancel } from "react-icons/tb";

function UserParcelTabular({ parcel, index }) {
  const {
    bookingDate,
    deliveryAddress,
    deliveryDate,
    deliveryLatitude,
    deliveryLongitude,
    email,
    name,
    parcelType,
    parcelWeight,
    phoneNumber,
    price,
    Status,
    receiverName,
    receiverPhoneNumber,
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
        <button className="btn bg-purple-500 text-green-500  text-xl font-bold">
          <FaEdit></FaEdit>
        </button>
      </td>
      <td>
        <button className="btn bg-red-600 text-white text-xl font-bold">
          <ImCross />
        </button>
      </td>
      <td>
        <button className="btn bg-yellow-400 text-white text-xl font-bold">
          <GoCodeReview />
        </button>
      </td>
      <td>
        <button className="btn bg-green-500 text-white text-xl font-bold">
          <GiPayMoney />
        </button>
      </td>
    </tr>
  );
}
export default UserParcelTabular;
