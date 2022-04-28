import * as React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Container } from "@mui/material";

import dynamic from "next/dynamic";

const Facebook = dynamic(() => import("./Facebook"));
export default function Navbar() {
  return (
    <Box
      sx={{
        mt: 5,
        flexGrow: 1,
        backgroundColor: "#222",
        color: "white",
        height: 200,
      }}
    >
      <Container maxWidth="xl">
        {/* <Facebook /> */}
        <Typography variant="body2" color="secondary" align="center">
          {"Copyright © "}
          <MuiLink color="inherit" href="https://tndev-art.com">
            Tndev-art.com
          </MuiLink>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </Box>
  );
}
