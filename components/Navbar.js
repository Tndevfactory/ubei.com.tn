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
import CircularProgress from "@mui/material/CircularProgress";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";

import CloseIcon from "@mui/icons-material/Close";
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
import emailjs from "emailjs-com";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";

import MuiAlert from "@mui/material/Alert";
import { useFormik } from "formik";
import * as Yup from "yup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function Navbar() {
  // menu
  //menu design
  const [anchorElDesign, setAnchorElDesign] = React.useState(null);
  const openDesign = Boolean(anchorElDesign);

  // loading
  const [subject, setSubject] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("required"),
      email: Yup.string().email("Invalid Email address ").required("required"),
      phone: Yup.string()
        .required("required")
        .matches(phoneRegExp, "Phone number is not valid")
        .min(8, "to short")
        .max(20, "to long"),
      subject: Yup.string().required("required"),
      message: Yup.string()
        .max(350, "Must be 350 characters or less")
        .required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleSendEmailJs(values);
    },
    onReset: (values) => {
      values = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      };
      handleCloseDialog();
    },
  });

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  //auth handler
  const handleClickSignin = (e) => {
    e.preventDefault();
    router.push("/auth/signin");
  };
  const handleClickSignup = (e) => {
    e.preventDefault();
    router.push("/auth/signup");
  };
  // snackbar
  const [openSnack, setOpenSnack] = React.useState(false);

  const handleTriggerSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  const actionSnack = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnack}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  // dialog
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleSendEmailJs = (values) => {
    const cfg = {
      service_id: "default_service",
      template_id: "template_926ocnr",
      user_ID: "6haf1VFm90APXwrqS",
    };

    let params = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      subject: values.subject,
      message: values.message,
    };

    setLoading(true);

    emailjs.send(cfg.service_id, cfg.template_id, params, cfg.user_ID).then(
      (result) => {
        console.log(result.text);
        handleTriggerSnack();
        setLoading(false);
      },
      (error) => {
        console.log(error.text);
        setLoading(false);
      }
    );

    setOpenDialog(false);
    formik.resetForm();
    return;
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
            <ListItemText>
              {" "}
              <FormattedMessage id="home" />
            </ListItemText>
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
            <ListItemText>
              {" "}
              <FormattedMessage id="design" />
            </ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/web" className="active">
            <ListItemText>
              {" "}
              <FormattedMessage id="web" />
            </ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/mobile" className="active">
            <ListItemText>
              {" "}
              <FormattedMessage id="mobile" />
            </ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/software" className="active">
            <ListItemText>
              {" "}
              <FormattedMessage id="software" />
            </ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link href="/blog" className="active">
            <ListItemText>
              {" "}
              <FormattedMessage id="blog" />
            </ListItemText>
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
            <FormattedMessage id="contact-us" />
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
                sx={{ width: 35, height: 35, display: "block", mx: 1 }}
              />

              <Typography variant="h6" component="h5" sx={{ display: "block" }}>
                <FormattedMessage id="TndevArt" />
              </Typography>
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
                  <Typography
                    color="white"
                    sx={{ ml: router.locale === "ar" ? "9px" : "0px" }}
                  >
                    <FormattedMessage id="home" />
                  </Typography>
                </Link>

                {/* <Link href="/design" className="active"> */}
                <div>
                  <Typography
                    id="basic-button"
                    color="#fff"
                    aria-controls={openDesign ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openDesign ? "true" : undefined}
                    onClick={(e) => setAnchorElDesign(e.currentTarget)}
                    sx={{ cursor: "pointer", display: "flex" }}
                  >
                    <FormattedMessage id="design" />
                    <KeyboardArrowDownIcon sx={{ fontSize: 20, mt: 0.51 }} />
                  </Typography>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorElDesign}
                    open={openDesign}
                    onClose={() => setAnchorElDesign(null)}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={() => setAnchorElDesign(null)}>
                      Manga art
                    </MenuItem>
                    <MenuItem onClick={() => setAnchorElDesign(null)}>
                      Logo & Brand
                    </MenuItem>
                    <MenuItem onClick={() => setAnchorElDesign(null)}>
                      3d Maya
                    </MenuItem>
                  </Menu>
                </div>

                <Link href="/web" className="active">
                  <Typography color="white">
                    <FormattedMessage id="web" />
                  </Typography>
                </Link>
                <Link href="/mobile" className="active">
                  <Typography color="white">
                    <FormattedMessage id="mobile" />
                  </Typography>
                </Link>
                <Link href="/software" className="active">
                  <Typography color="white">
                    <FormattedMessage id="software" />
                  </Typography>
                </Link>

                <Link href="/training" className="active">
                  <Typography color="white">
                    <FormattedMessage id="training" />
                  </Typography>
                </Link>
                <Link href="/student" className="active">
                  <Typography color="white">
                    <FormattedMessage id="student" />
                  </Typography>
                </Link>
                <Link href="/blog" className="active">
                  <Typography color="white">
                    <FormattedMessage id="blog" />
                  </Typography>
                </Link>

                <Typography
                  sx={{
                    background: "orange",
                    px: 2,
                    py: 0.1,
                    mb: 2,
                    color: "#fff",
                    borderRadius: "6px",
                    textDecoration: "none",

                    boxShadow: "none",
                    cursor: "pointer",
                  }}
                  onClick={handleClickOpenDialog}
                >
                  <FormattedMessage id="contact-us" />
                  {loading && (
                    <CircularProgress sx={{ zIndex: 9999, mx: 2 }} size={18} />
                  )}
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

              <Tooltip title="Login">
                <IconButton
                  sx={{ display: { xs: "flex", md: "flex" } }}
                  onClick={handleClickSignin}
                >
                  <AccountCircleIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="register">
                <IconButton
                  sx={{ display: { xs: "flex", md: "flex" } }}
                  onClick={handleClickSignup}
                >
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
      <Dialog
        component="form"
        // onSubmit={ handleSendEmailJs}
        onSubmit={formik.handleSubmit}
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle sx={{ color: "#095e6d", textAlign: "center" }}>
          <FormattedMessage id="ask-for-a-quote" />
        </DialogTitle>

        <DialogContent>
          <TextField
            error={formik.touched.name && !!formik.errors.name}
            helperText={formik.errors.name}
            autoFocus
            margin="dense"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Nom"
            type="name"
            fullWidth
            variant="standard"
          />

          <TextField
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.errors.email}
            margin="dense"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Email"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            error={formik.touched.phone && !!formik.errors.phone}
            helperText={formik.errors.phone}
            margin="dense"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Telephone"
            type="text"
            fullWidth
            variant="standard"
          />

          <FormControl variant="standard" sx={{ mt: 1, width: "100%" }}>
            <InputLabel id="sujetInput">Sujet</InputLabel>
            <Select
              labelId="subject"
              id="subject"
              name="subject"
              error={formik.touched.subject && !!formik.errors.subject}
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Sujet"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={`mobile app`}>Mobile app</MenuItem>
              <MenuItem value={`Website`}>Website</MenuItem>
              <MenuItem value={`E-software`}>Software</MenuItem>
              <MenuItem value={`Design`}>Design</MenuItem>
              <MenuItem value={`Training`}>Training</MenuItem>
              <MenuItem value={`PFE`}>PFE</MenuItem>
              <MenuItem value={`other`}>other- see details below</MenuItem>
            </Select>
          </FormControl>
          <TextField
            multiline
            rows={5}
            margin="dense"
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && !!formik.errors.message}
            helperText={formik.errors.message}
            label="Demande"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          {/* <Button type="reset" onClick={handleCloseDialog}>
            Annuler
          </Button> */}
          <Button type="reset" onClick={formik.handleReset}>
            Annuler
          </Button>
          <Button
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            variant="outlined"
          >
            Envoyer
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
        action={actionSnack}
        TransitionComponent={Fade}
        key={Fade}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="success"
          sx={{ width: "100%" }}
        >
          Sent with success, our team will contact in 48 hours !
        </Alert>
      </Snackbar>
      ;<div id="back-to-top-anchor"></div>
    </>
  );
}
