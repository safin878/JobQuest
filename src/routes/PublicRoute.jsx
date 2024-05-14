// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import { Navigate, useNavigate } from "react-router-dom";

// const PublicRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);

//   const navigate = useNavigate();

//   if (!user) {
//     return children;
//   }

//   if (user) {
//     if (loading) {
//       return <p>Loading...</p>;
//     }
//     return navigate("/");
//   }

//   return <Navigate to="/login" replace={true} />;
// };
// export default PublicRoute;

import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? null : children;
};

export default PublicRoute;
