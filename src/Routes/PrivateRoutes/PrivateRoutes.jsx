import { useContext } from "react"
import { Authcontext } from "../../Providers/AuthProviders"
import { Navigate, useLocation } from "react-router-dom"

function PrivateRoutes({children}) {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation();
    if (loading) {
        <>
          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </>;
    }
    if (user) {
        return children
    }
    <Navigate to={'/login'} state={{from:location}} replace></Navigate>
}
export default PrivateRoutes