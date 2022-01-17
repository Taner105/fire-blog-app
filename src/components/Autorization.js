import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import blokPng from "../assets/blok.png";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify, toastErrorNotify } from "../utils/ToastNotify";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useAuth } from "../context/AuthContextProvider";
import loadingGif from "../assets/loading.gif";
import googlePng from "../assets/google.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    "& .MuiPaper-root": {
      borderRadius: "30px",
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
      height: "fit-content",
      marginTop: 30,
      maxWidth: "500px",
    },
  },
  image: {
    backgroundImage: "url(https://picsum.photos/1600/900)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    paddingTop: "40px",
  },
  paper: {
    margin: theme.spacing(4, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(25),
    height: theme.spacing(25),
    backgroundColor: "#046582",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      color: "#046582",
    },
  },
  header: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "#046582",
  },
  loadingGif: {
    width: 75,
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  googleImg: {
    width: 75,
    marginLeft: 10,
  },
  googleBtn: {
    backgroundColor: "white",
    fontWeight: "bold",
  },
}));

const ValidationSchema = yup.object().shape({
    email: yup
        .string("Enter your email")
        .email("Invalid email address")
        .required("Required"),
    password: yup.string("Enter your password").required("password required")
});


const Autorization = () => {
    const navigate = useNavigate();
    const {signub, login, currentUser} = useAuth();

    useEffect(() => {
        if(currentUser) {
            navigate("/")
        }
        console.log({currentUser});
    },[currentUser, navigate])
    return <div>
        <Formik
            initialValues = {{
                email:"",
                password:"",

            }}
            validationSchema={ValidationSchema}
            onSubmit={(values, actions) => {}}
            // component ={LoginAndRegisterForm}
            >

        </Formik>
    </div>
};

export default Autorization;