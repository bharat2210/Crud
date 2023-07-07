// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Navbar1 from "../Components/Navbar1";
// import { useSelector, useDispatch } from "react-redux";
// import Rating from "@mui/material/Rating";
// import TextField from "@mui/material";
// import { useState } from "react";
// import { Badge, Stack } from "@mui/material";
// import Description from "../Components/Description";
// import {
//   addtocart,
//   addtowishlist,
//   decreasestock,
//   searchproductdata,
// } from "../Features/productsslice";
// import Head from "next/head";
// import Aos from "aos";
// import { useRef } from "react";
// import styles from "../styles/confirm.module.css";
// import { useRouter } from "next/router";
// import { Badge as AntBadge, Image, Tooltip, Rate } from "antd";
// import { FloatButton } from "antd";
// import {
//   CheckCircleOutlined,
//   ExclamationCircleOutlined,
//   HeartOutlined,
//   InfoCircleOutlined,
// } from "@ant-design/icons";
// import { Input, Space, Select } from "antd";
// import { Modal } from "antd";

// const Products = () => {
//   const { Search } = Input;
//   const { Option } = Select;
//   const router = useRouter();
//   const items = useSelector((state: any) => state.allcarts.items);
//   const [id, setId] = useState();
//   const [visibleItems, setVisibleItems] = useState(4);
//   const [full, setfull] = useState(false);
//   const [alreadyAdded, setalreadyAdded] = useState(false);
//   const [showdescription, setshowdescription] = useState(false);
//   const [alreadywishlist, setalreadywishlist] = useState(false);
//   const [showwish, setshowwish] = useState(false);
//   const [search, setsearch] = useState(false);
//   const [showpopup, setshowpopup] = useState(false);
//   const [itemoutofstock, setitemoutofstock] = useState(false);
//   const [buy, setbuy] = useState(false);
//   const dispatch = useDispatch();
//   const {
//     cart,
//     wishlist,
//     searchdata,
//   }: { cart: any[]; wishlist: any[]; searchdata: string } = useSelector(
//     (state: any) => state.allcarts
//   );

//   const loadMoreButtonRef = React.useRef<HTMLInputElement>(null);

//   React.useEffect(() => {
//     Aos.init({ duration: 800 });
//   }, [visibleItems]);
//   React.useEffect(() => {
//     dispatch(searchproductdata(search));
//   }, [search]);

//   const handleLoadMore = () => {
//     setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
//     setTimeout(() => {
//       if (loadMoreButtonRef.current) {
//         loadMoreButtonRef.current.scrollIntoView({
//           behavior: "smooth",
//           block: "end",
//           inline: "nearest",
//         });
//       }
//     }, 100);
//   };
//   const handleaddtocart = (values: any) => {
//     const existingItem = cart.find((item: any) => item.id === values.id);

//     if (existingItem) {
//       setalreadyAdded(true);
//       return;
//     }
//     if (cart.length >= 5) {
//       setfull(true);
//       return;
//     }
//     if (values.stock > 0) {
//       dispatch(addtocart(values));
//       console.log("carts", values);
//       setshowpopup(true);
//       setTimeout(() => {
//         setshowpopup(false);
//       }, 1000);
//     } else {
//       setitemoutofstock(true);
//     }
//   };
//   const handleaddtowish = (wish: any) => {
//     const existing = wishlist.find((item: any) => item.id === wish.id);
//     if (existing) {
//       setalreadywishlist(true);
//       return;
//     }
//     dispatch(addtowishlist(wish));
//     setshowwish(true);
//     setTimeout(() => {
//       setshowwish(false);
//     }, 1000);
//   };
//   const seewishlist = () => {
//     router.push("/Wishlist");
//   };
//   const handlebuy = (data: any) => {
//     if (data.stock > 0) {
//       dispatch(decreasestock(data.id));
//     } else {
//       setbuy(true);
//     }
//   };
//   const handleOk = () => {
//     setbuy(false);
//   };
//   const handleCancel = () => {
//     setbuy(false);
//   };

//   return (
//     <>
//       <style>
//         {`
      
//       .popup {
//         position: fixed;
//         top: -100px;
//         left: -100px;
//         transform: translateX(-50%);
//         background-color: black;
//         padding: 22px;
//         border-radius: 4px;
//         box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
//         z-index: 9999;
//         padding: 8px;
//         animation: slideIn 0.3s ease-in-out forwards;
//       }
//       @keyframes slideIn {
//         0% {
//           top: 1%;
//           left: 50%;
//         }
//         100% {
//           top: 15%;
//           left: 50%;
//           transform: translateX(-50%);
//         }
//       }
      
//        p{
//         margin: 0;
//         font-size: 22px;
//         font-weight: 500;
//         color:white;
//       }
//       fa-heart.active{
//         background-color: red;
//       }
     
      
      
      
//       `}
//       </style>

//       <Head>
//         <title>Products Page</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />

//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
//         />
//       </Head>
//       {showdescription && (
//         <Description setshowdescription={setshowdescription} id={id} />
//       )}
//       <Navbar1 />
//       <br />

//       {showpopup && (
//         <div className="popup">
//           <p>Item has been added to Cart 😀 </p>
//         </div>
//       )}
//       {full && (
//         <div className={styles.prompt}>
//           <div className={styles.main}>
//             <ExclamationCircleOutlined
//               style={{ fontSize: "22px", color: "red", fontWeight: "bold" }}
//             />
//             <p className={styles.message}>5 items are already in your Cart</p>
//             <p className={styles.message}>Can't exceed more than 5 items !</p>
//             <button className={styles.okButton} onClick={() => setfull(false)}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//       {alreadyAdded && (
//         <div className={styles.prompt}>
//           <div className={styles.main}>
//             <InfoCircleOutlined
//               style={{ fontSize: "22px", color: "green", fontWeight: "bold" }}
//             />
//             <p className={styles.message}>Item is already in cart !</p>
//             <button
//               className={styles.okButton}
//               onClick={() => setalreadyAdded(false)}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//       {alreadywishlist && (
//         <div className={styles.prompt}>
//           <div className={styles.main}>
//             <p className={styles.message}>
//               Item is already in your wishlist!!!
//             </p>
//             <button
//               className={styles.okButton}
//               onClick={() => setalreadywishlist(false)}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//       {showwish && (
//         <div className="popup">
//           <p>Item has been added to Wishlist</p>
//         </div>
//       )}
//       {itemoutofstock && (
//         <div className={styles.prompt}>
//           <div className={styles.main}>
//             <ExclamationCircleOutlined
//               style={{ fontSize: "22px", color: "red", fontWeight: "900" }}
//             />
//             <p className={styles.message}>We are Sorry 😔</p>

//             <p className={styles.message}>Item is currently out of stock</p>
//             <button
//               className={styles.okButton}
//               onClick={() => setitemoutofstock(false)}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//       {buy && (
//         <Modal
//           title=""
//           open={buy}
//           onOk={handleOk}
//           onCancel={handleCancel}
//           centered={true}
//           keyboard={true}
//         >
//           <h3>Item is currently out of stock ☹️</h3>
//         </Modal>
//       )}
//       {/* <Button
//         variant="text"
//         size="large"
//         style={{ position:"fixed",right:"10px"}}
//         onClick={seewishlist}
//       >
//              <Badge
//        badgeContent={wishlist.length}
//        anchorOrigin={{
//          vertical: "top",
//          horizontal: "right",
//        }}
//        sx={{fontSize:22}}
//        >
//         <span style={{fontSize:"30px"}}>&#10084;</span>
      
//        </Badge>
//       </Button> */}

//       <Select
//         style={{
//           width: 200,
//           position: "absolute",
//           left: "144px",
//           border: "2px solid black",
//           borderRadius: "8px",
//         }}
//         onChange={(value) => setsearch(value)}
//         placeholder="Search Category..."
//       >
//         <Option value="">All</Option>
//         <Option value="Mobiles">Mobiles</Option>
//         <Option value="Watches">Watches</Option>
//         <Option value="Headphones">Headphones</Option>
//         <Option value="Accessories">Accessories</Option>
//         <Option value="Tablets">Tablets</Option>
//         <Option value="Laptops">Laptops</Option>
//         <Option value="Macs">Macs</Option>
//         <Option value="Displays">Displays</Option>
//       </Select>

//       {/* <input type="text" placeholder="" onChange={(e)=>setsearch(e.target.value)}/> */}
//       <Tooltip title="See Wishlist" color="dodgerblue" placement="left">
//         <FloatButton
//           badge={{ count: wishlist.length, color: "blue" }}
//           icon={<HeartOutlined />}
//           onClick={seewishlist}
//           style={{ float:"right", right: "25px", top: "111px" }}
//         />
//       </Tooltip>
//       <br />
//       <br />
//       <Container
//         maxWidth="xl"
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           flexWrap: "wrap",
//           gap: "10px",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {items &&
//           items
//             .filter((item: any) => {
//               if (typeof searchdata !== "string" || searchdata.length === 0) {
//                 return item;
//               } else {
//                 return item.category
//                   .toLowerCase()
//                   .includes(searchdata.toLowerCase());
//               }
//             })
//             .slice(0, visibleItems)
//             .map((item: any) => (
//               <Card
//                 sx={{ height: 568, width: 320 }}
//                 key={item.id}
//                 data-aos="fade-up"
//                 className="card"
//               >
//                 <CardMedia
//                   sx={{ height: 300, width: 320 }}
//                   image={item.img}
//                   title={item.title}
//                 />

//                 <CardContent>
//                   {item.ribbon && (
//                     <AntBadge.Ribbon text="New" color="purple">
//                       <div>
//                         <Typography gutterBottom variant="h6" component="div">
//                           {item.title.length > 30
//                             ? `${item.title.slice(0, 20)}...`
//                             : item.title}
//                         </Typography>

//                         <Typography variant="body2" color="text.secondary">
//                           {item.description.length > 50
//                             ? `${item.description.slice(0, 50)}...`
//                             : item.description}
//                         </Typography>

//                         <Typography variant="h6" color="text.secondary">
//                           ₹ {item.price}
//                         </Typography>

//                         <Rate disabled defaultValue={item.rating} />
//                         <Typography
//                           variant="body2"
//                           component="div"
//                           sx={{
//                             color: item.stock > 0 ? "green" : "red",
//                           }}
//                         >
//                           {item.stock > 0 ? (
//                             item.stock === 1 ? (
//                               <span style={{ color: "red" }}>
//                                 Only 1 left in Stock
//                               </span>
//                             ) : (
//                               "In stock"
//                             )
//                           ) : (
//                             "Currently unavailable"
//                           )}
//                         </Typography>
//                       </div>
//                     </AntBadge.Ribbon>
//                   )}
//                   {!item.ribbon && (
//                     <div>
//                       <Typography gutterBottom variant="h6" component="div">
//                         {item.title.length > 30
//                           ? `${item.title.slice(0, 20)}...`
//                           : item.title}
//                       </Typography>

//                       <Typography variant="body2" color="text.secondary">
//                         {item.description.length > 50
//                           ? `${item.description.slice(0, 50)}...`
//                           : item.description}
//                       </Typography>

//                       <Typography variant="h6" color="text.secondary">
//                         ₹ {item.price}
//                       </Typography>

//                       <Rate disabled defaultValue={item.rating} />
//                       <Typography
//                         variant="body2"
//                         component="div"
//                         sx={{
//                           color: item.stock > 0 ? "green" : "red",
//                         }}
//                       >
//                         {item.stock > 0 ? (
//                           item.stock === 1 ? (
//                             <span style={{ color: "red" }}>
//                               Only 1 left in Stock
//                             </span>
//                           ) : (
//                             "In stock"
//                           )
//                         ) : (
//                           "Currently unavailable"
//                         )}
//                       </Typography>
//                     </div>
//                   )}
//                 </CardContent>
//                 <CardActions>
//                   <Stack spacing={2} direction="row">
//                     <Button
//                       size="small"
//                       variant="contained"
//                       onClick={() => handlebuy(item)}
//                     >
//                       Buy
//                     </Button>

//                     <Tooltip
//                       title="Add to Wishlist"
//                       color="green"
//                       placement="top"
//                     >
//                       <Button
//                         size="small"
//                         variant="outlined"
//                         onClick={() => handleaddtowish(item)}
//                       >
//                         &#10084;
//                       </Button>
//                     </Tooltip>
//                     <Button
//                       size="small"
//                       variant="outlined"
//                       onClick={() => {
//                         setshowdescription(true);
//                         setId(item.id);
//                       }}
//                     >
//                       Details
//                     </Button>
//                   </Stack>
//                 </CardActions>
//                 <Stack spacing={2} direction="column">
//                   <Button
//                     size="small"
//                     onClick={() => handleaddtocart(item)}
//                     variant="contained"
//                   >
//                     Add to Cart
//                   </Button>
//                 </Stack>
//               </Card>
//             ))}
//       </Container>
//       <br />

//       <div ref={loadMoreButtonRef}></div>
//       {visibleItems < items.length && (
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <Button variant="contained" onClick={handleLoadMore}>
//             Load More Items
//           </Button>
//         </div>
//       )}
//       <Tooltip title="Go to Top" color="black" placement="top">
//         <FloatButton.BackTop type="primary" />
//       </Tooltip>
//     </>
//   );
// };
// export default Products;
