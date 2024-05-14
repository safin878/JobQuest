import { createBrowserRouter } from "react-router-dom";
import Root from "./../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "./../Pages/Authentication/Login";
import Register from "./../Pages/Authentication/Register";
import Alljobs from "./../Pages/AllJobs/Alljobs";
import Blogs from "./../Pages/Blogs/Blogs";
import Error from "../Components/Error/Error";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AddJob from "../Pages/AddJob/AddJob";
import MyJobs from "./../Pages/MyJobs/MyJobs";
import AppliedJobs from "./../Pages/AppliedJobs/AppliedJobs";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Details from "../Components/Details/Details";
import Update from "../Components/Update/Update";

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
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/AppliedJobs",
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
      },

      {
        path: "/addJob/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/AddJobs/${params.id}`),
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/MyJobs",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
      },

      {
        path: "/UserProfile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/Update/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/AddJobs/${params.id}`),
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
