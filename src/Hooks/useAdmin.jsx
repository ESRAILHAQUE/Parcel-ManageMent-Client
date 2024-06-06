import { useContext } from "react"
import { Authcontext } from "../Providers/AuthProviders"
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

function useAdmin() {
    const { user } = useContext(Authcontext);
    const axiosSecure = useAxiosSecure();
    const { data:isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            return res.data?.email;
            
        }
        
    })
    return [isAdmin];
}
export default useAdmin