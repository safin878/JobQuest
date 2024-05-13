import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const Alljobs = () => {
  const { user } = useContext(AuthContext);
  const [Jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/SearchJobs?search=${search} `
      );
      setJobs(data);
    };
    getData();
  }, [user, search]);

  const handelSearch = (e) => {
    e.preventDefault();
    // const text = e.target.search.value;
    setSearch(searchText);
  };
  console.log(search);
  return (
    <div className="overflow-x-auto">
      <div>
        <div className="join my-3 flex container mx-auto">
          <form onSubmit={handelSearch} className="join my-3 flex">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  type="text"
                  name="search"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="indicator">
              <button className="btn join-item">Search</button>
            </div>
          </form>
        </div>
      </div>

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
                <Link to={`/addJob/${Job._id}`}>
                  <button className="btn btn-ghost btn-xs  ">
                    View Details
                  </button>
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alljobs;
