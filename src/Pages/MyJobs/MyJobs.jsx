import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [Jobs, setJobs] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/MyJob/${user?.email}`,
      { withCredentials: true }
    );
    setJobs(data);
  };

  const handelDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: " Deleted Successfully",
          icon: "success",
        });

        try {
          const { data } = await axios.delete(
            `${import.meta.env.VITE_API_URL}/MyJobId/${id}`
          );
          // console.log(data);

          getData();
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Job Title</th>
            <th>Job Posting Date</th>
            <th>Application Deadline</th>
            <th>Salary range</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {Jobs.map((Job) => (
            <tr key={Job._id}>
              <th></th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={Job.picture_url}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{Job.job_title}</div>
                  </div>
                </div>
              </td>
              <td>
                {new Date(Job.posting_date).toLocaleDateString()}
                <br />
              </td>
              <td>
                {" "}
                {new Date(Job.application_deadline).toLocaleDateString()}
              </td>
              <th>
                <p>{Job.salary_range}</p>
              </th>
              <th>
                <Link to={`/update/${Job._id}`}>
                  <button className="btn btn-ghost btn-xs text-2xl">
                    <FaRegEdit />
                  </button>
                </Link>
              </th>
              <th>
                <button
                  onClick={() => handelDelete(Job._id)}
                  className="btn btn-ghost btn-xs text-2xl"
                >
                  <MdDeleteOutline />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyJobs;
