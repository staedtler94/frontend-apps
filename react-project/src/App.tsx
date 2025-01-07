import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import { addJobService, deleteJobService, updateJobService } from "./services/JobService";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />,
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/add-job"
          element={<AddJobPage onJobSubmit={addJobService} />}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJobService} />}
          loader={jobLoader}
        />
         <Route
          path="/edit-job/:id"
          element={<EditJobPage onJobUpdate={updateJobService}  />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
