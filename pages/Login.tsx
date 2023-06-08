import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginuser } from "../Features/demo";
import { useRouter } from "next/router";
import Navbar from "../Components/Navbar";
import styles from "../styles/error.module.css";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import Link from "next/link";
import Aos from "aos";

const validateschema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("email is required"),
  password: Yup.string().required("Password is Required"),
});

const Login = () => {
  useEffect(()=>{
    Aos.init();
  },[]);
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
  const router = useRouter();
  const handlelogin = async (Loginvalues: any) => {
    try {
      const log = await dispatch(loginuser(Loginvalues)).unwrap();
      if (log) {
        localStorage.setItem("user", JSON.stringify(log));
        router.push("/allpost");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <style>
        {`
  
  .login{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius:12px;

  }
  
  
  
  `}
      </style>
      <Navbar />
      <br />
      <br />
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="login" data-aos="zoom-in-up" data-aos-duration="1000">
          <Box
            sx={{
              width: "600px",
              padding: 12,
              
              height: "550px",
             
            }}
          >
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validateschema}
              onSubmit={handlelogin}
            >
              <Form>
                <h2>Login</h2>
                <Field
                  as={TextField}
                  label="Email"
                  variant="outlined"
                  name="email"
                  type="email"
                  sx={{
                    width: "100%",
                  }}
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
                  type="password"
                  sx={{
                    width: "100%",
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "12px",
                    },
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
                    href="/"
                    style={{ color: "dodgerblue", textDecoration: "underline" }}
                  >
                    Don&apos;t Have an Account?
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

export default Login;
