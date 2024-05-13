import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    job_title,
    posting_date,
    job_category,
    salary_range,
    buyer,
    application_deadline,
    job_applicants,
  } = job || {};
  console.log(job);
  return (
    <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all">
      <div className="flex items-center justify-between">
        <span className="text-xs font-light text-gray-800 ">
          Date: {new Date(posting_date).toLocaleDateString()}
        </span>
        <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full ">
          {job_category}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          {job_title}
        </h1>

        <p className="mt-2 text-sm font-normal text-gray-600 ">
          Job Owner: {buyer.name}
        </p>

        <p className="mt-2 text-sm font-normal text-gray-600 ">
          Application Deadline:{" "}
          {new Date(application_deadline).toLocaleDateString()}
        </p>
        <p className="mt-2 text-sm font-normal text-gray-600 ">
          Applicants: {job_applicants}
        </p>

        <p className="mt-2 text-sm font-bold text-gray-600 ">
          Salary Range: {salary_range}
        </p>

        <Link to={`/addJob/${_id}`}>
          <button className="my-3 btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
