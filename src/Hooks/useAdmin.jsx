import { useContext } from "react"
import { Authcontext } from "../Providers/AuthProviders"
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

function useAdmin() {
  const { user } = useContext(Authcontext);

  const axiosSecure = useAxiosSecure();
  const {
    data: isAdmin,
    isLoading,
    error,
  } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      try {
          const res = await axiosSecure.get(`/users/admin/${user.email}`);
        //   console.log(res.data)
        // Check if the response data is defined
        if (res.data !== undefined) {
          // Assuming your response contains a property 'isAdmin'
          return res.data.isAdmin; // Returning the isAdmin property
        } else {
          throw new Error("Response data is undefined");
        }
      } catch (error) {
        console.error("Error fetching isAdmin:", error);
        return false; // Returning a default value in case of error
      }
    },
  });

//   console.log({ isAdmin, isLoading, error }); // Log all relevant states

  return { isAdmin, isLoading, error }; // Return the state variables
}


export default useAdmin

