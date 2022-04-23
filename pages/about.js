import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProTip from "../src/ProTip";
import Link from "../src/Link";

import CssBaseline from "@mui/material/CssBaseline";

import ButtonGroup from "@mui/material/ButtonGroup";
import ActiveLink from "../src/components/ActiveLink";

export default function About() {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      {/* <ActiveLink children="home" href="/" /> */}
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button color="secondary">Secondary</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <ProTip />
      </Box>
    </Container>
  );
}
