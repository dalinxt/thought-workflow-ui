import { BrowserRouter, Route, Routes } from "react-router-dom";
import { workflowRegistrationPage } from "./constants/uiEndpoints";
import { WorkflowRegistration } from "./components/WorkflowRegistration";

export const UIRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={workflowRegistrationPage} Component={WorkflowRegistration} />
    </Routes>
  </BrowserRouter>
);