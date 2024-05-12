import Banner from "../../Components/Banner/Banner";
import Extra1 from "../../Components/Extra1/Extra1";
import JobCatagory from "../../Components/JobCatagory/JobCatagory";

const Home = () => {
  return (
    <div className="text-center">
      <Banner></Banner>
      <h1 className="text-6xl font-bold my-6">Job by Category</h1>
      <JobCatagory></JobCatagory>

      <h1 className="text-6xl font-bold my-6">How To Get Start</h1>

      <Extra1></Extra1>
    </div>
  );
};

export default Home;
