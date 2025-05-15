import { Navigate, Route } from "react-router-dom";

function UserRoute({user,children}){
    if(user){
    return <Navigate to="/"/>
    }
    return children;

    
}
export default UserRoute;