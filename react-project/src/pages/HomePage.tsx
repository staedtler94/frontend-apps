import Hero from "../components/Hero";
// import Navbar from "./components/Navbar";
import HomeProfessionalCards from "../components/HomeProfessionalCards";
import JobListings from "../components/jobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeProfessionalCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
