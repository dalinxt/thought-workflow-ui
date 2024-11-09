import { BrowserRouter, Route, Routes } from "react-router-dom";
import { workflowRegistrationPageUIURL } from "./features/workflowRegistration/endpoints";
import { WorkflowRegistrationComponent } from "./features/workflowRegistration/WorkflowRegistrationComponent";
import { starterPageUIURL } from "./features/starterPage/endpoints";
import { StarterPageComponent } from "./features/starterPage/StarterPageComponent";

export const UIRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={starterPageUIURL} Component={StarterPageComponent} />
      <Route path={workflowRegistrationPageUIURL} Component={WorkflowRegistrationComponent} />
    </Routes>
  </BrowserRouter>
);