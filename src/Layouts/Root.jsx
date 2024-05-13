import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[95px]"></div>
      <div className="min-h-[calc(100vh-192px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
