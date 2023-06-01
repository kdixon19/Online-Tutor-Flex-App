import React from "react";
// import { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";
import "./HomePage.css"
import CompletionTracker from "../../components/ProgressTracker/ProgressTracker"
import { Link } from 'react-router-dom';


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  //const [user, token] = useAuth();

  return (
    <div className="container">
      <h1>
      WHAT WOULD YOU LIKE TO WORK ON TODAY
      </h1>
      <table>
        <thead>
          <tr>
            Two-Step Equations
          </tr>
          <tr>
            Inequalities
          </tr>
          <tr>
            Mean/Median/Mode
          </tr>
        </thead>
        <tbody>
          <CompletionTracker />
        </tbody>
      </table>
      <Link to="/question">Question</Link>
    </div>
  );
};

export default HomePage;
