import Banner from "../../Components/Banner/Banner";
import Extra1 from "../../Components/Extra1/Extra1";
import Extra2 from "../../Components/Extra2/Extra2";
import JobCatagory from "../../Components/JobCatagory/JobCatagory";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="  text-center ">
      <Banner></Banner>
      <h1 className="text-6xl font-bold my-6">Job by Category</h1>
      <JobCatagory></JobCatagory>

      <h1 className="text-6xl font-bold my-6">How To Get Start</h1>

      <div className="grid grid-cols-3 gap-10 container mx-auto">
        <Extra1></Extra1>
      </div>
      <Extra2></Extra2>
    </motion.div>
  );
};

export default Home;
