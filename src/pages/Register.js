import React from "react";
import UserLayOut from "../components/userLayOut/UserLayOut";
import Blogs from "../components/Blogs/Blogs";
import { Container } from "@mui/material";
import RegisterForm from "../components/RegisterForm/RegisterForm";

;
const Register = () => {
  return (
      <Container sx={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
       <RegisterForm/>
      </Container>
   
  );
};

export default Register;
