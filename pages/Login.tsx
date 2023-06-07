
import React, {useEffect } from "react";
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
import styles from '../styles/error.module.css'
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import Link from "next/link";

const validateschema=Yup.object().shape({
    
    email:Yup.string().email("Invalid email").required("email is required"),
    password:Yup.string().required("Password is Required")
})

const Login = () =>{
    const dispatch: ThunkDispatch<any, void, AnyAction>=useDispatch()
    const router=useRouter();
    const handlelogin=async(Loginvalues:any)=>{
        try{
            const log=await dispatch(loginuser(Loginvalues)).unwrap()
            if(log) {
                localStorage.setItem('user', JSON.stringify(log));
                router.push("/allpost")
              } else {
                alert("Invalid username or password");
              }
        }catch(error){
            return error
        }
    }
      
  return (
    <div>
        <Navbar/>
        <br /><br /><br />
 <Box sx={{
        display: "flex",
        justifyContent: "center",
     
      }}>

 <Box sx={{ width:"auto",padding:12,border:1,height:"auto",borderRadius:12 }}>
    <Formik 
    initialValues={{email:"",password:""}}
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
             
              InputProps={{
                style:{
                  borderRadius:"12px"
                }
              }}
       
            />
            <ErrorMessage name="email" component="div" className={styles.error}/><br /><br />
           
              <Field
              as={TextField}
              label="Password"
              variant="outlined"
              name="password"
              type="password"
           
              InputProps={{
                style:{
                  borderRadius:"12px"
                }
              }}
           
            />
              <ErrorMessage name="password" component="div" className={styles.error}/><br /><br />
     
              <Stack spacing={2} direction="row">
              <Button variant="contained" type="submit">
                Submit
              </Button>
             
            </Stack>
            <h5><Link href="/" style={{color:"dodgerblue",textDecoration:"underline"}}>Don&apos;t Have an Account?</Link></h5>




        </Form>



    </Formik>




      </Box>
    







 </Box>




    </div>
  )
}

export default Login;