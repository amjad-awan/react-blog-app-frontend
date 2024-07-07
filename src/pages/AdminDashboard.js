import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import { HiBars3CenterLeft } from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link } from "react-router-dom";
import AdminDashboardSideBar from "../components/AdminDashboardSideBar/AdminDashboardSideBar";
import AdminDashboardRightSide from "../components/AdminDashboardRightSide/AdminDashboardRightSide";

const AdminDashboard = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        background: "rgba(197, 197, 197, 0.199)",
        justifyContent: "space-between",
      }}
    >
      <AdminDashboardSideBar showSideBar={showSideBar} />
      <Box
        container
        sx={{
          width: "calc(100%-300px)",
          padding: "20px 20px",
          minHeight: "100vh",
          flexGrow:1
        }}
      >
        <Button
          sx={{
            display: "block",
            height: "50px",
            transition: "all .3s linear",
            position: "absolute",
            top: "20px",
            left: showSideBar ? "110px" : "350px",
            background: "#99baee",
            marginBottom: "20px",
          }}
          onClick={(prev) => setShowSideBar(!showSideBar)}
        >
          <HiBars3CenterLeft
            style={{ color: "#7DA9CE", fontSize: "40px", fontWeight: 700 }}
          />
        </Button>
        <AdminDashboardRightSide />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
