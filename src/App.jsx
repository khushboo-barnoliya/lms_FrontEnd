import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/student/HeroSection";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import MainLayout from "./layout/MainLayout";
import Course from "./pages/student/Course";
import Profile from "./pages/student/Profile";
import Dashboard from "./pages/student/Dashboard";


const Home = () => {
  return (
    <>
      <HeroSection />
      <Course /> {/* Courses Section */}
    </>
  );
};
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
