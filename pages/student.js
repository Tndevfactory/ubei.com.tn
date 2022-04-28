import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProTip from "../components/ProTip";
import Link from "../components/Link";

import CssBaseline from "@mui/material/CssBaseline";

import ButtonGroup from "@mui/material/ButtonGroup";
import ActiveLink from "../components/ActiveLink";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Student() {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ marginTop: "4rem" }}>
        <CssBaseline />

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Students page
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
