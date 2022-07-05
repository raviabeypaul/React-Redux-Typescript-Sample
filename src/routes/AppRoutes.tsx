import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import LandingPage from "../pages/landingPage";

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}>
            </Route>
            <Route path="/landing" element={<LandingPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default AppRoutes;
