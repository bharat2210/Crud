"use client";
// Next imports
import * as React from "react";
// MUI imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { updateuser } from "../Features/userdetail";
import { AppDispatch, RootState } from "../store";

const Update = ({ id, setshowpopup }: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [updatedata, setupdatedata] = useState<{E_name:String,E_age:Number,E_email:String}>({
    E_name: "",
    E_age: 0,
    E_email: "",
  });
  const allusers = useSelector((state:RootState) => state.app.users);
  const singleuser = allusers.filter((ele: any) => {
    ele._id === id;
    return ele._id === id;
  })[0];

 
  useEffect(() => {
    setupdatedata(singleuser);
  }, [singleuser]);

  const handleupdate = (e: any) => {
    e.preventDefault();
    setshowpopup(false);
    dispatch(updateuser({ id: singleuser._id, ...updatedata }));
  };

  console.log("allusers", allusers);
  console.log("singleuse", singleuser);

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
  


`}
      </style>
      <div className="overlay">
        <Box
          sx={{
            height: 450,
            padding: 8,
            backgroundColor: "white",
            borderRadius: 12,
          }}
          className="animation"
        >
          <h3
            style={{ textAlign: "center", color: "dodgerblue", marginTop: 1 }}
          >
            Edit Record
          </h3>
          <form action="" onSubmit={handleupdate}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="E_name"
              type="text"
              value={updatedata.E_name}
              onChange={(e) =>
                setupdatedata((prevstate) => ({
                  ...prevstate,
                  E_name: e.target.value,
                }))
              }
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              name="E_age"
              type="number"
              value={updatedata.E_age}
              onChange={(e) =>
                setupdatedata((prevstate) => ({
                  ...prevstate,
                  E_age:Number( e.target.value),
                }))
              }
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="E_email"
              type="email"
              value={updatedata.E_email}
              onChange={(e) =>
                setupdatedata((prevstate) => ({
                  ...prevstate,
                  E_email: e.target.value,
                }))
              }
            />
            <br />
            <br />

            <Stack spacing={2} direction="column">
              <Button variant="contained" type="submit">
                Update
              </Button>
              <Button onClick={() => setshowpopup(false)}>Cancel</Button>
            </Stack>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Update;
