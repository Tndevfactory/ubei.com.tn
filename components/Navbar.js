import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import { FormattedMessage, FormattedDate, FormattedTime } from "react-intl";
import Link from "../components/Link";
import { useRouter } from "next/router";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();

  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      sx={{ width: "200px" }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/about" className="active">
            <ListItemText>Accueil</ListItemText>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/about" className="active">
            <ListItemText>Accueil</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/about" className="active">
            <ListItemText>Accueil</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/about" className="active">
            <ListItemText>Accueil</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/about" className="active">
            <ListItemText>Accueil</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/about" className="active">
            <ListItemText>Accueil</ListItemText>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container spacing={1} sx={{ color: "white" }}>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Stack direction="row" spacing={1}>
                <IconButton
                  sx={{ display: { xs: "block", md: "none" } }}
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(
                    router.locale == "ar" ? "right" : "left",
                    true
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/logo/logo.png"
                  sx={{ width: 35, height: 35, display: "block", mt: 3 }}
                />

                <Typography
                  variant="h6"
                  component="h5"
                  sx={{ display: "block", pt: 0.4 }}
                >
                  TndevArt
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Link href="/about" className="active">
                  <Typography color="white">Accueil</Typography>
                </Link>

                <Link href="/about" className="active">
                  <Typography color="white">Design</Typography>
                </Link>
                <Link href="/about" className="active">
                  <Typography color="white">Web-app</Typography>
                </Link>

                <Link href="/about" className="active">
                  <Typography color="white">Etudiants</Typography>
                </Link>
                <Link href="/about" className="active">
                  <Typography color="white">Blog</Typography>
                </Link>
                <Link href="/about" className="active">
                  <Typography color="white">Contact-nous</Typography>
                </Link>
              </Stack>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                mx: "auto",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Button
                sx={{ padding: "0px", marginRight: "-15px" }}
                color="secondary"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <span style={{ fontSize: "1.2rem" }}>
                  {router.locale == "ar"
                    ? "🇦🇪"
                    : router.locale == "fr"
                    ? "🇨🇵"
                    : "🇬🇧"}{" "}
                </span>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {router.locales.map((locale) => (
                  <MenuItem key={locale}>
                    <Link
                      href={router.asPath}
                      locale={locale}
                      sx={{ color: "#000", textDecoration: "none" }}
                      onClick={handleClose}
                    >
                      <span style={{ fontSize: "1.2rem" }}>
                        {locale == "ar" ? "🇦🇪" : locale == "fr" ? "🇨🇵" : "🇬🇧"}
                      </span>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>

              <Button
                color="inherit"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                Login
              </Button>
              <Button
                color="inherit"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                Subscribe
              </Button>

              <AccountCircleIcon
                sx={{ mx: 3, display: { xs: "flex", md: "none" } }}
              />
              <AppRegistrationIcon
                sx={{ display: { xs: "flex", md: "none" } }}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <div className=" drawer-core" style={{ width: "50%" }}>
        {["left", "right"].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
