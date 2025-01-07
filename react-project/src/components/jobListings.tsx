import { useEffect, useState } from "react";
import Job from "./job";
import Spinner from "./Spinner";
import { JobDataType } from "../types/job-data";

const JobListings = () => {
  const [jobs, setJobs] = useState<JobDataType[]>([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  const URL = "/api/jobs";
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error Fetching Data", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
