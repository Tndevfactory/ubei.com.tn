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
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Tooltip from "@mui/material/Tooltip";

export default function Navbar() {
  // dialog
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // drawer
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
          <Link href="/" className="active">
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
          <Link href="/design" className="active">
            <ListItemText>Design</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/web" className="active">
            <ListItemText>Web</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/mobile" className="active">
            <ListItemText>Mobile</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/software" className="active">
            <ListItemText>Software</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/blog" className="active">
            <ListItemText>Blog</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>

          <Typography
            sx={{
              background: "orange",
              padding: "2px",
              borderRadius: "6px",
              textDecoration: "none",
              boxShadow: "none",
              cursor: "pointer",
            }}
            onClick={handleClickOpenDialog}
            color="white"
          >
            Contact-nous
          </Typography>
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
                <Link href="/" className="active">
                  <Typography color="white">Accueil</Typography>
                </Link>

                <Link href="/design" className="active">
                  <Typography color="white">Design</Typography>
                </Link>
                <Link href="/web" className="active">
                  <Typography color="white">Web</Typography>
                </Link>
                <Link href="/mobile" className="active">
                  <Typography color="white">Mobile</Typography>
                </Link>
                <Link href="/software" className="active">
                  <Typography color="white">Software</Typography>
                </Link>

                <Link href="/training" className="active">
                  <Typography color="white">Formation</Typography>
                </Link>
                <Link href="/student" className="active">
                  <Typography color="white">Etudiant</Typography>
                </Link>
                <Link href="/blog" className="active">
                  <Typography color="white">Blog</Typography>
                </Link>

                <Typography
                  sx={{
                    background: "orange",
                    padding: "2px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    boxShadow: "none",
                    cursor: "pointer",
                  }}
                  onClick={handleClickOpenDialog}
                  color="white"
                >
                  Contact-nous
                </Typography>
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

              <Tooltip title="Login">
                <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
                  <AccountCircleIcon sx={{ mx: 2, color: "white" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="register">
                <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
                  <AppRegistrationIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>
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

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Demande</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Nous vous remercions de votre confiance
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="telephone"
            label="Telephone"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="sujet"
            label="Sujet"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            multiline
            rows={4}
            margin="dense"
            id="demande"
            label="Demande"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Retour</Button>
          <Button onClick={handleCloseDialog}>Envoyer</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
