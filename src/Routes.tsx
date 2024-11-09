import { BrowserRouter, Route, Routes } from "react-router-dom";
import { workflowRegistrationPageUIURL } from "./features/workflowRegistration/endpoints";
import { WorkflowRegistrationComponent } from "./features/workflowRegistration/WorkflowRegistrationComponent";

export const UIRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={workflowRegistrationPageUIURL} Component={WorkflowRegistrationComponent} />
    </Routes>
  </BrowserRouter>
);