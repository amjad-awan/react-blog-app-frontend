import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useBlogs } from "../../context/BlogContext";
import moment from "moment";
import { Button, ButtonGroup, Typography } from "@mui/material";

const PostsTable = () => {
  const { blogs } = useBlogs();

  console.log("blogs", blogs);

  const handleEdit = () => {};

  const handleDelete = () => {};

  const columns = [
    {
      field: "_id",
      headerName: "Blog Id",

      renderCell: (params) => {
        return (
          <Typography style={{ textAlign: "center", width: "100%" }}>
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "title",
      headerName: "Post Title",
      editable: true,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <Typography style={{ textAlign: "center", width: "100%" }}>
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "photo",
      headerName: "Image",
      editable: true,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <img
            src={`blog/get-photo/${params.id}`}
            alt={params.photo}
            loading="lazy"
            width="100px"
            height="100%"
            style={{ margin: "0px auto" }}
          />
        );
      },
    },
    {
      field: "likes",
      headerName: "Likes",
      type: "number",
      editable: true,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <Typography style={{ textAlign: "center", width: "100%" }}>
            {params.value.length}
          </Typography>
        );
      },
    },
    {
      field: "comment",
      headerName: "Comments",
      sortable: false,

      headerAlign: "center",
      renderCell: (params) => {
        console.log(params);
        return (
          <Typography style={{ textAlign: "center", width: "100%" }}>
            {params.value.length}
          </Typography>
        );
      },
    },
    {
      field: "blogername",
      headerName: "PostedBy",
      type: "string",
      editable: true,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <Typography style={{ textAlign: "center", width: "100%" }}>
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      type: "number",
      editable: true,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <Typography style={{ textAlign: "center", width: "100%" }}>
            {moment(params.createdAt).format("LL")}
          </Typography>
        );
      },
    },
    {
      headerName: "actions",
      type: "number",
      editable: true,
      headerAlign: "center",
      flex: 1,
      renderCell: (params) => (
        <ButtonGroup sx={{ margin: "0px auto" }}>
          <Button onClick={() => handleEdit(params.row.id)}>Edit</Button>
          <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
        </ButtonGroup>
      ),
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      {blogs.length > 0 && (
        <DataGrid
          rows={blogs}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          getRowStyle={(params) => ({
            padding: "50px", // Adjust the padding value as needed
          })}
        />
      )}
    </Box>
  );
};

export default PostsTable;
