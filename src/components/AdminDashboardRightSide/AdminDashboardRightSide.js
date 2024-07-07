import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import PostsTable from "../PostsTable/PostTable";

const AdminDashboardRightSide = ({}) => {
  return (
    <>
      <Box sx={{ minHeight: "300px", width: "100%", borderRadius: "5px" }}>
        <Box sx={{ textAlign: "left", padding: "70px 0px" }}>
          <Typography variant="h2" sx={{ fontSize: "26px", fontWeight: 500 }}>
            Posts
          </Typography>
        </Box>

        <Box sx={{ maxWidth: "100%" ,overFlow: "auto" }}>
          
            <PostsTable />
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboardRightSide;
