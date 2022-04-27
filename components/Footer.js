import * as React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Container } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#066" }}>
      <Container maxWidth="xl">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <MuiLink color="inherit" href="https://mui.com/">
            Your Website
          </MuiLink>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </Box>
  );
}
