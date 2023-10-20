"use client";
import React from "react";
// import "./#header.css";
import {
  Box,
  Container,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const year = new Date();
  return (
    <section id="sectionlast">
    <Container>
      <Grid container>
        <Grid item xs={6} md={3}>
          <Typography variant="subtitle1">Business Hours</Typography>
          <Typography variant="body1">Mon to Sat: 8am to 6pm</Typography>
          <Typography variant="body1">Sunday - Holiday</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="subtitle1">Center Address</Typography>
          <Typography>no.1 toll gate </Typography>
          <Typography>Trichy</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="subtitle1">Contact Us</Typography>
          <Typography>Phone : 9874561232</Typography>
          <Typography>Email : indira@abc.com</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="primary.main">Follow Us</Typography>
          <Stack direction="row" spacing={2}>
            <TwitterIcon sx={{ borderRadius: "50%" }}></TwitterIcon>
            <FacebookIcon></FacebookIcon>
            <InstagramIcon></InstagramIcon>
            <YouTubeIcon></YouTubeIcon>
          </Stack>
        </Grid>
      </Grid>
      <Grid xs={12} height={4}>
        <Container sx={{ textAlign: "center", py: 4 }}>
          <Box>
            <footer style={{ backgroundcolor: "#aaa" }}>
              Copyright &copy; {year.getFullYear()} Indra Educational &
              Charitable Trust. All Rights Reserved
            </footer>
          </Box>
        </Container>
      </Grid>
    </Container></section>
  );
};

export default Footer;
