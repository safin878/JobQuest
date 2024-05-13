import { IoMdArrowForward } from "react-icons/io";
import "./Extra1.css";
const Extra1 = () => {
  return (
    <>
      <div className="border hover:bg-[#6060d815] border-color-3 rounded-md p-6 my-10 space-y-5 hover:scale-105 transition">
        <img className="mx-auto" src="../../../public/icon/icon-1.png" alt="" />
        <h1 className="text-2xl font-semibold">Need Any Jobs?</h1>
        <p>
          Looking for the next step in your career? Explore exciting job
          opportunities tailored to your skills and aspirations
        </p>
        <button className="mx-auto bg-color-4 button-2">
          <span className="flex items-center ">
            Apply Jobs <IoMdArrowForward />
          </span>
        </button>
      </div>
      <div className="border hover:bg-[#6060d815] border-color-3 rounded-md p-6 my-10 space-y-5 hover:scale-105 transition">
        <img className="mx-auto" src="../../../public/icon/icon-2.png" alt="" />
        <h1 className="text-2xl font-semibold">Post Your Jobs</h1>
        <p>
          Discover your next career move with our diverse range of job postings.
          Explore opportunities that match your skills and interests today.
        </p>
        <button className="mx-auto bg-color-4 button-2">
          <span className="flex items-center ">
            Apply Jobs <IoMdArrowForward />
          </span>
        </button>
      </div>
      <div className="border hover:bg-[#6060d815] border-color-3 rounded-md p-6 my-10 space-y-5 hover:scale-105 transition">
        <img className="mx-auto" src="../../../public/icon/icon-3.png" alt="" />
        <h1 className="text-2xl font-semibold">Job Market Data</h1>
        <p>
          Stay ahead of the curve with insightful job market data. Gain valuable
          insights into trends and opportunities to inform your career
          decisions.
        </p>
        <button className="mx-auto bg-color-4 button-2">
          <span className="flex items-center ">
            Apply Jobs <IoMdArrowForward />
          </span>
        </button>
      </div>
    </>
  );
};

export default Extra1;
