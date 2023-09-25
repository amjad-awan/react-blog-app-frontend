import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import CKeditor from "../CKEditor/CKEditor";
import { useBlogs } from "../../context/BlogContext";
import { makeStyles } from "@material-ui/core/styles";
import {validationSchema} from "./validationSchema"
import { useFormik } from "formik";
const CreatPost = () => {
  const { blogsData, setBlogsData, handleAddBlogs } = useBlogs();





  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      photo: null,
    },
    validationSchema,
    onSubmit: (values,{resetForm}) => {
      console.log(values);
      // Perform form submission here
      handleAddBlogs({ title: values.title,photo:values.photo, description: values.description });
      resetForm();
    },
  });

  return (
    <Box
   
      sx={{
        background: "#fff",
        marginTop: "30px",
        borderRadius: "5px",
        padding: "50px 30px",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          maxWidth: "700px",
          margin: "0px auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <TextField
          label="Post Title"
          id="outlined-size-normal"
          sx={{ width: "100%" }}
          defaultValue="Normal"
          name="title"
          {...formik.getFieldProps('title')}
          error={formik.touched.title && formik.errors.title ? true : false}
          // helperText={formik.touched.title && formik.errors.title}
        />
          {formik.touched.title && formik.errors.title && (
          <Typography sx={{ color: "red" }}>{formik.errors.title}</Typography>
        )}
        {/* <CKeditor /> */}
        <CKeditor
      
          formik={formik}
         
        />
           {formik.touched.description && formik.errors.description && (
          <Typography sx={{ color: "red" }}>{formik.errors.description}</Typography>
        )}
         <input
          type="file"
          accept="image/*"
          name="photo"
          onChange={(event) => formik.setFieldValue('photo', event.target.files[0])}
        />
           {formik.touched.photo && formik.errors.photo && (
          <Typography sx={{ color: "red" }}>{formik.errors.photo}</Typography>
        )}

        <Button type="submit" variant="contained">
          SUBMIT
        </Button>
      </form>
    </Box>
  );
};

export default CreatPost;
