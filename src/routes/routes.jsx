import { createBrowserRouter } from "react-router-dom";
import Root from "./../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "./../Pages/Authentication/Login";
import Register from "./../Pages/Authentication/Register";
import Alljobs from "./../Pages/AllJobs/Alljobs";
import Blogs from "./../Pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
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
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
