import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import Link from "next/link";
import HoverDropdownMenu from "./aboutus/Hover";
import ProjectHover from "./projects/ProjectHover";
import CoursesHover from "./courses/CoursesHover";
import Image from "next/image";
// import AboutUsMenu from './AboutUsMenu'; // Import the menu component

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "warm.main",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <AppBar
          position="static"
          sx={{
            backgroundColor: "warm.main",
            color: "primary.dark",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <Link href="/" component="div" sx={{ flexGrow: 1 }}>
              <Image
                src="/logo.jpg"
                alt="My Image"
                width={200}
                height={160}
              ></Image>
            </Link>

            <Link href="/">
              <Button>Home</Button>
            </Link>

            <HoverDropdownMenu></HoverDropdownMenu>

            <ProjectHover></ProjectHover>
            <CoursesHover></CoursesHover>

            <Link href="/admission">
              <Button>Admissions</Button>
            </Link>
            <Button>Affiliation-PIA</Button>
            <Button>Gallery</Button>
            <a href="#sectionlast">   <Button>Contact Us</Button></a>

          </Toolbar>
        </AppBar>
      </Container>
         
    </Box>
  );
}
