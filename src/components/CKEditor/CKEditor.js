import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useBlogs } from "../../context/BlogContext";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";


const CKeditor = ({formik}) => {
  const { setBlogsData, blogsData } = useBlogs();

  const editorConfig = {
    // Other configuration options...
    // ...

    // Set the height of the editor
    height: 300, // You can adjust this value to your preferred height
    maxWidth: "100%",
  };


 
 
  return (
    <Box
      sx={{ overflow: "auto", width: "100%"}}
    >
      <CKEditor
        editor={ClassicEditor}
        config={editorConfig}
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        data={formik.values.description}
        onChange={(event, editor) => {
          const data = editor.getData();
          formik.setFieldValue('description', data);
        }}
        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        //   editor.ui.view.editable.element.style.minHeight = "200px";
        // }}
      />
    </Box>
  );
};

export default CKeditor;
