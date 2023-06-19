import React, { useState } from "react";
import Navbar1 from "../Components/Navbar1";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import prompt from "../styles/prompt.module.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Stack } from "@mui/material";
import Aos from "aos";
import { useSelector, useDispatch } from "react-redux";
import {
  deletewishcart,
  removewishcart,
  addtocart,
} from "../Features/productsslice";
import styles from "../styles/confirm.module.css";
import { Empty } from "antd";

const Wishlist = () => {
  React.useEffect(() => {
    Aos.init({ duration: 800 });
  });
  const [showwishlist, setshowwishlist] = useState(false);
  const [alreadyAdded, setalreadyAdded] = useState(false);
  const [showdelete, setshowdelete] = useState(false);
  const [showpopup, setshowpopup] = useState(false);
  const dispatch = useDispatch();
  const { wishlist, cart } = useSelector((state: any) => state.allcarts);
  console.log("wishlist", wishlist);

  const wishremove = (id: number) => {
    dispatch(removewishcart(id));
  };

  const wishdelete = () => {
    if (wishlist.length === 0) {
  
      setshowwishlist(true);
    } else {
      setshowdelete(true);
    }
  };
  const confirmdelete = () => {
    dispatch(deletewishcart());
    setshowdelete(false);
  };
  const handleaddtocart = (values: any) => {
    const existingItem = cart.find((item: any) => item.id === values.id);

    if (existingItem) {
      setalreadyAdded(true);
      return;
    }

    dispatch(addtocart(values));
    setshowpopup(true);
    setTimeout(() => {
      setshowpopup(false);
    }, 1000);
  };

  return (
    <>
      <style>
        {`
        *{
            margin:0;
        }
        .container{
            height:150px;
            width:100%;
            background-color:white;
            text-align:center;
            margin-top:0 ;
         
            display:flex;
            justify-content:center;
            align-items:center; 

        }
        .card{
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        }
        h1{
          color: #444;
          text-shadow: 
    1px 0px 1px #ccc, 0px 1px 1px #eee, 
    2px 1px 1px #ccc, 1px 2px 1px #eee,
    3px 2px 1px #ccc, 2px 3px 1px #eee,
    4px 3px 1px #ccc, 3px 4px 1px #eee,
    5px 4px 1px #ccc, 4px 5px 1px #eee,
    6px 5px 1px #ccc, 5px 6px 1px #eee,
    7px 6px 1px #ccc;
        }
        .popup {
          position: fixed;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          background-image: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
          padding: 22px;
          border-radius: 4px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          z-index: 9999;
        }
        
         p{
          margin: 0;
          font-size: 22px;
          font-weight: 500;
          color:black;
        }
        
        
        
        `}
      </style>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <Navbar1 />
      <div className="container">
        <div className="heading">
          <h1> Wishlist - {wishlist.length} items</h1>
        </div>
      </div>
      <br />
      {showwishlist && (
        <div className={styles.prompt}>
          <p className={styles.message}>Wishlist is already empty !!!</p>
          <button
            className={styles.okButton}
            onClick={() => setshowwishlist(false)}
          >
            OK
          </button>
        </div>
      )}
      {alreadyAdded && (
        <div className={styles.prompt}>
          <p className={styles.message}>Item is already in cart!!!</p>
          <button
            className={styles.okButton}
            onClick={() => setalreadyAdded(false)}
          >
            OK
          </button>
        </div>
      )}
      {showdelete && (
        <div className={prompt.modal}>
          <div className={prompt.modalContent}>
            <p style={{ fontWeight: "600", color: "black" }}>
              Are you sure want to delete all items ?
            </p>
            <br />
            <Typography variant="body2" sx={{ color: "red" }}>
              This action can't be undone
            </Typography>
            <div className={prompt.modalButtons}>
              <button onClick={confirmdelete}>Yes</button>
              <button onClick={() => setshowdelete(false)}>No</button>
            </div>
          </div>
        </div>
      )}
      {showpopup && (
        <div className="popup">
          <p style={{color:"white"}}>Item has been added to Cart</p>
        </div>
      )}

      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {wishlist.map((data: any) =>(
          <Card
            sx={{ height: 390, width: 420 }}
            className="card"
            data-aos="fade-up"
            key={data.id}
          >
            <CardMedia>
              <img src={data.img} alt="Image" height={250} width={418} />
            </CardMedia>
            <CardContent>
              <Typography
                variant="body1"
                component="p"
                style={{ textAlign: "center" }}
              >
                {data.title} {data.storage}
              </Typography>
              <hr />
            </CardContent>
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button variant="contained" size="small">
                Buy
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={() => handleaddtocart(data)}
              >
             
                <i className="fa-solid fa-cart-shopping"></i> +
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => wishremove(data.id)}
              >
                <i
                  className="fa-solid fa-trash"
                  style={{ fontSize: "18px" }}
                ></i>
              </Button>
            </Stack>
          </Card>
        ))}
      </Container>
      <br />
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="contained" size="small" onClick={wishdelete}>
          Delete All
        </Button>
      </Stack>
    </>
  );
};

export default Wishlist;
