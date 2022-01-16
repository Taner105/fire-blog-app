import React from "react";
import { Navigate, Route} from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const PrivateRouter = (props) => {
  console.log("props: ", props);
  let  currentUser  = useAuth();

  //!Just for testing purpose
  // currentUser = {
  //   email: "a@gmailcom",
  // };

  return currentUser ? (
    <Route path={props.path} element={props.element} />
  ) : (
    <Navigate replace to="/login" />
    
  );
};

export default PrivateRouter;