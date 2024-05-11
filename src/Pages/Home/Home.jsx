import Banner from "../../Components/Banner/Banner";
import JobCatagory from "../../Components/JobCatagory/JobCatagory";

const Home = () => {
  return (
    <div className="text-center">
      <Banner></Banner>
      <h1 className="text-6xl font-bold">Job by Category</h1>
      <JobCatagory></JobCatagory>
    </div>
  );
};

export default Home;
