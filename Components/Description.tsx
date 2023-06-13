import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";


const Description = ({ setshowdescription, id }) => {
  const items = useSelector((state) => state.allcarts.items);
  const singleitem = items.filter((elm) => {
    elm.id === id;
    return elm.id === id;
  })[0];
  console.log("singleitem", singleitem);
  if (!singleitem) {
    return null; 
  }
  return (
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
            backgroundColor: "white",
            borderRadius: 12,
            padding: 6,
          }}
          className="animation"
        >
          <div className="desc">
            <img src={singleitem.img} alt="" height="400" width="750" style={{marginLeft:"140px"}}/>
            <h4>
              <b>Name:</b>
            </h4>{" "}
            <p>{singleitem.title}</p>
            <h4>
              <b>Screen size:</b>
            </h4>{" "}
            <p>{singleitem.size}</p>
            <h4>
              <b>Features</b>
            </h4>{" "}
            <p>{singleitem.full}</p>
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
