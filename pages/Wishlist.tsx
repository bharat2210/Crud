import React from "react";
import Navbar1 from "../Components/Navbar1";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Stack } from "@mui/material";
import Aos from "aos";
import { useSelector, useDispatch } from "react-redux";
import { deletewishcart, removewishcart } from "../Features/productsslice";

const Wishlist = () => {
  React.useEffect(() => {
    Aos.init({ duration: 800 });
  });
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state: any) => state.allcarts);
  console.log("wishlist", wishlist);

  const wishremove = (id: number) => {
    dispatch(removewishcart(id));
  };

  const wishdelete = () => {
    dispatch(deletewishcart());
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
        {wishlist.map((data: any) => (
          <Card
            sx={{ height: 370, width: 420 }}
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
                Iphone SE {data.storage}
              </Typography>
              <hr/>
            </CardContent>
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button variant="contained" size="small">
                Buy
              </Button>
              <Button variant="contained" size="small">
                {" "}
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
          Delete Wishlist
        </Button>
      </Stack>
    </>
  );
};

export default Wishlist;
