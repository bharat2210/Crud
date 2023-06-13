import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar1 from "../Components/Navbar1";
import { useSelector,useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import prompt from "../styles/prompt.module.css";
import { Stack } from "@mui/material";
import Description from "../Components/Description";
import { addtocart } from "../Features/productsslice";

const Products = () => {
  const items = useSelector((state) => state.allcarts.items);

  const [showdescription, setshowdescription] = useState("false");
  const [id, setId] = useState();
  const dispatch=useDispatch();
  return (
    <>
      {showdescription && (
        <Description setshowdescription={setshowdescription} id={id} />
      )}
      <Navbar1 />
      <br />
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
        {items.map((item) => (
          <Card sx={{ height: 540, width: 310 }} key={item.id}>
            <CardMedia
              sx={{ height: 300, width: 300 }}
              image={item.img}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                ₹ {item.price}
              </Typography>
              <Rating name="read-only" value={item.rating} readOnly />
            </CardContent>
            <CardActions>
              <Stack spacing={2} direction="row">
                <Button size="small" variant="contained">
                  Buy
                </Button>
                <Button size="small" onClick={()=>dispatch(addtocart(item))}>Add to Cart</Button>
                <Button
                  size="small"
                  onClick={() => {
                    setshowdescription(true);
                    setId(item.id);
                  }}
                >
                  Details
                </Button>
              </Stack>
            </CardActions>
          </Card>
        ))}
      </Container>
    </>
  );
};
export default Products;
