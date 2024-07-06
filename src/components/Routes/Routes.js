import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import BlogDetails from "../../pages/BlogDetails";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import UserDashboard from "../../pages/UserDashboard";
import AdminDashboard from "../../pages/AdminDashboard";
import CreatePost from "../../pages/CreatPost";
import AdminRoute from "../AdminRoute/AdminRoute";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/admin" element={<AdminRoute/>} >
      <Route index element={<div>Page not found</div>} />
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="create-post" element={<CreatePost />} />
      </Route>
     
      <Route path="/blogs/:blogId" element={<BlogDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route exact path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default AppRoutes;
