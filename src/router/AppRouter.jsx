import { useSelector } from "react-redux";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../common/layout/Navbar/Navbar";

import LoginContainer from "../modules/auth/containers/LoginContainer";
import MakeYourPlanContainer from "../modules/plan/containers/MakeYourPlanContainer";
import ThanksContainer from "../modules/thanks/containers/ThanksContainer";
import { ScrollToTop } from "../utils/react";

import PrivateRoute from "./PrivateRoute";

function AppRouter() {
  const { user } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          exact
          element={
            // <PublicRoute logged={!!user && user.placa}>
            //   <LoginContainer />
            // </PublicRoute>
            <LoginContainer />
          }
        />
        <Route
          path="/gracias"
          exact
          element={
            <PrivateRoute logged={!!user}>
              <ThanksContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/arma-tu-plan"
          exact
          element={
            <PrivateRoute logged={!!user}>
              <MakeYourPlanContainer />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
