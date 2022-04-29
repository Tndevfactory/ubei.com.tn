import * as React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Avatar, Container, Divider } from "@mui/material";
import { FacebookShareButton, FacebookIcon } from "next-share";
import { PinterestShareButton, PinterestIcon } from "next-share";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import dynamic from "next/dynamic";
import { Grid } from "@material-ui/core";
import Link from "./Link";
const Facebook = dynamic(() => import("./Facebook"));
export default function Navbar() {
  return (
    <Box
      sx={{
        mt: 5,
        flexGrow: 1,
        backgroundColor: "#222",
        color: "white",
      }}
    >
      <Container maxWidth="xl">
        <Grid container sx={{ py: 5 }}>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/logo/logo.png"
              sx={{ width: 38, height: 38, display: "flex", mt: 0 }}
            />

            <Typography
              variant="h6"
              component="h6"
              sx={{
                display: "inline-block",
                marginTop: "3px",
                marginLeft: "14px",
                fontSize: "1.3rem",
              }}
            >
              TndevArt
            </Typography>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Typography>Email: team@tndev-art.com</Typography>

            <Typography>Telephone: +216 55 38 54 74</Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Typography>Facebook</Typography>

            <Link href="https://www.facebook.com/TndevArt">
              https://www.facebook.com/TndevArt
            </Link>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Typography>Recrutement:</Typography>

            <Link href="https://www.linkedin.com/in/tndev-art-325325184/">
              https://www.linkedin.com/in/tndev-art-325325184/
            </Link>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          sx={{ color: "lightseagreen" }}
          align="center"
        >
          {"Copyright © "}
          <MuiLink
            sx={{ textDecoration: "none" }}
            color="inherit"
            href="https://tndev-art.com"
          >
            Tndev-art.com
          </MuiLink>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </Box>
  );
}
