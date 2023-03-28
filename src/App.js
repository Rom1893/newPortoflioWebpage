import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router, Navigate, Route,
  Routes
} from "react-router-dom";
import Preloader from "../src/components/Pre";
import "./App.css";
import FrontAbout from "./components/About/FrontAbout";
import FrontHome from "./components/Home/FrontHome";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";



function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<FrontHome />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<FrontAbout />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

//Webpage made possible thanks to https://github.com/soumyajit4419