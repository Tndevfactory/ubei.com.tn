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

export default function NavbarHeader() {
  // menu
  //menu design
  const [anchorElDesign, setAnchorElDesign] = React.useState(null);
  const openDesign = Boolean(anchorElDesign);

  const [anchorElWeb, setAnchorElWeb] = React.useState(null);
  const openWeb = Boolean(anchorElWeb);

  const [anchorElMobile, setAnchorElMobile] = React.useState(null);
  const openMobile = Boolean(anchorElMobile);

  const [anchorElSoftware, setAnchorElSoftware] = React.useState(null);
  const openSoftware = Boolean(anchorElSoftware);

  const [anchorElFormation, setAnchorElFormation] = React.useState(null);
  const openFormation = Boolean(anchorElFormation);

  const [anchorElStudent, setAnchorElStudent] = React.useState(null);
  const openStudent = Boolean(anchorElStudent);

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

  return (
    <>
      <AppBar position="static">
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
                src="/static/images/logo/logo.svg"
                sx={{ width: 35, height: 35, display: "block", mx: 1 }}
              />

              <Typography variant="h6" component="h5" sx={{ display: "block" }}>
                <FormattedMessage id="Vendre sur UBEI" />
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
            ></Grid>
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
                onMouseEnter={handleClick}
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
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
