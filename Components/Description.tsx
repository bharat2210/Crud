import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import Head from 'next/head'


const Description = ({ setshowdescription, id }:any) => {
  const items = useSelector((state:any) => state.allcarts.items);
  const singleitem = items.filter((elm:any) => {
    elm.id === id;
    return elm.id === id;
  })[0];
  console.log("singleitem", singleitem);
  if (!singleitem) {
    return null; 
  }
  return (
    <>
     <Head>
        <title>Description Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      background-color: rgba(0, 0, 0, 0.7);
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
    .desc img{
        border-radius:50px;
    }
    
  
 
 
   
   
   
   
   
   `}
      </style>

      <div className="overlay">
        <Box
          sx={{
            height: "auto",
            width: "70%",
            backgroundColor: "rgba(236, 241, 216, 0.932)",
            borderRadius: 12,
            padding: 6,
          }}
          className="animation"
        >
          <div className="desc">
            <img src={singleitem.img} alt="" height="400" width="750" style={{marginLeft:"140px"}}/>
            <h3>
              <b>Name:</b>
            </h3>
            <h4>{singleitem.title}</h4>
            <h3>
              <b>Screen size:</b>
            </h3>
            <h4>{singleitem.size}</h4>
            <h3>
              <b>Features</b>
            </h3>
            <h4>{singleitem.full}</h4>
          </div>
          <Button
            variant="contained"
            onClick={() => {
              setshowdescription(false);
            }}
          >
            Close
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Description;
