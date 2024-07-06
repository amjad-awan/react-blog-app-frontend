import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useBlogs } from "../../context/BlogContext";

const CommentSection = ({ blogId }) => {
  const { comment, setComment, handleAddComments, isCommenting } = useBlogs();

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "0px auto",
        padding: "50px 0px",
      }}
      noValidate
      autoComplete="off"
    >
      <form
        sx={{ width: "100%", marginBottom: "20px" }}
        onSubmit={handleAddComments}
      >
        <TextField
          id="outlined-multiline-static"
          label="Write commet ..."
          multiline
          rows={6}
          sx={{ width: "100%" }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={isCommenting}
          sx={{ width: "100%", padding: "10px 0px", marginTop:"15px" }}
        >
          {
            isCommenting ?"Submitting...":"Submit"
          }
          
        </Button>
      </form>
    </Box>
  );
};

export default CommentSection;
