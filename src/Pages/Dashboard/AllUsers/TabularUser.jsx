import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

function TabularUser({ user, index, refetch }) {

    const axiosSecure = useAxiosSecure()
    // console.log(user)
    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    }
    const handleMakeDelivery = user => {
        axiosSecure.patch(`/users/delivery/${user._id}`)
            .then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is Delivey Man now`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
   
    return (
      <tr className="hover">
        <th>{index}</th>
        <td>{user.name}</td>
        <td>Phone Number</td>
        <td>
          {user?.role === "Delivery" ? (
            "Delivery Man"
          ) : (
            <button
              className="btn bg-blue-400"
              onClick={() => handleMakeDelivery(user)}
            >
              Make Delivery Man
            </button>
          )}
        </td>

        <td>
          {user?.role === "admin" ? (
            "Admin"
          ) : (
            <button
              className="btn bg-orange-400"
              onClick={() => handleMakeAdmin(user)}
            >
              Make Admin
            </button>
          )}
        </td>
      </tr>
    );
}

export default TabularUser