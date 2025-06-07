// import React from "react";
import "./App.css";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./components/router/router-param";
// import EngageEventsList from "./components/events/EventsList";
import {FormTypography} from "./components/Tutorial/FormTypography";
import { FormTextField } from "./components/Tutorial/TextFields";
import EngagementAppBar from "./components/app-bar/AppBar";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      {/* <RouterProvider router={router} fallbackElement={<EngageEventsList />} />; */}
      <EngagementAppBar />
      <FormTypography />
      <FormTextField />
    </div>
  );
}

export default App;
