import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, logged }) => {
  return logged ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
