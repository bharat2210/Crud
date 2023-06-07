import React, { useState } from "react";
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
import Link from "next/link";
const validateschema=Yup.object().shape({
    name:Yup.string().required("Name is required").min(3,"At least 3 characters"),
    email:Yup.string().email("Invalid email").required("email is required"),
    password:Yup.string().required("Password is Required")
})



const Signup=()=>{
  const router=useRouter()

  const dispatch: ThunkDispatch<any, void, AnyAction>=useDispatch()


  const handlesubmit=async(values:any)=>{
    try{
      await  dispatch(registerUser(values)).unwrap();
      localStorage.setItem("user", JSON.stringify(values));
      router.push("/allpost")


    }catch(error){
      return error
    }
 
    
  }
    return(
      <><br /><br />
     <Box  sx={{
        display: "flex",
        justifyContent: "center",
     
      }}>

     <Box sx={{ width:"auto",padding:12,border:1,height:"auto",borderRadius:12,boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)"  }}>
    <Formik 
    initialValues={{name:"",email:"",password:""}}
    validationSchema={validateschema}
    onSubmit={handlesubmit}
    
    >
        <Form>
          <h2>Sign Up</h2>
        <Field
              as={TextField}
              label="Name"
              variant="outlined"
              name="name"
              type="text"
              size="small"
       
            />
            <ErrorMessage name="name" component="div"/><br /><br />
            <Field
              as={TextField}
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              size="small"
           
            />
              <ErrorMessage name="email" component="div"/><br /><br />
              <Field
              as={TextField}
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              size="small"
           
            />
              <ErrorMessage name="password" component="div"/><br /><br />
     
              <Stack spacing={2} direction="row">
              <Button variant="contained" type="submit">
                Submit
              </Button>
             
            </Stack>
            <h5><Link href="/Login" style={{color:"dodgerblue",textDecoration:"underline"}}>Already have an Account ?</Link></h5>




        </Form>



    </Formik>




      </Box>
      
      


     </Box>
      
      
      </>


    )
}
export default Signup;