import React from "react";
import { Navigate} from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const PrivateRouter = ({children}) => {
  
  let  { currentUser }  = useAuth();

//   !Just for testing purpose
//   currentUser = {
//     email: "a@gmailcom",
//   };
  
  return currentUser ? 
    children
   : 
    <Navigate to="/login" />
    
  ;
};

export default PrivateRouter;