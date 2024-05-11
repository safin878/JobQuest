import { createBrowserRouter } from "react-router-dom";
import Root from "./../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "./../Pages/Authentication/Login";
import Register from "./../Pages/Authentication/Register";
import Alljobs from "./../Pages/AllJobs/Alljobs";
import Blogs from "./../Pages/Blogs/Blogs";
import Error from "../Components/Error/Error";
import PublicRoute from "./PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login></Login>
          </PublicRoute>
        ),
      },
      {
        path: "/allJobs",
        element: <Alljobs></Alljobs>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register></Register>
          </PublicRoute>
        ),
      },
    ],
  },
]);

export default router;
