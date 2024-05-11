import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  //   const location = useLocation();
  const navigate = useNavigate();

  if (!user) {
    return children;
  }

  if (user) {
    return navigate("/");
  }
  return (
    <Navigate
      to="/login"
      //   state={{ pathname: location.pathname }}
      replace={true}
    />
  );
};
export default PublicRoute;
