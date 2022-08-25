import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import App from "./App";

import Educations from "./views/Educations";
import Apply from "./views/Apply";
import Courses from "./views/Courses";
import Staff from "./views/Staff";
import Login from "./views/Login";
import Header from "./components/header/Header";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/educations" element={<Educations />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
