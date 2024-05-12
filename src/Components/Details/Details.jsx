import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import "react-datepicker/dist/react-datepicker.css";

const Details = () => {
  const { user } = useContext(AuthContext);
  const job = useLoaderData();
  const {
    job_title,

    job_category,
    salary_range,
    buyer,
    application_deadline,
    picture_url,
    job_description,
    job_applicants,
  } = job || {};

  console.log(job);

  return (
    <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      <div className="  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px] flex gap-8">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-800 ">
              Deadline: {new Date(application_deadline).toLocaleDateString()}
            </span>
            <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
              {job_category}
            </span>
          </div>

          <div>
            <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
              {job_title}
            </h1>

            <p className="mt-2 text-lg text-gray-600 ">{job_description}</p>

            <div className="flex items-center gap-5">
              <div>
                <p className="mt-2 text-sm  text-gray-600 ">
                  Job_Owner_Name: {buyer?.name}
                </p>
                <p className="mt-2 text-sm  text-gray-600 ">
                  Job_Owner_Email: {buyer?.email}
                </p>
                <p className="mt-2 text-sm  text-gray-600 ">
                  Job_Applicants: {job_applicants}
                </p>
              </div>
              <div className="rounded-full object-cover overflow-hidden w-14 h-14">
                <img src={buyer?.photo} alt="" />
              </div>
            </div>
            <p className="mt-6 text-lg font-bold text-gray-600 ">
              Salary Range: {salary_range}
            </p>
            <button className="btn my-3">Apply Job</button>
          </div>
        </div>
        <img className="w-96 border rounded-lg" src={picture_url} alt="" />
      </div>
    </div>
  );
};

export default Details;
