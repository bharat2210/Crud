// Next imports
import React, { useState } from "react";
// Redux imports
import { useSelector, useDispatch } from "react-redux";
import {
  deletewishcart,
  removewishcart,
  addtocart,
} from "../Features/productsslice";
import { AppDispatch, RootState } from "../store";
// Mui imports
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Stack } from "@mui/material";
// Antd imports
import { Tooltip } from "antd";
import { DeleteFilled, InfoCircleOutlined } from "@ant-design/icons";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card as AntCard } from "antd";
// Components imports
import Navbar1 from "../Components/Navbar1";
// Styles imports
import prompt from "../styles/prompt.module.css";
import styles from "../styles/confirm.module.css";
// Libraries imports
import Aos from "aos";

const { Meta } = AntCard;

const Wishlist = () => {
  React.useEffect(() => {
    Aos.init({ duration: 800 });
  });
  const dispatch: AppDispatch = useDispatch();
  const [showwishlist, setshowwishlist] = useState<boolean>(false);
  const [alreadyAdded, setalreadyAdded] = useState<boolean>(false);
  const [showdelete, setshowdelete] = useState<boolean>(false);
  const [showpopup, setshowpopup] = useState<boolean>(false);
  const { wishlist, cart } = useSelector((state: RootState) => state.allcarts);
  // console.log("wishlist", wishlist);

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
    const existingItem = cart.find((item: any) => item._id === values._id);

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
    
        .container{
            height:150px;
            width:100%;
            background-color:white;
            text-align:center;
            margin-top:0 ;
            margin-bottom:10px;
            display:flex;
            justify-content:center;
            align-items:center; 

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

      <div className="container">
        <div className="heading">
          <h1>
            {" "}
            Wishlist - {wishlist.length}{" "}
            {wishlist.length === 1 ? "item" : "items"}
          </h1>
        </div>
      </div>
      <br />
      {showwishlist && (
        <div className={styles.prompt}>
          <div className={styles.main}>
            <InfoCircleOutlined
              style={{ fontSize: "22px", fontWeight: "900", color: "green" }}
            />
            <p className={styles.message}>Wishlist is already empty !</p>
            <button
              className={styles.okButton}
              onClick={() => setshowwishlist(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
      {alreadyAdded && (
        <div className={styles.prompt}>
          <div className={styles.main}>
            <InfoCircleOutlined
              style={{ fontSize: "22px", fontWeight: "900", color: "green" }}
            />
            <p className={styles.message}>Item is already in cart!</p>
            <button
              className={styles.okButton}
              onClick={() => setalreadyAdded(false)}
            >
              OK
            </button>
          </div>
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
          <p style={{ color: "white" }}>Item has been added to Cart</p>
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
        {wishlist &&
          wishlist.map((data) => (
            <AntCard
            hoverable
              style={{ width: 300 }}
              cover={<img alt="Image not found" src={data.img[0]} loading="lazy"/>}
              actions={[
                <Stack spacing={2}>
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
                    onClick={() => wishremove(data._id)}
                  >
                    <DeleteFilled style={{ fontSize: "18px" }} />
                  </Button>
                </Stack>,
              ]}
            >
              <Meta title={data.title} description={`Rs. ${data.price}`} />
            </AntCard>
          ))}
      </Container>
      <br />
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="contained" size="small" onClick={wishdelete}>
          Delete All
        </Button>
      </Stack>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Wishlist;
