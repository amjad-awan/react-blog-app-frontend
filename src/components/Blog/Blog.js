import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  ImageListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import "./style.css";
import moment from "moment";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { red } from "@mui/material/colors";
import { FiHeart } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useBlogs } from "../../context/BlogContext";
import { useAuth } from "../../context/AuthContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Blog = ({ blog, index }) => {
  const { title, description, photo, blogername, likes, comment } = blog;

  const { handleLikeDislikeBlog } = useBlogs();
  const { user } = useAuth();
  console.log("user",user)

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleReadMore = (index) => {
    setExpandedIndex(index);
  };

  return (
    <Grid item xs={12} md={6} lg={4} className="blog-item">
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {blogername?.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={blogername}
          subheader={moment(blog.createdAt).format("LL")}
        />
        {/* <Box
          sx={{
            display: "flex",
            gap: "20px",
            // marginBottom: "20px",
            alignItems: "center",
            padding: "15px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#9b1c31",
              lineHeight: "50px",
              color: "#fff",
            }}
          >
            {blogername?.charAt(0)}
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography>{moment(blog.createdAt).format("LL")}</Typography>
          </Box>
        </Box> */}
        <CardMedia
          component="img"
          height="194"
          image={`${process.env.REACT_APP_BACKEND_URL}blog/get-photo/${blog?._id}`}
          alt="Paella dish"
        />
        {/* <img
          sx={{ width: "100%" }}
          src={`blog/get-photo/${blog._id}`}
          alt={photo}
          loading="lazy"
          width="100%"
          height={200}
        /> */}
        {/* <Typography variant="p" sx={{ fontSize: "18px", fontWeight: 700 }}>
          {title}
        </Typography> */}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title.slice(0, 25)} ...
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            dangerouslySetInnerHTML={{
              __html:
                description.slice(0, 270) +
                (description.length > 270 ? "..." : ""),
            }}
          />
          <Link
            to={`blogs/${blog?._id}`}
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "blue",
            }}
            sx={{ textAlign: "left" }}
          >
            Read More
          </Link>
        </CardContent>

        {/* <Typography sx={{ padding: "10px", textAlign: "left" }}>
          {" "}
          {expandedIndex === index ? description : description.slice(0, 250)}
          {description.length > 250 && expandedIndex !== index && (
            <Link
              to={`blogs/${blog._id}`}
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "blue",
              }}
              sx={{ textAlign: "left" }}
            >
              ... Read More
            </Link>
          )}
        </Typography> */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "30px",
            textAlign: "left",
            height: "60px",
            padding: "0px 15px",
            borderTop: "2px solid rgba(202, 202, 202, 0.452)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "3px",
              height: "100%",
              borderRight: "2px solid rgba(202, 202, 202, 0.452)",
              flex: 1,
            }}
          >
            <Button
              sx={{
                minWidth: "0px",
                width: "40px",
                height: "40px",
                padding: "0px",
                borderRadius: "50%",
              }}
              onClick={() => {
                if (blog?._id) {
                  handleLikeDislikeBlog(blog._id);
                } else {
                  console.error('Blog ID is undefined');
                }
              }}

              
            >
              {user && likes?.includes(user?.user?._id) ? (
                <BsFillSuitHeartFill />
              ) : (
                <FiHeart />
              )}
            </Button>
            <Typography>{likes?.length} likes </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "3px",
              height: "100%",
              flex: 1,
            }}
          >
            <Typography>{comment.length}</Typography>
            <Button
              sx={{
                minWidth: "0px",
                width: "40px",
                height: "40px",
                padding: "0px",
                borderRadius: "50%",
              }}
            >
              <BiCommentDetail />
            </Button>{" "}
          </Box>
        </Box>
      </Card>
      {/* </Link> */}
    </Grid>
  );
};

export default Blog;
