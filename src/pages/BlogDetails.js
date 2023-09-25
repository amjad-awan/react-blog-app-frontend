import React from "react";
import UserLayOut from "../components/userLayOut/UserLayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import moment from "moment";

import { FaRegClock } from "react-icons/fa";
import CommentSection from "../components/commentSection/CommentSection";
import { useBlogs } from "../context/BlogContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BlogDetails = () => {
  const { blogId } = useParams();
  const { singleBlog, handleSingleBlog } = useBlogs();

  React.useMemo(() => handleSingleBlog(blogId), [blogId]);

  return (
    <UserLayOut>
      <Container sx={{ padding: "100px 0px" }}>
        <Item>
          <img
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
            src={`${process.env.REACT_APP_BACKEND_URL}blog/get-photo/${singleBlog?._id}`}
            alt="blog"
          />
          <>
            <Box sx={{ padding: "30px 20px", textAlign: "left" }}>
              <Typography
                variant="h1"
                sx={{
                  padding: "0px 0px 10px 0px",
                  fontSize: "30px",
                  fontWeight: 700,
                }}
              >
                {singleBlog.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 0px 30px 0px",
                  gap: "15px",
                  fontSize: "22px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "15px",
                  }}
                >
                  <FaRegClock />
                  <Typography sx={{ fontSize: "22px", fontWeight: 500 }}>
                    {moment(singleBlog.createdAt).format("LL")}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "22px", fontWeight: 500 }}>
                  Written by : {singleBlog.blogername}
                </Typography>
              </Box>
              <Typography
                variant="p"
                sx={{ fontSize: "20px", textAlign: "left" }}
                dangerouslySetInnerHTML={{ __html: singleBlog.description }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {singleBlog?.comment?.map((data) => {
                return (
                  <Box
                    sx={{
                      textAlign: "left",
                      border: "1px solid #0000005d",
                      padding: "20px",
                    }}
                  >
                    <Box>
                      {" "}
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, fontSize: "22px" }}
                      >
                        {data.blogername}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 600, fontSize: "20px" }}
                      >
                        {" "}
                        {moment(data.timestamp).format("LL")}
                      </Typography>
                    </Box>

                    <Typography
                      varient="p"
                      sx={{ fontSize: "22px", marginTop: "20px" }}
                    >
                      {data.text}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            <CommentSection blogId={blogId} />
          </>
        </Item>
      </Container>
    </UserLayOut>
  );
};

export default BlogDetails;
