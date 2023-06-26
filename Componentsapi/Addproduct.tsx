"use client";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../styles/error.module.css";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {  addproducts } from "../Features/productsslice";
import { InputAdornment } from "@mui/material";







const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  price: Yup.number().positive().required("Price is required"),
  img: Yup.string().required("Image URL is required"),
  quantity: Yup.number().positive().required("Quantity is required"),
  description: Yup.string().required("Description is required"),
  rating: Yup.number().positive().required("Rating is required"),
  size: Yup.string().required("Size is required"),
  full: Yup.string().required("Full is required"),
  color: Yup.string().required("Color is required"),
  storage: Yup.string().required("Storage is required"),
  ribbon: Yup.boolean().required("Ribbon is required"),
  stock: Yup.number().required("Stock is required"),
  category: Yup.string().required("Category is required"),
});

const Addproduct=({setaddproducts,setitemadded}:any)=>{
    const router = useRouter();
    const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
    

    const handleSubmit = (values: any) => {
        dispatch(addproducts(values));
     
        console.log("values", values);
        setaddproducts(false);
        setitemadded(true);
        setTimeout(() => {
          setitemadded(false)
        },2000 );
      };
    
    return(
        <>
   <style>
        {`
          

          .centered-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: auto;
            background-color:white;
            padding:8px;
            border-radius:30px;
          }

          .overlay {
            position: fixed;
               top:0px;
              margin-right:auto;
              margin-left:auto;
              margin-top:10px;
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


        <div className="centered-container animation" >
        <Box sx={{ width: 550 ,marginLeft:20}}>
          <Formik
            initialValues={{
              title: "",
              price: "",
              img: "",
              quantity: "",
              description: "",
              rating: "",
              size: "",
              full: "",
              color: "",
              storage: "",
              ribbon: true,
              stock: "",
              category: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
             <h3 style={{color:"dodgerblue"}}>Add Product</h3>
              <Row gutter={8}>
                <Col span={8}>
                  {" "}
                  <Field
                    as={TextField}
                    label="Title"
                    variant="outlined"
                    name="title"
                    type="text"
                    size="small"
                    fullWidth
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className={styles.error}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    as={TextField}
                    label="Price"
                    variant="outlined"
                    name="price"
                    type="number"
                    size="small"
                    fullWidth
                    InputProps={{
                        startAdornment: <InputAdornment position="start">&#x20B9;</InputAdornment>,
                      }}
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className={styles.error}
                  />
                </Col>
              </Row>
              <br />
              <Row gutter={8}>
                <Col span={8}>
                  {" "}
                  <Field
                    as={TextField}
                    label="Images"
                    variant="outlined"
                    name="img"
                    type="string"
                    size="small"
                    fullWidth
                  />
                  <ErrorMessage
                    name="img"
                    component="div"
                    className={styles.error}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    as={TextField}
                    label="Quantity"
                    variant="outlined"
                    name="quantity"
                    type="number"
                    size="small"
                    fullWidth
                  />
                  <ErrorMessage
                    name="quantity"
                    component="div"
                    className={styles.error}
                  />
                </Col>
              </Row>
              <br />

              <Row>
                <Col span={16}>
                  <Field
                    as={TextField}
                    label="Headline"
                    variant="outlined"
                    name="description"
                    multiline
                    rows={2}
                    size="small"
                    fullWidth
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className={styles.error}
                  />
                </Col>
              </Row>
              <br />

              <Row gutter={8}>
                <Col span={8}>
                  {" "}
                  <Field
                    as={TextField}
                    label="Rating"
                    variant="outlined"
                    name="rating"
                    type="number"
                    size="small"
                    fullWidth
                  />
                  <ErrorMessage
                    name="rating"
                    component="div"
                    className={styles.error}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    as={TextField}
                    label="Size"
                    variant="outlined"
                    name="size"
                    type="string"
                    size="small"
                    fullWidth
                  />
                  <ErrorMessage
                    name="size"
                    component="div"
                    className={styles.error}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={16}>
                  <Field
                    as={TextField}
                    label="Full Description"
                    variant="outlined"
                    name="full"
                    type="string"
                    multiline
                    rows={4}
                    size="small"
                    fullWidth
                  />
                  <ErrorMessage
                    name="full"
                    component="div"
                    className={styles.error}
                  />
                </Col>
              </Row>
              <br />

              <Row gutter={8}>
                <Col span={8}>
                  {" "}
                  <Field
                    as={TextField}
                    label="Color"
                    variant="outlined"
                    name="color"
                    type="string"
                    size="small"
                    fullWidth
                  />
                  <ErrorMessage
                    name="color"
                    component="div"
                    className={styles.error}
                  />
                </Col>
                <Col span={8}>
                  {" "}
                  <Field
                    as={TextField}
                    label="Storage"
                    variant="outlined"
                    name="storage"
                    type="string"
                    size="small"
                    fullWidth
                  />
                  <ErrorMessage
                    name="storage"
                    component="div"
                    className={styles.error}
                  />
                </Col>
              </Row>
              <br />
              <Row gutter={8}>
                <Col span={8}>
                  {" "}
                  <Field
                    as={TextField}
                    label="Ribbon"
                    variant="outlined"
                    name="ribbon"
                    type="boolean"
                    size="small"
                    fullWidth
                  />
                  <ErrorMessage
                    name="ribbon"
                    component="div"
                    className={styles.error}
                  />
                </Col>
                <Col span={8}>
                  {" "}
                  <Field
                    as={TextField}
                    label="Stock"
                    variant="outlined"
                    name="stock"
                    type="number"
                    size="small"
                    fullWidth
                  />
                  <ErrorMessage
                    name="stock"
                    component="div"
                    className={styles.error}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={16}>
                  {" "}
                  <Field
                    as={TextField}
                    label="Category"
                    variant="outlined"
                    name="category"
                    type="string"
                    size="small"
                    fullWidth
                  />
                  <ErrorMessage
                    name="category"
                    component="div"
                    className={styles.error}
                  />
                </Col>
              </Row>
              <br />

              <div style={{ textAlign: "center" }}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
                <Button onClick={() => setaddproducts(false)}>Cancel</Button>
              </div>
            </Form>
          </Formik>
        </Box>
      </div>



        </div>
        
        
        
        
        
        
        
        
        </>
    )
}
export default Addproduct;