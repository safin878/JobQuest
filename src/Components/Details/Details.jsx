import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";

const Details = () => {
  const { user } = useContext(AuthContext);
  const job = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    job_title,
    job_category,
    salary_range,
    buyer,
    application_deadline,
    picture_url,
    job_description,
    job_applicants,
  } = job || {};

  const handelOpen = () => {
    Swal.fire({
      title: "Applied Job",
      html:
        `<input id="name" class="swal2-input" placeholder="Username" value="${user?.displayName} " disabled>` +
        `<input id="email" class="swal2-input" placeholder="Email" value="${user?.email}" disabled>` +
        '<input id="link" class="swal2-input" placeholder="Resume Link">',
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const link = document.getElementById("link").value;

        document.getElementById("name").disabled = true;
        document.getElementById("email").disabled = true;
        if (user?.email === buyer?.email) {
          toast.error("Action not permitted");
          return;
        }

        const AppliedData = {
          JobId: _id,
          picture_url,
          application_deadline,
          job_category,
          job_title,
          salary_range,
          name,
          email,
          link,
        };

        // Here, you would send the data to your database.
        // This is a placeholder for the actual database operation.
        // Replace this with your database logic.
        try {
          // await sendDataToDatabase(name, email, link);
          // console.log(name, email, link);

          const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/AppliedJobs`,
            AppliedData
          );
          console.log(data);

          if (data.acknowledged) {
            toast.success("Applied Successfully");
            navigate("/AppliedJobs");
          }

          return { name, email, link }; // Returning the data for display
        } catch (error) {
          Swal.showValidationMessage(`Database operation failed: ${error}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        // You can access the submitted data here
        const { name, email, link } = result.value;
        if (user?.email === buyer?.email) {
          return;
        }
        // For now, just showing the data
        Swal.fire({
          title: "Submitted Data",
          html: `
            <div>Name: ${name}</div>
            <div>Email: ${email}</div>
            <div>Link: ${link}</div>
          `,
        });
      }
    });
  };

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
            <button onClick={handelOpen} className="btn my-3">
              Apply Job
            </button>
          </div>
        </div>
        <img className="w-96 border rounded-lg" src={picture_url} alt="" />
      </div>
    </div>
  );
};

export default Details;
