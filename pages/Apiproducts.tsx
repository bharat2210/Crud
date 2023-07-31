// Next imports
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// Redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  addtocart,
  addtowishlist,
  getproducts,
  searchproductdata,
  updatestock,
} from "../Features/productsslice";
import { AppDispatch, RootState } from "../store";
// Components imports
import Navbar1 from "../Components/Navbar1";
import Loader from "../Components/Loader";
// Mui imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { Autocomplete, Stack, TextField } from "@mui/material";
// Antd imports
import { Badge as AntBadge, Tooltip, Rate, Drawer } from "antd";
import { FloatButton } from "antd";
import { notification } from "antd";
import {
  ExclamationCircleOutlined,
  HeartOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
// Styles imports
import styles from "../styles/confirm.module.css";
import Footer from "../Components/Footer";



const Apiproducts = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const [search, setsearch] = useState<string>("");
  const [visibleItems, setVisibleItems] = useState<number>(4);
  const [id, setid] = useState<number>();
  const [imageindex, setimageindex] = useState<number>(0);
  const [alreadyAdded, setalreadyAdded] = useState<boolean>(false);
  const [full, setfull] = useState<boolean>(false);
  const [itemoutofstock, setitemoutofstock] = useState<boolean>(false);
  const [alreadywishlist, setalreadywishlist] = useState<boolean>(false);
  const [open, setopen] = useState<boolean>(false);
  const[preDefinedCategory, setpreDefinedCategory] = useState("")
  
  const apiproducts = useSelector(
    (state: RootState) => state.allcarts.apiproducts
  );
  const singleitem = apiproducts.filter((data: any) => {
    data._id === id;
    return data._id === id;
  })[0];
  console.log("singleitem", singleitem);

  const { cart, wishlist, searchdata, isloading } = useSelector(
    (state: RootState) => state.allcarts
  );
  const loadMoreButtonRef = React.useRef<HTMLInputElement>(null);
  const images = singleitem?.img || [];
  // console.log("api", apiproducts);

  useEffect(() => {
    dispatch(getproducts());
  }, []);

  useEffect(() => {
    dispatch(searchproductdata(search));
  }, [search]);

  useEffect(() => {
    const valueCat = JSON.parse(localStorage.getItem("Category"));
    if (valueCat && valueCat.length > 0) {
      setpreDefinedCategory(valueCat);
      console.log("valueCat", valueCat);
    }
  }, []); 

  const handleaddtocart = (values: any) => {
    const existingitem = cart.find((item: any) => item._id === values._id);
    if (existingitem) {
      setalreadyAdded(true);
      return;
    }
    if (cart.length > 5) {
      setfull(true);
      return;
    }
    if (values.stock > 0) {
      dispatch(addtocart(values))
        notification.success({
          message: "Item Added",
          description: "Item successfully added to cart",
          placement: "topLeft",
          style: {
            top: "78px",
          },
        });
    
    } else {
      setitemoutofstock(true);
    }
  };
 

  const handleaddtowish = (wish: any) => {
    const existing = wishlist.find((item: any) => item._id === wish._id);
    if (existing) {
      setalreadywishlist(true);
      return;
    }
    dispatch(addtowishlist(wish))
    notification.success({
      message: "Item Added",
      description: "Item added successfully to wish list",
      placement: "topLeft",
      style: {
        top: "78px",
      },
    });
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
    setTimeout(() => {
      if (loadMoreButtonRef.current) {
        loadMoreButtonRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }, 100);
  };

  const drawerclose = () => {
    setopen(false);
  };

  const nextimage = () => {
    setimageindex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= singleitem?.img.length ? 0 : newIndex;
    });
  };
  const previmage = () => {
    setimageindex((prevIndex) => {
      const newindex = prevIndex - 1;
      return newindex < 0 ? images.length - 1 : newindex;
    });
  };
  const handlestock = (pid: any) => {
    console.log("pid: " + pid);
    const singleproduct = apiproducts.filter((data: any) => {
      data._id === pid;
      return data._id === pid;
    })[0];
    console.log("single product: ", singleproduct);
    if (singleproduct.stock > 0) {
      dispatch(updatestock(pid)).then(()=>{
        dispatch(getproducts());
      })
    } else {
      notification.warning({
        message: "Stock nill",
        description: "This item is currently out of stock",
        placement: "topLeft",
        style:{
          top:"78px"

        }
      });
    }
  };
  if (isloading) {
    return <Loader />;
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <style>
        {`
        
        .popup {
            position: fixed;
            top: -100px;
            left: -100px;
            transform: translateX(-50%);
            background-color: black;
            padding: 22px;
            border-radius: 4px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            z-index: 9999;
            padding: 8px;
            animation: slideIn 0.3s ease-in-out forwards;
          }
          @keyframes slideIn {
            0% {
              top: 1%;
              left: 50%;
            }
            100% {
              top: 15%;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          
           p{
            margin: 0;
            font-size: 22px;
            font-weight: 500;
            color:white;
          }
          fa-heart.active{
            background-color: red;
          
          }

          .main{
            display:flex;
            flex-direction: row;
            gap:130px;
           
          
        
            
          }
          .details{
            text-align: left;
          }
         
          .details p{
            font-size:16px;
            color:rgb(54,53,53);
            width:450px;
           
          }
          details h3{
            color:
          }
          .innerdiv{
            height:7px;
            width:12px;
            background-color:red;
       

          }
       
          .outerdiv{
            height:7px;
          
            background-color:black;

          }
         
        
        `}
      </style>

      {alreadyAdded && (
        <div className={styles.prompt}>
          <div className={styles.main}>
            <InfoCircleOutlined
              style={{ fontSize: "22px", color: "green", fontWeight: "bold" }}
            />
            <p className={styles.message}>Item is already in cart !</p>
            <button
              className={styles.okButton}
              onClick={() => setalreadyAdded(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {full && (
        <div className={styles.prompt}>
          <div className={styles.main}>
            <ExclamationCircleOutlined
              style={{ fontSize: "22px", color: "red", fontWeight: "bold" }}
            />
            <p className={styles.message}>6 items are already in your Cart</p>
            <p className={styles.message}>Can't exceed more than 6 items !</p>
            <button className={styles.okButton} onClick={() => setfull(false)}>
              OK
            </button>
          </div>
        </div>
      )}

      {itemoutofstock && (
        <div className={styles.prompt}>
          <div className={styles.main}>
            <ExclamationCircleOutlined
              style={{ fontSize: "22px", color: "red", fontWeight: "900" }}
            />
            <p className={styles.message}>We are Sorry 😔</p>

            <p className={styles.message}>Item is currently out of stock</p>
            <button
              className={styles.okButton}
              onClick={() => setitemoutofstock(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {alreadywishlist && (
        <div className={styles.prompt}>
          <div className={styles.main}>
            <p className={styles.message}>
              Item is already in your wishlist!!!
            </p>
            <button
              className={styles.okButton}
              onClick={() => setalreadywishlist(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}


      <br />
      <br />

      {/* <Select
        style={{
          width: 200,
          position: "absolute",
          left: "144px",
          border: "2px solid black",
          borderRadius: "8px",
        }}
        onChange={(value) => setsearch(value)}
        placeholder="Select Category..."
      >
     
        <Option value="">All</Option>
      
        <Option value="Mobiles">Mobiles</Option>
        <Option value="Watches">Watches</Option>
        <Option value="Headphones">Headphones</Option>
        <Option value="Accessories">Accessories</Option>
        <Option value="Tablets">Tablets</Option>
        <Option value="Laptops">Laptops</Option>
        <Option value="Macs">Macs</Option>
        <Option value="Displays">Displays</Option>
      </Select> <br /><br /> */} 
   
      <Autocomplete
        style={{
          position: "absolute",
          left: "144px",
          border: "2px solid black",
          borderRadius: "8px",
        }}
        size="small"
        disablePortal
        id="combo-box-demo"
       

   
        options={
          apiproducts &&
          Array.from(new Set(apiproducts.map((data) => data.category)))
        }
        sx={{ width: 250 }}
        renderInput={(params) => (
          <TextField {...params} placeholder="Search By Category" />
        )}
        onChange={(event, value: any) => {
          setsearch(value);
        }}
      />
     

      <br />
      <br />
      <br />

      <Tooltip title="See Wishlist" color="dodgerblue" placement="left">
        <FloatButton
          badge={{ count: wishlist.length, color: "blue" }}
          icon={<HeartOutlined />}
          onClick={() => router.push("/Wishlist")}
          style={{ float: "right", top: "111px" }}
        />
      </Tooltip>

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
        {apiproducts &&
          apiproducts
            .filter((item: any) => {
              if (typeof searchdata !== "string" || searchdata.length === 0) {
                return item;
              } else {
                return item.category
                  .toLowerCase()
                  .includes(searchdata.toLowerCase());
              }
            })

            .slice(0, visibleItems)
            .map((product: any) => (
              <Card
                sx={{ height: 542, width: 320 }}
                key={product._id}
                data-aos="fade-up"
                className="card"
              >
                <CardMedia
                  sx={{ height: 300, width: 320 }}
                  image={product.img[0]}
                  title={product.img[0] ? product.title : "Image not available"}
                />

                <CardContent>
                  {product.ribbon && (
                    <AntBadge.Ribbon text="New" color="orange">
                      <div>
                        <Typography variant="h6" component="div">
                          {product.title.length > 30
                            ? `${product.title.slice(0, 20)}...`
                            : product.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                          {product.description.length > 50
                            ? `${product.description.slice(0, 30)}...`
                            : product.description}
                        </Typography>

                        <Typography variant="h6" color="text.secondary">
                          ₹ {product.price}
                        </Typography>

                        <Rate
                          allowHalf
                          disabled
                          defaultValue={product.rating}
                          style={{color:"rgb(255,164,28)"}}
                        />
                        <Typography
                          variant="body2"
                          component="div"
                          sx={{
                            color: product.stock > 0 ? "green" : "red",
                          }}
                        >
                          {product.stock > 0 ? (
                            product.stock === 1 ? (
                              <span style={{ color: "red" }}>
                                Only 1 left in Stock
                              </span>
                            ) : (
                              "In stock"
                            )
                          ) : (
                            "Currently unavailable"
                          )}
                        </Typography>
                      </div>
                    </AntBadge.Ribbon>
                  )}
                  {!product.ribbon && (
                    <div>
                      <Typography variant="h6" component="div">
                        {product.title.length > 30
                          ? `${product.title.slice(0, 20)}...`
                          : product.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {product.description.length > 50
                          ? `${product.description.slice(0, 30)}...`
                          : product.description}
                      </Typography>

                      <Typography variant="h6" color="text.secondary">
                        ₹ {product.price}
                      </Typography>

                      <Rate disabled defaultValue={product.rating} style={{color:"rgb(255,164,28)"}} />
                      <Typography
                        variant="body2"
                        component="div"
                        sx={{
                          color: product.stock > 0 ? "green" : "red",
                        }}
                      >
                        {product.stock > 0 ? (
                          product.stock === 1 ? (
                            <span style={{ color: "red" }}>
                              Only 1 left in Stock
                            </span>
                          ) : (
                            "In stock"
                          )
                        ) : (
                          "Currently unavailable"
                        )}
                      </Typography>
                    </div>
                  )}
                </CardContent>
                <CardActions>
                  <Stack spacing={2} direction="row">
                    <Button
                      size="small"
                      variant="contained"
                      // sx={{
                      //   backgroundColor:"rgb(255,164,28)",color:"black",borderRadius:"18px",width:"100%"
                      // }}
                      onClick={() => handlestock(product._id)}
                    >
                      Buy Now
                    </Button>

                    <Tooltip
                      title="Add to Wishlist"
                 
                      placement="top"
                    >
                      <Button
                        size="small"
                        variant="text"
                        onClick={() => handleaddtowish(product)}
                        sx={{
                          color:"red",
                          fontSize:"15px"
                        }}
                      >
                        &#10084;
                      </Button>
                    </Tooltip>
                    <Button
                      size="small"
                      variant="text"
                      
                      onClick={() => {
                        setid(product._id);
                        // setshowdetails(true);
                        setopen(true);
                      }}
                    >
                      Details
                    </Button>
                  </Stack>
                </CardActions>
                <Stack spacing={2} direction="column">
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor:"rgb(35,47,62)",color:"white"
                    
                    }}
                 
                    onClick={() => handleaddtocart(product)}
                  >
                    Add to Cart
                  </Button>
                </Stack>
              </Card>
            ))}
      </Container>
      <br />
      <div ref={loadMoreButtonRef}></div>
      {visibleItems <= apiproducts.length && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={handleLoadMore} >
            Load More Items
          </Button>
        </div>
      )}
      <Tooltip title="Go to Top" color="black" placement="top">
        <FloatButton.BackTop type="primary" />
      </Tooltip>
      <Drawer open={open} onClose={drawerclose} placement="bottom" height={600}>
        <div className="main">
          <div className="image" style={{position:"relative"}}>
            <ArrowBackIosTwoToneIcon
              style={{
                position: "absolute",
                top: "205px",
             
                fontSize: "30px",
                backgroundColor: "graytext",
                color: "white",
                borderRadius: "100%",
                padding: "6px",
                zIndex: 9999,
              }}
              onClick={previmage}
            />{" "}
            <img
              src={singleitem?.img[imageindex]}
              alt=""
              height={430}
              width={650}
              style={{ borderRadius: 12 }}
            />
            <ArrowForwardIosIcon
              onClick={nextimage}
              style={{
                position: "absolute",
                top: "205px",
                left: "610px",
                fontSize: "30px",
                backgroundColor: "graytext",
                color: "white",
                borderRadius: "100%",
                padding: "6px",
                zIndex: 9999,
              }}
            />
            <h1 style={{ color: "black" }}>{singleitem?.title}</h1>
          </div>
          <div className="details">
            <h3>Highlights:</h3>
            <p style={{ color: "GrayText" }}>{singleitem?.description}</p>
            <h3>Features:</h3>
            <p style={{ color: "GrayText" }}>{singleitem?.full}</p>
            <h3>Rating:</h3>
            <p>
              <Rate allowHalf disabled defaultValue={singleitem?.rating} />
            </p>
            <br />
            <Button variant="contained" onClick={() => setopen(false)}>
              Close
            </Button>
          </div>
        </div>
      </Drawer><br /><br />
 
     
   
   
    </>
  );
};
export default Apiproducts;
