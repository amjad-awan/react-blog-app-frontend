import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Blog from "../Blog/Blog";
import { useBlogs } from "../../context/BlogContext";

const Blogs = () => {
  const {allBlogs}=useBlogs()
  return (
    <Box sx={{ width: "100%", marginTop: "7rem" }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {allBlogs?.map((blog, index) => {
          return <Blog blog={blog} index={index} key={blog._id} />;
        })}
      </Grid>
    </Box>
  );
};

export default Blogs;
