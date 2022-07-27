import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, logged }) => {
  return !logged ? children : <Navigate to="/arma-tu-plan" replace />;
};

export default PublicRoute;
