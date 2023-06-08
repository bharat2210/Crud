"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { updateuser } from "../Features/register";

const Update1 = ({ id, setshowupdate }: any) => {
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
  const allusers = useSelector((state: any) => state.grand.rusers);
  const singleuser = allusers.filter((elm: any) => {
    elm.id === id;
    return elm.id === id;
  })[0];
  const [updata, setupdata] = useState({ name: "", email: "", password: "" });
  useEffect(() => {
    setupdata(singleuser);
  }, [singleuser]);
  console.log("single user", singleuser);
  console.log("alluser", allusers);

  const handleupdate = (e: any) => {
    e.preventDefault();

    dispatch(updateuser({ id: singleuser.id, ...updata }));
    setshowupdate(false);
  };
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
            padding: 12,
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
              name="name"
              type="text"
              value={updata.name}
              onChange={(e) =>
                setupdata((prevstate) => ({
                  ...prevstate,
                  name: e.target.value,
                }))
              }
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              type="text"
              value={updata.email}
              onChange={(e) =>
                setupdata((prevstate) => ({
                  ...prevstate,
                  email: e.target.value,
                }))
              }
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              type="text"
              value={updata.password}
              onChange={(e) =>
                setupdata((prevstate) => ({
                  ...prevstate,
                  password: e.target.value,
                }))
              }
            />
            <br />
            <br />

            <Stack spacing={2} direction="row">
              <Button variant="contained" type="submit">
                Update
              </Button>
              <Button onClick={() => setshowupdate(false)}>Cancel</Button>
            </Stack>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Update1;
