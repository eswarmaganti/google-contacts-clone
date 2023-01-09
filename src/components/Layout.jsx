import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./Navbar";
import { Container } from "@mui/system";

const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="xl" sx={{ padding: "1rem 0" }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
