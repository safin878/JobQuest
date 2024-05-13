import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const job_title = form.job_title.value;
    const email = form.email.value;
    const application_deadline = startDate;
    const posting_date = new Date();
    const job_category = form.job_category.value;
    const salary_range = form.salary_range.value;
    const picture_url = form.picture_url.value;
    const job_description = form.job_description.value;
    const job_applicants = 0;
    const jobData = {
      picture_url,
      job_title,
      application_deadline,
      posting_date,
      job_category,
      salary_range,
      job_description,
      job_applicants,
      buyer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/AddJobs`,
        jobData
      );
      console.log(data);
      toast.success("Job Added Successfully!");
      navigate("/MyJobs");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md shadow-color-1 ">
        <h2 className="text-lg font-semibold text-color-1 capitalize ">
          Add a Job
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="userName">
                User Name
              </label>
              <input
                id="userName"
                name="userName"
                type="text"
                defaultValue={user?.displayName}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                disabled
                defaultValue={user?.email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">application_deadline</label>

              <DatePicker
                name="application_deadline"
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="job_category">
                job_category
              </label>
              <select
                name="job_category"
                id="job_category"
                className="border p-2 rounded-md"
              >
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div className="  ">
              <label className="text-gray-700 " htmlFor="min_price">
                salary_range Range
              </label>
              <input
                id="min_price"
                name="salary_range"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Job Title
              </label>
              <input
                id="job_title"
                name="job_title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="col-span-2">
              <label className="text-gray-700 " htmlFor="picture_url">
                Job Banner
              </label>
              <input
                id="picture_url"
                name="picture_url"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="job_description">
              job_description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="job_description"
              id="job_description"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300   bg-color-1 rounded-md hover:bg-color-2 focus:outline-none focus:bg-gray-600">
              Add Job
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
