import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from '../styles/error.module.css'
import { createuser } from "../Features/userdetail";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const validationSchema = Yup.object().shape({
  E_name: Yup.string().required("Name is required").min(2,"Minimum two characters").max(16,"Only 16 characters are allowed"),
  E_age: Yup.number().required("Age is required").min(1,"Minimum age is 1").max(100,"Can't exceed above 100"),
  E_email: Yup.string().email("Invalid email").required("Email is required"),
});

const Create=({setshowcreate}:any)=>{

    const dispatch:ThunkDispatch<any, void, AnyAction>=useDispatch()
    const router=useRouter()
   const handleSubmit=(values:any)=>{
    setshowcreate(false)
    dispatch(createuser(values))



   }



return(
<>
<style>
{`

.overlay {
  position: fixed;
    margin-right:auto;
    margin-left:auto;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
 
  }
  .animation{
    animation: fade 0.3s;
  }
  @keyframes fade {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }




`}


</style>


  

<div className="overlay">

      <br />
      <Box sx={{ border:1,height:"auto",padding:12 ,backgroundColor:"white",borderRadius:12}} className="animation">
        <Formik
          initialValues={{ E_name: "", E_age: "", E_email: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
           >
          <Form>
          <h3 style={{ textAlign: "center",color:"dodgerblue" }}>Enter a Record</h3>
            <Field
              as={TextField}
              label="E_name"
              variant="outlined"
              name="E_name"
              type="text"
              size="small"
            />
            <ErrorMessage name="E_name" component="div" className={styles.error}/>
            <br />
            <br />
            <Field
              as={TextField}
              label="E_age"
              variant="outlined"
              name="E_age"
              type="number"
              size="small"
            />
            <ErrorMessage name="E_age" component="div" className={styles.error} />
            <br />
            <br />
            <Field
              as={TextField}
              label="E_email"
              variant="outlined"
              name="E_email"
              type="email"
              size="small"
            />
            <ErrorMessage name="E_email" component="div"  className={styles.error}/>
            <br />
            <br />
            <Stack spacing={2} direction="row">
              <Button variant="contained" type="submit">
                Submit
              </Button>
              <Button onClick={()=>setshowcreate(false)}>
                Cancel
              </Button>
            </Stack>
          </Form>
        </Formik>
      </Box>







</div>


</>








)
}
export default Create;