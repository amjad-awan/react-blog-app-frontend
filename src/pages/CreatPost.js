import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import { HiBars3CenterLeft } from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link } from "react-router-dom";
import AdminDashboardSideBar from "../components/AdminDashboardSideBar/AdminDashboardSideBar";
import AdminDashboardRightSide from "../components/AdminDashboardRightSide/AdminDashboardRightSide";
import CreatPost from "../components/CreatPost/CreatPost";

const CreatePost = () => {
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
      <Box container flex={1} sx={{ padding: "20px 20px", height: "100vh" }}>
      <Button
          sx={{
            display: "block",
            height: "50px",

            background: "#99baee",
            marginBottom: "20px",
          }}
          onClick={(prev) => setShowSideBar(!showSideBar)}
        >
          <HiBars3CenterLeft
            style={{ color: "#7DA9CE", fontSize: "40px", fontWeight: 700 }}
          />
        </Button>
      {/* <AdminDashboardRightSide
       
      /> */}
      <CreatPost/>
      </Box>
    
    </Box>
  );
};

export default CreatePost;
