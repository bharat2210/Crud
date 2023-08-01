// React imports
import Head from "next/head";
import { useEffect, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

// Components imports
import Loader from "../Components/Loader";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  deleteallitems,
  deleteitem,
  getproducts,
  searchproductdata,
  updateitem,
} from "../Features/productsslice";
import { AppDispatch, RootState } from "../store";
import { addproducts } from "../Features/productsslice";
import {
  deletemessage,
  formatmessages,
  getmessages,
} from "../Features/message";
import {
  addImages,
  deleteImage,
  getImages,
  updateImageapi,
} from "../Features/imageCarousel";
import { showuser } from "../Features/userdetail";
import { readuser } from "../Features/register";
// Styles imports
import edit from "../styles/edit.module.css";

// Ant Design Imports
import {
  Col,
  Row,
  Drawer,
  Modal,
  Space,
  Select,
  Image,
  Tooltip,
  Popconfirm,
} from "antd";
import { Button as AntButton } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  FileDoneOutlined,
  InfoCircleOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Card, Statistic, notification } from "antd";
import { Badge } from "antd";
import { Descriptions } from "antd";
import { FloatButton } from "antd";

// Num-words imports
import numWords from "num-words";

// Mui Imports
import { Container } from "@mui/material";
import { Autocomplete, TextField } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Button from "@mui/material/Button";
import {
  addCategoryAction,
  deleteCategoryAction,
  getCategoryAction,
  updateCategoryAction,
} from "../Features/Category";

interface ProductData {
  title: string;
  price: number;
  stock: number;
  storage: string | number;
  img: string[]; // Array of image URLs
}

const { Meta } = Card;
const Admin = () => {
  const dispatch: AppDispatch = useDispatch();
  const [id, setid] = useState<Number>();
  const [messageid, setmessageid] = useState<number>();
  const [updatedata, setupdatedata] = useState<ProductData>({
    title: "",
    price: 0,
    stock: 0,
    storage: "" || 0,
    img: [],
  });
  const [updateImage, setupdateImage] = useState({ imgPath: "", title: "" });
  const [username, setusername] = useState<string>();
  const [visibleItems, setVisibleItems] = useState<number>(4);
  const [open, setOpen] = useState<boolean>(false);
  const [deleteproduct, setdeleteproduct] = useState<boolean>(false);
  const [search, setsearch] = useState();
  const [editImage, seteditImage] = useState<boolean>(false);
  const [ImageId, setImageId] = useState<number>();
  const loadMoreButtonRef = React.useRef<HTMLInputElement>(null);
  const [updateopen, setupdateopen] = useState<boolean>(false);
  const [stat, setstat] = useState<boolean>(false);
  const [showbutton, setshowbutton] = useState<boolean>(false);
  const [imageurls, setimageurls] = useState<string[]>([]);
  const [querybox, setquerybox] = useState<boolean>(false);
  const [imageadddrawer, setimageadddrawer] = useState(false);
  const [ImageupdateDrawer, setImageupdateDrawer] = useState<boolean>(false);
  const [ImageUpdateId, setImageupdateId] = useState<number>();
  const [imgPath, setimgPath] = useState<string>("");
  const [title, settitle] = useState<string>("");
  const [openCategoryDrawer, setopenCategoryDrawer] = useState<boolean>(false);
  const [addCategoryDrawer, setaddCategoryDrawer] = useState<boolean>(false);
  const [categoryImgpath, setcategoryImgpath] = useState<string>("");
  const [categoryTitle, setcategoryTitle] = useState<string>("");
  const [categoryDescription, setcategoryDescription] = useState<string>("");
  const [categoryId, setcategoryId] = useState<number>();
  const [updateCategoryDrawer, setupdateCategoryDrawer] =
    useState<boolean>(false);
  const [updatedCategory, setupdatedCategory] = useState({
    imgPath: "",
    title: "",
    description: "",
  });
  const allproducts = useSelector(
    (state: RootState) => state.allcarts.apiproducts
  );
  console.log("allproducts", allproducts);
  const { isloading, searchdata, cart } = useSelector(
    (state: RootState) => state.allcarts
  );
  // console.log("update id", id);
  const singleproduct = allproducts?.filter((data: any) => data._id === id)[0];
  console.log("singleproduct", singleproduct);
  const { Option } = Select;

  const apiproducts = useSelector(
    (state: RootState) => state.allcarts.apiproducts
  );

  const messages = useSelector(
    (state: RootState) => state.allmessages.Messages
  );
  const lengthofquery = messages.length;
  console.log("messages", messages);
  // STATISTICS

  const { rusers } = useSelector((state: RootState) => state.grand);
  const { users } = useSelector((state: RootState) => state.app);
  let totalprice = 0;
  apiproducts.forEach((item) => {
    totalprice += item.price;
  });
  let word = numWords(totalprice).toUpperCase();

  let totalstock = 0;
  apiproducts.forEach((item) => {
    totalstock += item.stock;
  });
  // console.log("Total stock: " + typeof(totalstock) + totalstock);

  // STAT END

  const { categories } = useSelector((state: RootState) => state.allcategories);
  const singleCategory= categories.filter((data)=>data._id === categoryId)[0];

useEffect(()=>{
  setupdatedCategory(singleCategory)
},[singleCategory]);

  useEffect(() => {
    dispatch(getproducts());
    dispatch(getmessages());
    dispatch(showuser());
    dispatch(readuser());
    dispatch(getImages());
    dispatch(getCategoryAction());
  }, []);

  const { images } = useSelector((state: RootState) => state.allimages);
  const singleimage = images.filter((data) => data._id === ImageUpdateId)[0];
  console.log("Single image: ", singleimage);

  useEffect(() => {
    setupdateImage(singleimage);
  }, [singleimage]);
  console.log("upadate image: ", updateImage);

  // useEffect(() => {
  //   const cart = localStorage.getItem("cart");
  //   if (cart) {
  //     setCartData(JSON.parse(cart));
  //     setshowbutton(true);
  //   }
  // }, []);

  // let cartdata = null;
  // if (typeof window !== 'undefined') {
  //   cartdata = JSON.parse(localStorage.getItem('cart') || null);
  // }
  //  console.log("Cart data",cartdata);

  useEffect(() => {
    dispatch(searchproductdata(search));
  }, [search]);
  useEffect(() => {
    setupdatedata(singleproduct);
  }, [singleproduct]);
  console.log("updatedata", updatedata);

  // Admin actions
  const handledelete = (userId: number, username: string) => {
    setid(userId);
    setdeleteproduct(true);
    setusername(username);
    console.log("userId", userId);
  };
  const confirmdelete = () => {
    dispatch(deleteitem(id)).then(() => {
      dispatch(getproducts());

      notification.warning({
        message: "Product deletion",
        description: `${username} deleted successfully`,
        placement: "topLeft",

        style: {
          top: "78px",
        },
      });
      setdeleteproduct(false);
    });
  };

  const handleCancel = () => {
    setdeleteproduct(false);
  };
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
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

  // New

  const onClose = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  // const onFinish = (values: any) => {
  //   dispatch(addproducts(values));
  //
  //   setOpen(false);
  //   setshownavbar(true);
  //
  //   console.log("values", values);
  // };
  const handlesubmit = (e: any) => {
    e.preventDefault();

    // Retrieve form input values using e.target.elements
    const formData = {
      title: e.target.elements.title.value,
      price: Number(e.target.elements.price.value), // Convert to number
      img: imageurls,
      quantity: Number(e.target.elements.quantity.value), // Convert to number
      description: e.target.elements.description.value,
      rating: Number(e.target.elements.rating.value), // Convert to number
      size: e.target.elements.size.value,
      full: e.target.elements.full.value,
      color: e.target.elements.color.value,
      storage: e.target.elements.storage.value,
      ribbon: e.target.elements.ribbon.value,
      stock: Number(e.target.elements.stock.value), // Convert to number
      category: e.target.elements.category.value,
    };

    // Call the addproducts action or perform API request
    dispatch(addproducts(formData)).then(() => {
      onClose();
      notification.success({
        message: "Success",
        description: "Item added successfully",
        placement: "topLeft",
        style: {
          top: "78px",
        },
      });
    });
  };

  const updateclose = () => {
    setupdateopen(false);
  };
  const handleupdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateitem({ id: singleproduct._id, ...updatedata })).then(() => {
      toast.success("Item updated successfully", {
        position: "top-right",
        style: {
          top: "78px",
        },
      });
    });
    setupdateopen(false);
  };
  const openstat = () => {
    setstat(true);
  };
  const closestat = () => {
    setstat(false);
  };
  const handlecancelorders = () => {
    // localStorage.removeItem("cart"); // Remove cart data from localStorage
    // setCartData([]); // Update the state to reflect the empty cart
    dispatch(deleteallitems());
    setshowbutton(false);
  };

  const handleformatqueries = () => {
    dispatch(formatmessages()).then(() => {
      dispatch(getmessages());
    });
  };
  const handledeleteQuery = () => {
    // console.log("handleDelete",messageid)
    dispatch(deletemessage(messageid)).then(() => {
      toast.success("Query Deleted Successfully", {
        position: "top-right",
        style: {
          top: "78px",
        },
      });
      dispatch(getmessages());
    });
    // console.log("messageid",messageid)
  };

  const handleimagedelete = (imgId: number) => {
    setImageId(imgId);
  };
  const handleimagedeleteconfirm = () => {
    dispatch(deleteImage(ImageId)).then(() => {
      dispatch(getImages());
      toast.success("Image Deleted Successfully", {
        position: "top-left",
        style: {
          top: "78px",
        },
      });
    });
  };

  const handleimage = () => {
    seteditImage(false);
    setimageadddrawer(true);
  };

  const handleimageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("setimgUrl", imgPath);
    console.log("setimgTitle", title);
    dispatch(addImages({ imgPath, title })).then(() => {
      dispatch(getImages());
      setimageadddrawer(false);
      seteditImage(true);
    });
  };

  const hanldeImageUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateImageapi({ id: singleimage._id, ...updateImage })).then(
      () => {
        dispatch(getImages());
        setImageupdateDrawer(false);
        seteditImage(true);
        //  toast.success("Image Title updated successfully",{
        //   position:"top-right",
        //   style:{
        //     top:"78px"
        //   }
        //  })
      }
    );
  };

  const handleCategorysubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addCategoryAction({
        imgPath: categoryImgpath,
        title: categoryTitle,
        description: categoryDescription,
      })
    ).then(() => {
      dispatch(getCategoryAction());
      setaddCategoryDrawer(false);
      setopenCategoryDrawer(true);
    });
  };

  const handleconfirmCategoryDelete = () => {
    dispatch(deleteCategoryAction(categoryId)).then(() => {
      dispatch(getCategoryAction());
    });
  };

  const handleUpdateCategory=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    dispatch(updateCategoryAction({id:singleCategory._id,...updatedCategory})).then(()=>{
      dispatch(getCategoryAction());
      setupdateCategoryDrawer(false)
      setopenCategoryDrawer(true)
    })
  }

  const currenttime = new Date();
  const currentHour = currenttime.getHours();
  // console.log(currenttime);
  // console.log(currentHour);
  let greetings;
  if (currentHour < 12) {
    greetings = "Good Morning Bharat 🌅";
  } else if (currentHour >= 12 && currentHour < 17) {
    greetings = "Good Afternoon Bharat ☀️ ";
  } else {
    greetings = "Good Evening Bharat 🌇 ";
  }

  // const handleFileUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const base64 = await convertToBase64(file);
  //   console.log(base64)

  // }
  // function convertToBase64(file){
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result)
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error)
  //     }
  //   })
  // }
  if (isloading) {
    return <Loader />;
  }

  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      /> */}
      <Head>
        <title>Admin Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <style>
        {`
        .custom-icon{
          color:green;
        }
        .fa-bag-shopping{
            color:red;
          }
          .textarea{
            width:100%;
            border-radius:8px;
          }
        
          .buttons{
            display: flex;
            flex-direction: row;
            gap:10px;
            
          }
       
         
        
        `}
      </style>

      {deleteproduct && (
        <Modal
          title=""
          open={deleteproduct}
          onOk={confirmdelete}
          onCancel={handleCancel}
          centered={true}
          keyboard={true}
          okText="Yes"
          cancelText="No"
        >
          <h1 style={{ textAlign: "center" }}>☹️</h1>
          <h3 style={{ textAlign: "center" }}>
            Are you sure want to delete {username} ?{" "}
          </h3>
          <br />
        </Modal>
      )}
      <br />
      <br />
      <h3 style={{ textAlign: "center" }}>{greetings}</h3>

      <br />
      {/* <Select
        style={{
          width: 200,
          position: "absolute",
          left: "220px",
          border: "2px solid black",
          borderRadius: "8px",
        }}
        onChange={(value) => setsearch(value)}
        placeholder="Search Category..."
      >
        <Option value="">All</Option>
        <Option value="Mobiles">Mobiles</Option>
        <Option value="Watches">Watches</Option>
        <Option value="Headphones">Headphones</Option>
        <Option value="Accessories">Accessories</Option>
        <Option value="Speakers">Speakers</Option>
        <Option value="Tablets">Tablets</Option>
        <Option value="Laptops">Laptops</Option>
        <Option value="Macs">Macs</Option>
        <Option value="Displays">Displays</Option>
      </Select>{" "} */}

      {/* Queries Tooltip */}
      <Tooltip title="Queries" placement="right">
        <div
          className="badge"
          style={{ position: "fixed", left: "29px", top: "291px" }}
        >
          <Badge count={lengthofquery}>
            <i
              className="fa-solid fa-envelope"
              style={{ fontSize: "28px", color: "rgb(22,119,254)" }}
              onClick={() => {
                setquerybox(true);
              }}
            ></i>
          </Badge>
        </div>
      </Tooltip>

      {/* Category Tooltip */}
      <Tooltip title="Categories" placement="right">
        <div
          className="badge"
          style={{ position: "fixed", left: "25px", top: "340px" }}
        >
          <i
            className="fa-solid fa-cart-shopping"
            style={{ fontSize: "28px", color: "rgb(22,119,254)" }}
            onClick={() => {
              setopenCategoryDrawer(true);
            }}
          ></i>
        </div>
      </Tooltip>

      {/* Carousel Image Tooltip */}
      <Tooltip title="Carousel Images" placement="left">
        <FloatButton
          style={{
            left: 28,
            top: 230,
          }}
          icon={<i className="fa-solid fa-image"></i>}
          type="primary"
          onClick={() => seteditImage(true)}
        />
      </Tooltip>

      {/* New Product add toottip Button */}
      <Tooltip title="Add New Product" placement="right">
        <FloatButton
          style={{
            top: 170,
            left: 25,
          }}
          type="primary"
          icon={<i className="fa-solid fa-plus"></i>}
          onClick={showDrawer}
        />
      </Tooltip>

      {/* Statistics tooltip */}
      <Tooltip title="Statistics" placement="right">
        <FloatButton
          style={{
            left: 25,
            top: 120,
          }}
          type="primary"
          icon={<i className="fa-solid fa-chart-simple"></i>}
          onClick={openstat}
        />
      </Tooltip>

      <Container>
        <div className="controls">
          <Autocomplete
            // style={{
            //   position: "absolute",
            //   left: "225px",
            //   borderRadius: "8px",
            // }}
            size="small"
            disablePortal
            id="combo-box-demo"
            options={
              apiproducts &&
              Array.from(new Set(apiproducts.map((data) => data.category)))
            }
            sx={{ width: 250 }}
            renderInput={(params: any) => (
              <TextField {...params} placeholder="Search By Category" />
            )}
            onChange={(event, value: any) => {
              setsearch(value);
            }}
          />{" "}
        </div>

        <br />

        <TableContainer component={Paper} sx={{ width: 1100 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 18, fontWeight: 600 }} align="left">
                  SNo.
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 600 }} align="left">
                  Title
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 600 }} align="left">
                  Price
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 600 }} align="left">
                  Stock
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 600 }} align="left">
                  Category
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 600 }} align="left">
                  Image
                </TableCell>
                <TableCell
                  sx={{ fontSize: 18, fontWeight: 600 }}
                  colSpan={2}
                  align="left"
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apiproducts &&
                apiproducts
                  .filter((item: any) => {
                    if (
                      typeof searchdata !== "string" ||
                      searchdata.length === 0
                    ) {
                      return item;
                    } else {
                      return item?.category
                        .toLowerCase()
                        .includes(searchdata.toLowerCase());
                    }
                  })
                  .slice(0, visibleItems)
                  .map((details: any, index: any) => (
                    <TableRow key={details._id} data-aos="zoom-in">
                      <TableCell align="left" sx={{ fontWeight: 800 }}>
                        {index + 1}.
                      </TableCell>
                      <TableCell align="left">{details.title}</TableCell>
                      <TableCell align="left">{details.price}</TableCell>
                      <TableCell
                        align="left"
                        style={{
                          color: details.stock <= 1 ? "red" : "inherit",
                          fontWeight: "800",
                        }}
                      >
                        {details.stock}
                      </TableCell>
                      <TableCell align="left">{details.category}</TableCell>
                      <TableCell align="left" className="tableimage">
                        {/* <Image
                          width={40}
                          height={40}
                          src={details.img}
                          onClick={() => setshownavbar(false)}
                          preview={{
                            visible: ImageView,
                            onVisibleChange: (vis,current) => {
                              setimageview(vis);
                              setshownavbar(imageview);
                              console.log("current",current);
                              
                            },
                          }}
                        /> */}
                        <Image width={40} height={40} src={details.img[0]} />
                      </TableCell>

                      <TableCell
                        colSpan={2}
                        sx={{ display: "flex", gap: 2 }}
                        align="left"
                      >
                        <button
                          className={edit.edit}
                          onClick={() => {
                            // setshowupdate(true);
                            setid(details._id);
                            setupdateopen(true);
                          }}
                        >
                          Edit <i className="fa-solid fa-pen-to-square"></i>
                        </button>

                        <AntButton
                          danger
                          // className={deletecss.delete}
                          onClick={() =>
                            handledelete(details._id, details.title)
                          }
                        >
                          Delete <i className="fa-solid fa-trash"></i>
                        </AntButton>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <br />
      {visibleItems < apiproducts.length && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <AntButton type="primary" onClick={handleLoadMore}>
            Load More Items
          </AntButton>
        </div>
      )}
      {/* Update Product Drawer */}
      <Drawer
        onClose={updateclose}
        open={updateopen}
        bodyStyle={{ paddingBottom: 2 }}
        width={400}
        title="Update Product"
        zIndex={9999}
      >
        <form action="#" onSubmit={handleupdate}>
          <Row gutter={12}>
            <Col span={24}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                type="text"
                value={updatedata?.title}
                onChange={(e) =>
                  setupdatedata((prevstate) => ({
                    ...prevstate,
                    title: e.target.value,
                  }))
                }
                sx={{ width: "100%" }}
              />
            </Col>
          </Row>
          <br />
          <Row gutter={12}>
            <Col span={24}>
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                type="number"
                value={updatedata?.price}
                onChange={(e) =>
                  setupdatedata((prevstate) => ({
                    ...prevstate,
                    price: Number(e.target.value),
                  }))
                }
                sx={{ width: "100%" }}
              />
            </Col>
          </Row>
          <br />
          <Row gutter={12}>
            <Col span={24}>
              <TextField
                id="outlined-basic"
                label="Stock"
                variant="outlined"
                type="number"
                value={updatedata?.stock}
                onChange={(e) =>
                  setupdatedata((prevstate) => ({
                    ...prevstate,
                    stock: Number(e.target.value),
                  }))
                }
                sx={{ width: "100%" }}
              />
            </Col>
          </Row>
          <br />
          <Row gutter={12}>
            <Col span={24}>
              <TextField
                id="outlined-basic"
                label="Storage"
                variant="outlined"
                type="text"
                value={updatedata?.storage}
                onChange={(e) =>
                  setupdatedata((prevstate) => ({
                    ...prevstate,
                    storage: e.target.value,
                  }))
                }
                sx={{ width: "100%" }}
              />
            </Col>
          </Row>
          <br />
          <Row gutter={12}>
            <Col span={24}>
              <textarea
                rows={7}
                cols={12}
                value={updatedata?.img.join(",")}
                onChange={(e) =>
                  setupdatedata((prevvalue) => ({
                    ...prevvalue,
                    img: e.target.value.split(","),
                  }))
                }
                style={{ width: "100%", padding: 8, borderRadius: 8 }}
              ></textarea>
            </Col>
          </Row>

          <br />
          <Row gutter={12}>
            <Col span={24}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </form>
      </Drawer>

      {/* New product add drawer */}
      <Drawer
        title="Add New Product"
        width={600}
        onClose={onClose}
        open={open}
        placement="left"
        bodyStyle={{ paddingBottom: 2 }}
        extra={
          <Space>
            <AntButton onClick={onClose}>Cancel</AntButton>
          </Space>
        }
        zIndex={9999}
      >
        <form action="#" onSubmit={handlesubmit}>
          {/* 1st row */}
          <Row gutter={[12, 12]}>
            <Col span={12}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                name="title"
                type="text"
                sx={{ width: "100%" }}
              />
            </Col>
            <br />
            <Col span={12}>
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                name="price"
                type="number"
                sx={{ width: "100%" }}
              />
            </Col>

            <br />

            {/* 2nd row */}

            <Col span={24}>
              <textarea
                rows={4}
                cols={67}
                name="img"
                placeholder="Upload Image"
                required
                className="textarea"
                value={imageurls.join(",")}
                onChange={(e) => setimageurls(e.target.value.split(","))}
              ></textarea>
            </Col>

            <br />

            <Col span={24}>
              <TextField
                id="outlined-basic"
                label="Quantity"
                variant="outlined"
                name="quantity"
                type="number"
                defaultValue={1}
                disabled={true}
                sx={{ width: "100%" }}
              />
            </Col>

            <br />
            {/* 3rd row */}

            <Col span={24}>
              <textarea
                name="description"
                rows={4}
                placeholder="Enter Headline"
                className="textarea"
                required
              ></textarea>
            </Col>

            <br />
            {/* 4th Row */}

            <Col span={12}>
              <TextField
                id="outlined-basic"
                label="Ratings"
                variant="outlined"
                name="rating"
                type="number"
                InputProps={{
                  inputProps: {
                    min: 1,
                    max: 5,
                    step: 0.1, // To allow decimal numbers
                  },
                }}
                sx={{ width: "100%" }}
              />
            </Col>
            <Col span={12}>
              {/* <input
                type="text"
                name="size"
                placeholder="Enter size"
                required
                className="formclass"
                style={{ width: "100%" }}
              /> */}
              <TextField
                id="outlined-basic"
                label="Resolution"
                variant="outlined"
                name="size"
                type="text"
                sx={{ width: "100%" }}
              />
            </Col>

            <br />
            {/* 5th Row */}

            <Col span={24}>
              <textarea
                name="full"
                rows={10}
                placeholder="Enter description"
                className="textarea"
                required
              ></textarea>
            </Col>

            <br />
            {/* 6th row */}

            <Col span={12}>
              {/*}  <input
                type="text"
                name="color"
                placeholder="Define Color"
                required
                className="formclass"
                style={{ width: "100%" }}
              /> */}
              <TextField
                id="outlined-basic"
                label="Color"
                variant="outlined"
                name="color"
                type="text"
                sx={{ width: "100%" }}
              />
            </Col>
            <Col span={12}>
              <TextField
                id="outlined-basic"
                label="Storage"
                variant="outlined"
                name="storage"
                type="text"
                sx={{ width: "100%" }}
              />
            </Col>

            <br />

            {/* 7th row */}

            <Col span={12}>
              <TextField
                id="outlined-basic"
                label="New or Not"
                variant="outlined"
                name="ribbon"
                type="boolean"
                sx={{ width: "100%" }}
              />
            </Col>
            <Col span={12}>
              <TextField
                id="outlined-basic"
                label="Stock"
                variant="outlined"
                name="stock"
                type="number"
                sx={{ width: "100%" }}
              />
            </Col>

            <br />
            {/* 8th row */}

            <Col span={24}>
              {/* <input
                type="text"
                name="category"
                placeholder="Enter Category"
                required
                className="formclass"
                style={{ width: "100%" }}
              /> */}
              <TextField
                id="outlined-basic"
                label="Category"
                variant="outlined"
                name="category"
                type="text"
                sx={{ width: "100%" }}
              />
            </Col>
          </Row>
          <br />
          {/* 9th row */}
          <Row>
            <Col span={24}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </form>
      </Drawer>

      {/* Statistics Drawer */}
      <Drawer
        open={stat}
        onClose={closestat}
        placement="left"
        width={800}
        zIndex={9999}
        extra={
          <Space>
            <AntButton onClick={() => setstat(false)} type="primary">
              Close
            </AntButton>
          </Space>
        }
      >
        <h4 style={{ color: "black" }}>Dashboard</h4>
        <h1 style={{ color: "black" }}>Products Statistics</h1>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Products"
                value={apiproducts.length}
                valueStyle={{ color: "graytext" }}
                suffix="Items"
                prefix={<ShoppingOutlined style={{ color: "red" }} />}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Value"
                value={totalprice}
                valueStyle={{ color: "graytext" }}
                prefix="₹"
              />
              <h5>{word}</h5>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Stock"
                value={totalstock}
                valueStyle={{ color: "graytext" }}
                suffix="Units"
                prefix={
                  <ShoppingCartOutlined style={{ color: "dodgerblue" }} />
                }
              />
            </Card>
          </Col>
        </Row>
        <h1 style={{ color: "black" }}>Users Statistics</h1>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Registered Users"
                value={`+ ${rusers.length}`}
                valueStyle={{ color: "graytext" }}
                prefix={
                  <FontAwesomeIcon icon={faUser} className="custom-icon" />
                }
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Active Users"
                value={rusers.length}
                valueStyle={{ color: "graytext" }}
                prefix={
                  <FontAwesomeIcon icon={faUser} className="custom-icon" />
                }
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Users Records"
                value={users.length}
                valueStyle={{ color: "graytext" }}
                prefix={<FileDoneOutlined style={{ color: "red" }} />}
              />
            </Card>
          </Col>
        </Row>
        <h1 style={{ color: "black" }}>
          Recent Orders <i className="fa-solid fa-bag-shopping"></i>
        </h1>
        {showbutton && (
          <span style={{ float: "right" }}>
            <AntButton onClick={handlecancelorders} type="primary" size="small">
              Cancel Orders
            </AntButton>
          </span>
        )}
        <Row gutter={12}>
          {cart &&
            cart.map((item: any) => (
              <Col span={8} key={item.id}>
                <Card title={item.title}>
                  <span style={{ fontSize: "16px" }}>Price:</span>{" "}
                  <span style={{ fontSize: "15px", color: "GrayText" }}>
                    {item.price}
                  </span>
                  <br />
                  <span style={{ fontSize: "16px" }}>Quantity:</span>{" "}
                  <span style={{ fontSize: "15px", color: "GrayText" }}>
                    {item.quantity}
                  </span>
                  <br />
                  <span style={{ fontSize: "16px" }}>Grand Total:</span>{" "}
                  <span style={{ fontSize: "15px", fontWeight: "500" }}>
                    {item.quantity * item.price}
                  </span>
                </Card>
              </Col>
            ))}
        </Row>

        <br />
        <AntButton
          type="primary"
          onClick={() => {
            setstat(false);
          }}
        >
          Close
        </AntButton>
      </Drawer>

      {/* Queries Drawer */}
      <Drawer
        open={querybox}
        onClose={() => {
          setquerybox(false);
        }}
        placement="left"
        width={700}
        extra={
          <Space>
            <AntButton
              type="primary"
              onClick={() => {
                setquerybox(false);
              }}
            >
              Close
            </AntButton>
          </Space>
        }
        zIndex={9999}
      >
        <h1>Queries</h1>
        <br />
        <Popconfirm
          title="Delete Queries"
          description="Are you sure to delete these Queries?"
          okText="Yes"
          cancelText="No"
          onConfirm={handleformatqueries}
          zIndex={9999}
        >
          <AntButton danger>Delete All Queries</AntButton>
        </Popconfirm>
        <br />
        <br />
        {messages &&
          messages.map((data) => (
            <React.Fragment key={data._id}>
              <Descriptions layout="vertical" bordered={true}>
                <Descriptions.Item label="UserName">
                  {data.firstname} {data.lastname}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {data.email}
                </Descriptions.Item>
                <Descriptions.Item label="Actions">
                  <div className="buttons">
                    <AntButton
                      type="primary"
                      size="small"
                      className="resolvebutton"
                    >
                      Resolve
                    </AntButton>{" "}
                    <Popconfirm
                      title="Delete Query"
                      description="Are you sure to delete this query ?"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={handledeleteQuery}
                      zIndex={9999}
                    >
                      {" "}
                      <AntButton
                        danger
                        size="small"
                        onClick={() => setmessageid(data._id)}
                        className="deletebutton"
                      >
                        Delete
                      </AntButton>
                    </Popconfirm>
                  </div>
                </Descriptions.Item>
                <Descriptions.Item
                  label="Message"
                  span={2}
                  style={{ fontWeight: "700" }}
                >
                  {data.message}
                </Descriptions.Item>
                <Descriptions.Item
                  label="Received on"
                  span={2}
                  contentStyle={{ color: "red" }}
                >
                  {data.date ? data.date : "31/7/2023"}
                </Descriptions.Item>
              </Descriptions>
              <br />
            </React.Fragment>
          ))}
      </Drawer>

      {/* Images Carousel Drawer */}
      <Drawer
        open={editImage}
        onClose={() => seteditImage(false)}
        width={350}
        zIndex={9999}
        placement="left"
        extra={<AntButton onClick={handleimage}>Add Images</AntButton>}
      >
        {images &&
          images?.map((data) => (
            <Row>
              <Col span={24}>
                <Card
                  key={data._id}
                  style={{ width: 300 }}
                  cover={<img alt="example" src={data.imgPath} />}
                  actions={[
                    <Popconfirm
                      title="Delete Image"
                      description="Are you sure to delete this Image?"
                      okText="Yes"
                      cancelText="No"
                      zIndex={9999}
                      onConfirm={handleimagedeleteconfirm}
                    >
                      <AntButton
                        size="small"
                        style={{ backgroundColor: "white" }}
                        onClick={() => handleimagedelete(data._id)}
                      >
                        <DeleteOutlined />
                      </AntButton>
                    </Popconfirm>,
                    <AntButton
                      onClick={() => {
                        setImageupdateDrawer(true);
                        seteditImage(false);
                        setImageupdateId(data._id);
                      }}
                    >
                      <EditOutlined />
                    </AntButton>,
                  ]}
                >
                  <Meta title={data.title} />
                </Card>
                <br />
                <br />
              </Col>
              <br />
            </Row>
          ))}
      </Drawer>

      {/* Add image in Carousel Drawer */}
      <Drawer
        open={imageadddrawer}
        onClose={() => setimageadddrawer(false)}
        placement="left"
        width={300}
        zIndex={9999}
      >
        <h2>Add Image</h2>
        <br />
        <form action="" onSubmit={handleimageSubmit}>
          <Row>
            <Col span={24}>
              <TextField
                id="outlined-basic"
                label="Upload Image"
                variant="outlined"
                name="imgPath"
                type="text"
                value={imgPath}
                onChange={(e) => setimgPath(e.target.value)}
                sx={{ width: "100%" }}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                name="title"
                type="text"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                sx={{ width: "100%" }}
              />
            </Col>
          </Row>
          <br />
          <AntButton htmlType="submit" type="primary">
            Submit
          </AntButton>
        </form>
      </Drawer>

      {/* Update Image Carousel Drawer */}
      <Drawer
        title="Update Image Title"
        open={ImageupdateDrawer}
        onClose={() => {
          setImageupdateDrawer(false);
          seteditImage(true);
        }}
        width={300}
        zIndex={9999}
        placement="left"
      >
        <h2>Update Image Title</h2>
        <br />

        <form action="" onSubmit={hanldeImageUpdate}>
          <Row>
            <Col span={24}>
              <TextField
                id="outlined-basic"
                label="Uploaded Image"
                variant="outlined"
                type="text"
                value={updateImage?.imgPath}
                onChange={(e) =>
                  setupdateImage((prevstate) => ({
                    ...prevstate,
                    imgPath: e.target.value,
                  }))
                }
                sx={{ width: "100%" }}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                type="text"
                value={updateImage?.title}
                onChange={(e) =>
                  setupdateImage((prevstate) => ({
                    ...prevstate,
                    title: e.target.value,
                  }))
                }
                sx={{ width: "100%" }}
              />
            </Col>
          </Row>
          <br />
          <AntButton htmlType="submit" type="primary">
            Submit
          </AntButton>
        </form>
      </Drawer>

      {/* Category open Drawer */}
      <Drawer
        open={openCategoryDrawer}
        onClose={() => setopenCategoryDrawer(false)}
        zIndex={9999}
        placement="left"
        width={450}
        extra={
          <Space>
            <AntButton
              type="primary"
              onClick={() => setopenCategoryDrawer(false)}
            >
              Close
            </AntButton>

            <AntButton
              onClick={() => {
                setaddCategoryDrawer(true);
                setopenCategoryDrawer(false);
              }}
            >
              Add Category
            </AntButton>
          </Space>
        }
      >
        <h2>Categories</h2>
        <br />
        {categories &&
          categories.map((data) => (
            <Card
              style={{ width: 330 }}
              key={data._id}
              cover={<img alt="example" src={data.imgPath} />}
              actions={[
                <EditOutlined
                  key="edit"
                  onClick={() => {
                    setcategoryId(data._id);
                    setopenCategoryDrawer(false);
                    setupdateCategoryDrawer(true);
                  }}
                />,
                <Popconfirm
                  title="Delete Category"
                  description="Are you sure you want to delete this category"
                  okText="Yes"
                  cancelText="No"
                  zIndex={9999}
                  onConfirm={handleconfirmCategoryDelete}
                >
                  <DeleteOutlined onClick={() => setcategoryId(data._id)} />
                </Popconfirm>
              ]}
            >
              <Meta title={data.title} description={data.description} />
            </Card>
          ))}
      </Drawer>

      {/* Add new Category Drawer */}
      <Drawer
        open={addCategoryDrawer}
        onClose={() => setaddCategoryDrawer(false)}
        zIndex={9999}
        placement="left"
        width={350}
        extra={
          <Space>
            <AntButton danger onClick={() => setaddCategoryDrawer(false)}>
              Cancel
            </AntButton>
          </Space>
        }
      >
        <h2>Add Category</h2>
        <br />
        <form action="#" onSubmit={handleCategorysubmit}>
          <TextField
            name="imgPath"
            label="Image URL"
            value={categoryImgpath}
            onChange={(e) => setcategoryImgpath(e.target.value)}
            sx={{ width: "100%" }}
          />{" "}
          <br />
          <br />
          <TextField
            name="title"
            label="Title"
            value={categoryTitle}
            onChange={(e) => setcategoryTitle(e.target.value)}
            sx={{ width: "100%" }}
          />{" "}
          <br />
          <br />
          <TextField
            name="description"
            label="Description"
            value={categoryDescription}
            onChange={(e) => setcategoryDescription(e.target.value)}
            sx={{ width: "100%" }}
          />{" "}
          <br />
          <br />
          <AntButton htmlType="submit" type="primary">
            Submit
          </AntButton>
        </form>
      </Drawer>

      {/* Update Category Drawer */}
      <Drawer
        open={updateCategoryDrawer}
        onClose={() => setupdateCategoryDrawer(false)}
        zIndex={9999}
        width={350}
        placement="left"
      >
        <h2>Update Category</h2><br />
        <form action="" onSubmit={handleUpdateCategory}>
      <TextField
      label="Image Url"
      value={updatedCategory?.imgPath}
      onChange={(e)=>setupdatedCategory((prevValue)=>({
        ...prevValue,
        imgPath:e.target.value
      }))}
      sx={{width:"100%"}}
      
      /> <br /><br />
      <TextField
      label="Title"
      value={updatedCategory?.title}
      onChange={(e)=>setupdatedCategory((prevValue)=>({
        ...prevValue,
        title:e.target.value
      }))}
      sx={{width:"100%"}}
      /> <br /><br />
      <TextField
      label="Description"
      value={updatedCategory?.description}
      onChange={(e)=>setupdatedCategory((prevValue)=>({
        ...prevValue,
        description:e.target.value
      }))}
      sx={{width:"100%"}}
      
      /> <br /><br />
      <AntButton htmlType="submit" type="primary">Update</AntButton>


        </form>
      </Drawer>

      <br />
      <br />
    </>
  );
};
export default Admin;
