import * as React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Container } from "@mui/material";
import { FacebookShareButton, FacebookIcon } from "next-share";
import { PinterestShareButton, PinterestIcon } from "next-share";
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
        <FacebookShareButton
          url={"https://www.tndev-art.tn/"}
          quote={"share java app"}
          hashtag={"#nextshare"}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <PinterestShareButton
          url={"www.tndev-art.tn"}
          media={
            "next-share is a social share buttons for your next React apps."
          }
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>
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
