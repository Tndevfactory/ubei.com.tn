import * as React from "react";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

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
import { TndevCtx } from "../contexts/TndevContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function ContactUs() {
  const [methods, states] = TndevCtx();
  const { openDialog, setOpenDialog } = states;

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
  //   // dialog
  //   const [openDialog, setOpenDialog] = React.useState(false);

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

  const router = useRouter();

  return (
    <>
      <Dialog
        component="form"
        // onSubmit={ handleSendEmailJs}
        onSubmit={formik.handleSubmit}
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle sx={{ color: "#095e6d", textAlign: "center" }}>
          Demande de devis
          <FormattedMessage id="contact-us" />
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
