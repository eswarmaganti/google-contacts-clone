import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { Group, Person, PersonAdd, Star } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const getLinkColor = (path) => {
    if (pathname === path) {
      return { color: "#1976D2" };
    } else return { color: "black" };
  };

  return (
    <AppBar
      position="static"
      component={Paper}
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid #DEDEDE" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Group sx={{ mr: 1 }} fontSize="large" color="primary" />
          <Typography
            variant="h6"
            sx={{ fontWeight: "700", letterSpacing: ".1rem", color: "#1976D2" }}
          >
            Contacts
          </Typography>

          <Box sx={{ display: "flex", gap: "1rem", ml: 3 }}>
            <NavLink to="/">
              <Button sx={getLinkColor("/")} startIcon={<Person />}>
                All Contacts
              </Button>
            </NavLink>
            <NavLink to="/add-contact">
              <Button
                sx={getLinkColor("/add-contact")}
                startIcon={<PersonAdd />}
              >
                Add Contact
              </Button>
            </NavLink>
            <NavLink to="/favourites">
              <Button sx={getLinkColor("/favourites")} startIcon={<Star />}>
                Favourites
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
