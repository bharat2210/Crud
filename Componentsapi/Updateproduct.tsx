import React, { useState,useEffect } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector,useDispatch } from 'react-redux';
import { updateitem } from '../Features/productsslice';
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Row,Col } from 'antd';

const Updateproduct = ({ setshowupdate, id }:any)=> {
  const dispatch:ThunkDispatch<any, void, AnyAction>= useDispatch();
  const [updatedata, setupdatedata] = useState({ title: "",price:"",stock:"" });
  const allproducts = useSelector((state:any) => state.allcarts.apiproducts);
  console.log("allproducts", allproducts);
  console.log("update id", id);

  const singleproduct = allproducts.filter((data:any) => {
    return data.id === id;
  })[0];

  console.log("singleproduct", singleproduct);

  const handleupdate = (e) => {
    e.preventDefault();
    dispatch(updateitem({id:singleproduct.id, ...updatedata}));
    setshowupdate(false);

    console.log("handle clicked");
  };
  useEffect(() => {
    setupdatedata(singleproduct);
  }, [singleproduct]);


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
            }`}
      </style>
      <div className="overlay">
        <Box
          sx={{
            height: "auto",
            width: "auto",
            padding: 6,
            backgroundColor: "white",
            borderRadius: 12,
          }}
          className="animation"
        >
          <h3 style={{ textAlign: "left", color: "dodgerblue" }}>
            Edit Records
          </h3>
          <form action="" onSubmit={handleupdate}  className='form'>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              name="title"
              type="text"
              value={updatedata.title}
              onChange={(e) =>
                setupdatedata((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            /> <br /><br />
              <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              name="price"
              type="number"
              value={updatedata.price}
              onChange={(e) =>
                setupdatedata((prevState) => ({
                  ...prevState,
                  price: e.target.value,
                }))
              }
            /> <br /><br />
              <TextField
              id="outlined-basic"
              label="Stock"
              variant="outlined"
              name="stock"
              type="number"
              value={updatedata.stock}
              onChange={(e) =>
                setupdatedata((prevState) => ({
                  ...prevState,
                  stock: e.target.value,
                }))
              }
            /> <br /><br />
            <Stack spacing={2} direction="column">
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
}

export default Updateproduct;
