import React from 'react'
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, addtowishlist, getproducts, searchproductdata } from "../Features/productsslice";
import { AppDispatch, RootState } from "../store";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Badge as AntBadge, Image, Tooltip, Rate, AutoComplete } from "antd";
import { FloatButton } from "antd";
import styles from '../styles/confirm.module.css'
import { Spin } from "antd";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Autocomplete, Stack, TextField } from "@mui/material";
import Navbar1 from "../Components/Navbar1";
import Details from "../Componentsapi/Details";
import { Input, Space, Select } from "antd";
import { useRouter } from 'next/router';



const Apiproducts = () => {
 
  const { Option } = Select;
  const router =useRouter()
  const dispatch: AppDispatch = useDispatch();
  const[id,setid]=useState();
  const[showdetails,setshowdetails]=useState(false);
  const [alreadyAdded, setalreadyAdded] = useState(false);
  const [full, setfull] = useState(false);
  const [itemoutofstock, setitemoutofstock] = useState(false);
  const[showpopup,setshowpopup] = useState(false);
  const[search,setsearch] = useState();
  const[showwish,setshowwish]=useState(false);
  const [alreadywishlist, setalreadywishlist] = useState(false);
  const [visibleItems, setVisibleItems] = useState(4);
  const [loading, setLoading] = useState(false);
 
  const apiproducts = useSelector(
    (state:RootState) => state.allcarts.apiproducts
  );
  
  const{cart,wishlist,searchdata}=useSelector((state:any)=>state.allcarts);
  const loadMoreButtonRef = React.useRef<HTMLInputElement>(null);

  // console.log("api", apiproducts);







  useEffect(() => {
    dispatch(getproducts());
  }, []);



  useEffect(() => {
    if (search) {
      setLoading(true);
      const timer = setTimeout(() => {
        dispatch(searchproductdata(search));
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [search, dispatch]);




  const handleaddtocart=(values:any)=>{
    const existingitem= cart.find((item:any)=> item.id=== values.id)
    if(existingitem){
        setalreadyAdded(true);
        return;

    }
    if(cart.length>5){
       setfull(true);
       return;
    }
    if(values.stock >0){
        dispatch(addtocart(values))
        setshowpopup(true);
        setTimeout(() => {
            setshowpopup(false)
            
        }, 1000);

    }
    else{
        setitemoutofstock(true)
    }
  
  }


  

  const handleaddtowish = (wish: any) => {
    const existing = wishlist.find((item: any) => item.id === wish.id);
    if (existing) {
      setalreadywishlist(true);
      return;
    }
    dispatch(addtowishlist(wish));
    setshowwish(true);
    setTimeout(() => {
      setshowwish(false);
    }, 1000);
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

  return (
    <>
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
         
        
        `}
    </style>
       {showdetails && (
      <Details setshowdetails={setshowdetails} id={id}/>
      )}

      
{showpopup && (
        <div className="popup">
          <p>Item has been added to Cart 😀 </p>
        </div>
      )}


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
            <p className={styles.message}>5 items are already in your Cart</p>
            <p className={styles.message}>Can't exceed more than 5 items !</p>
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
       {showwish && (
        <div className="popup">
          <p>Item has been added to Wishlist</p>
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

 
      <Navbar1 />
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
        size='small'
      disablePortal
      id="combo-box-demo"
      options={apiproducts && Array.from(new Set(apiproducts.map((data) => data.category)))}
      sx={{ width: 250}}
      renderInput={(params) => <TextField {...params}  placeholder='Search By Category'/>}
      onChange={(event,value:any) => {setsearch(value)}}
    />
     {loading && (
        <Spin
          style={{
            position: "absolute",
            left: "310px",
            top:"144px"
         
          }}
          tip="Loading"
        
        />
     
      )}
       
         <br /><br /><br />

      


     
      <Tooltip title="See Wishlist" color="dodgerblue" placement="left">
        <FloatButton
          badge={{ count: wishlist.length, color: "blue" }}
          icon={<HeartOutlined />}
          onClick={()=>router.push("/Wishlist")}
         
          style={{ float:"right",top: "111px" }}
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
        
        .slice(0,visibleItems).map((product:any) => (
          <Card
            sx={{ height: 568, width: 320 }}
            key={product.id}
            data-aos="fade-up"
            className="card"
          >
            <CardMedia
              sx={{ height: 300, width: 320 }}
              image={product.img}
              title={product.title}
            />

            <CardContent>
              {product.ribbon && (
                <AntBadge.Ribbon text="New" color='Green'>
                  <div>
                  <Typography  variant="h6" component="div">
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

              <Rate disabled defaultValue={product.rating} />
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: product.stock > 0 ? "green" : "red",
                }}
              >
                {product.stock > 0 ? (
                  product.stock === 1 ? (
                    <span style={{ color: "red" }}>Only 1 left in Stock</span>
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
                   <Typography  variant="h6" component="div">
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

              <Rate disabled defaultValue={product.rating} />
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: product.stock > 0 ? "green" : "red",
                }}
              >
                {product.stock > 0 ? (
                  product.stock === 1 ? (
                    <span style={{ color: "red" }}>Only 1 left in Stock</span>
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
                <Button size="small" variant="contained" onClick={()=>handlebuy(product)}>
                  Buy
                </Button>

                <Tooltip title="Add to Wishlist" color="green" placement="top">
                  <Button size="small" variant="outlined" onClick={()=>handleaddtowish(product)}>
                    &#10084;
                  </Button>
                </Tooltip>
                <Button size="small" variant="outlined" onClick={()=>{setid(product.id); setshowdetails(true)}}>
                  Details
                </Button>
              </Stack>
            </CardActions>
            <Stack spacing={2} direction="column">
              <Button size="small" variant="contained" onClick={()=>handleaddtocart(product)}>
                Add to Cart
              </Button>
            </Stack>
          </Card>
        ))}
      </Container><br />
      <div ref={loadMoreButtonRef}></div>
      {visibleItems < apiproducts.length && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={handleLoadMore}>
            Load More Items
          </Button>
        </div>
      )}
        <Tooltip title="Go to Top" color="black" placement="top">
        <FloatButton.BackTop type="primary" />
      </Tooltip>
    </>
  );
};
export default Apiproducts;
