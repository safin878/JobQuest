import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "../JobCard/JobCard";

const JobCatagory = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/AddJobs`);
      setJobs(data);
    };
    getData();
  }, []);

  return (
    <Tabs className="container mx-auto px-6 py-12">
      <TabList>
        <Tab>On-Site Job</Tab>
        <Tab>Remote Job</Tab>
        <Tab>Hybrid Job</Tab>
        <Tab>Part-Time Job</Tab>
      </TabList>

      <TabPanel>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobs
            .filter((j) => j.job_category === "On Site")
            .map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobs
            .filter((j) => j.job_category === "Remote")
            .map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobs
            .filter((j) => j.job_category === "Hybrid")
            .map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobs
            .filter((j) => j.job_category === "Part-Time")
            .map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default JobCatagory;
