import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import TabularUser from "./TabularUser";

function AllUsers() {
  const axiosSecure = useAxiosSecure();
  const { data: users=[]} = useQuery({
    queryKey:[ 'users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/allUsers')
      return res.data
    }
  })
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Number of parcel Booked</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {users.map((user, index) => (
              <TabularUser key={user._id} user={user} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AllUsers