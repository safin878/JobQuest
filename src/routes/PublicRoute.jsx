import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  if (!user) {
    return children;
  }

  if (user) {
    if (loading) {
      return <p>Loading...</p>;
    }
    return navigate("/");
  }

  return <Navigate to="/login" replace={true} />;
};
export default PublicRoute;
