import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";

const AdminRoute = () => {
  const { user } = useAuth();

  console.log("user ===", user);

  return user.user ? <Outlet /> : <p>you are not allowed</p>;
};

export default AdminRoute;
