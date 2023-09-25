import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{ background: "#1976D2",marginTop:"100px", paddingTop: "100px" }}
    >
        <Container>
        <Grid container rowSpacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Box>
            <Typography variant="body" sx={{marginBottom:"15px", display:"block", color:"#fff"}}>New blogs</Typography>
            <Typography variant="body" sx={{marginBottom:"15px", display:"block", color:"#fff"}}>Most liked</Typography>
            <Typography variant="body" sx={{marginBottom:"15px", display:"block", color:"#fff"}}>Most commented</Typography>
          </Box>   
        </Grid>
      
      
        
      </Grid>
        </Container>

        <Divider sx={{marginTop:"50px"}}/>

        <Box sx={{padding:"50px 0px", display:"flex", justifyContent:"center"}}>
            <Typography sx={{color:"#fff"}}>@ copyrights 2023 || by amjad </Typography>
        </Box>
   
    </Box>
  );
};

export default Footer;
