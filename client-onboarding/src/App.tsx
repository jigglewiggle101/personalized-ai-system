import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Use Link instead of <a> tags
import ReactGA from "react-ga4";
import { ClerkProvider } from "@clerk/clerk-react";
import Onboarding from "./Onboarding";
import Home from "./Home"; // Correct the import to match your file structure
import "./App.css"; // Custom styles

// Initialize Google Analytics with your GA Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with your actual GA Measurement ID
ReactGA.initialize(GA_MEASUREMENT_ID);

const App: React.FC = () => {
  useEffect(() => {
    // Track initial pageview when the app loads
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    // Track pageview on route change
    const handleRouteChange = (url: string) => {
      ReactGA.send({ hitType: "pageview", page: url });
    };

    // Listen for route changes using BrowserRouter's history API
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handlePopState = (e: PopStateEvent) => {
      const url = window.location.pathname + window.location.search;
      handleRouteChange(url);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <ClerkProvider publishableKey="pk_test_c3dlZXQtc3BhbmllbC02Mi5jbGVyay5hY2NvdW50cy5kZXYk">
      <Router>
        <div>
          {/* Navigation Bar */}
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/onboarding">Onboarding</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </nav>
          
          {/* Application Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<Onboarding />} />
            {/* Add your dashboard route */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
};

export default App;


