import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

import { FaDownload } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import toast from "react-hot-toast";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [Jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("");
  const compPdf = useRef();
  const [printStarted, setPrintStarted] = useState(false);
  const [printCompleted, setPrintCompleted] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/AppliedJobs?filter=${filter}&user=${
          user?.email
        }`,
        { withCredentials: true }
      );
      setJobs(data);
    };
    getData();
  }, [user, filter]);

  const handlePrint = useReactToPrint({
    content: () => compPdf.current,
    documentTitle: "userData",
    onBeforePrint: () => {
      setPrintStarted(true);
      setPrintCompleted(false);
    },
    onAfterPrint: () => {
      if (printStarted) {
        setPrintCompleted(true);
        toast.success("PDF Downloaded Successfully");
      }
    },
    onPrintError: () => {
      setPrintStarted(false);
    },
  });

  useEffect(() => {
    let timeout;
    if (printStarted && !printCompleted) {
      timeout = setTimeout(() => {
        setPrintStarted(false); // Reset printStarted after a reasonable amount of time
      }, 5000); // Assume the print dialog interaction time to be 5 seconds
    }
    return () => clearTimeout(timeout);
  }, [printStarted, printCompleted]);

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center">
        <select
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          value={filter}
          className="select select-info w-full max-w-xs my-3 container mx-auto "
        >
          <option value={""}>Select Job_category</option>
          <option value="On Site">ON SITE</option>
          <option value="Remote">REMOTE</option>
          <option value="Hybrid">HYBRID</option>
          <option value="Part-Time">PART-TIME</option>
        </select>
      </div>

      <div ref={compPdf} style={{ width: "100%" }}>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Job Category</th>
              <th>Application Deadline</th>
              <th>Salary range</th>
            </tr>
          </thead>
          <tbody>
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
                  {Job.job_category}
                  <br />
                </td>
                <td>
                  {new Date(Job.application_deadline).toLocaleDateString()}
                </td>
                <th>
                  <p>{Job.salary_range}</p>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" flex justify-center my-4">
          <button
            onClick={handlePrint}
            className="btn btn-ghost btn-xs text-[15px] flex items-center justify-center "
          >
            <FaDownload />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
