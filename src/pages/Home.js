import React from "react";
import UserLayOut from "../components/userLayOut/UserLayOut";
import Blogs from "../components/Blogs/Blogs";
import { Container } from "@mui/material";
import Parallax from "../components/Parallax/Parallax";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {
  return (
    <UserLayOut>
      <Parallax />

      <Container>
        <Blogs />
      </Container>
    </UserLayOut>
  );
};

export default Home;
