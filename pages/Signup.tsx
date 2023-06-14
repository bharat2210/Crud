import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../Features/demo";
import { useRouter } from "next/router";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import styles from "../styles/error.module.css";
import Link from "next/link";
import Aos from "aos";
import Head from 'next/head'
const validateschema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "At least 3 characters"),
  email: Yup.string().email("Invalid email").required("Email is required "),
  password: Yup.string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("Password is Required"),
});

const Signup = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const router = useRouter();
  const [showpassword, setshowpassword] = useState(false);

  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();

  const handlesubmit = async (values: any) => {
    try {
      await dispatch(registerUser(values)).unwrap();
      localStorage.setItem("user", JSON.stringify(values));
      router.push("/allpost");
    } catch (error) {
      return error;
    }
  };
  const togglepassword = () => {
    setshowpassword(!showpassword);
  };

  return (
    <>
     <Head>
        <title>Signup Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br />
      <br />
      <br />
      <br />

      <style>
        {`
      .signup{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        border-radius:12px;
      }
      .fa-solid{
        color:dodgerblue;
      }

      
      
      
      
      `}
      </style>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="signup" data-aos="zoom-in-up" data-aos-duration="1000">
          <Box sx={{ width: "600px", padding: 10, height: "auto" }}>
            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              validationSchema={validateschema}
              onSubmit={handlesubmit}
            >
              <Form>
                <h2>Register Yourself</h2>
                <Field
                  as={TextField}
                  label="Name"
                  variant="outlined"
                  name="name"
                  type="text"
                  size="large"
                  sx={{ width: "100%" }}
                  InputProps={{
                    style: {
                      borderRadius: "12px",
                    },
                  }}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.error}
                />
                <br />
                <br />
                <Field
                  as={TextField}
                  label="Email"
                  variant="outlined"
                  name="email"
                  type="email"
                  size="large"
                  sx={{ width: "100%" }}
                  InputProps={{
                    style: {
                      borderRadius: "12px",
                    },
                  }}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
                <br />
                <br />
                <Field
                  as={TextField}
                  label="Password"
                  variant="outlined"
                  name="password"
                  type={showpassword ? "text" : "password"}
                  size="large"
                  sx={{ width: "100%" }}
                  InputProps={{
                    style: {
                      borderRadius: "12px",
                    },
                    endAdornment: (
                      <i
                        className={`fa-solid fa-eye${
                          showpassword ? "-slash" : ""
                        }`}
                        onClick={togglepassword}
                        style={{
                          fontSize: "18px",
                          marginTop: "10px",
                          cursor: "pointer",
                        }}
                      ></i>
                    ),
                  }}
                />

                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
                <br />
                <br />

                <Stack spacing={2} direction="column">
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                  <h5>
                    <Link
                      href="/Login"
                      style={{
                        color: "dodgerblue",
                        textDecoration: "underline",
                      }}
                    >
                      Already have an Account ?
                    </Link>
                  </h5>
                </Stack>
              </Form>
            </Formik>
          </Box>
        </div>
      </Box>
    </>
  );
};
export default Signup;
