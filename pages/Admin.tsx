"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Ant Design Imports
import { Col, Row, Drawer, Modal, Space, Select, Image } from "antd";
import { Button as AntButton } from "antd";
import {
  FileDoneOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Card, Statistic, notification } from "antd";

// Miscellenous Imports
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import edit from "../styles/edit.module.css";
import deletecss from "../styles/delete.module.css";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  deleteallitems,
  deleteitem,
  getproducts,
  searchproductdata,
  updateitem,
} from "../Features/productsslice";
import Navbar1 from "../Components/Navbar1";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { addproducts } from "../Features/productsslice";
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
import { showuser } from "../Features/userdetail";
import { readuser } from "../Features/register";
import Cart from "./Cart";

const Admin = () => {
  const [id, setid] = useState<Number>();
  const [updatedata, setupdatedata] = useState({
    title: "",
    price: 0,
    stock: 0,
  });
  const[username,setusername]=useState<string>()
  const allproducts = useSelector(
    (state: RootState) => state.allcarts.apiproducts
  );
  console.log("allproducts", allproducts);
  // console.log("update id", id);

  const singleproduct = allproducts.filter((data: any) => data._id === id)[0];

  console.log("singleproduct", singleproduct);

  const { Option } = Select;
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();

  const [visibleItems, setVisibleItems] = useState(4);
  const apiproducts = useSelector(
    (state: RootState) => state.allcarts.apiproducts
  );
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
  const { isloading, searchdata, cart } = useSelector(
    (state: RootState) => state.allcarts
  );
  // console.log("cart", cart)
  const [open, setOpen] = useState(false);
  const [deleteproduct, setdeleteproduct] = useState(false);
  const [search, setsearch] = useState();
  const [shownavbar, setshownavbar] = useState(true);
  const loadMoreButtonRef = React.useRef<HTMLInputElement>(null);
  const [imageview, setimageview] = useState(false);
  const [displaybutton, setdisplaybutton] = useState(false);

  const [updateopen, setupdateopen] = useState(false);
  const [stat, setstat] = useState(false);
  // const [cartData, setCartData] = useState([]);
  const [showbutton, setshowbutton] = useState(false);

  useEffect(() => {
    dispatch(getproducts());
    dispatch(showuser());
    dispatch(readuser());
  }, []);

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
  const handledelete = (userId:number,username:string) => {
    setid(userId);
    setdeleteproduct(true);
    setusername(username)
    console.log("userId", userId);
  };
  const confirmdelete = () => {
    dispatch(deleteitem(id));
    dispatch(getproducts());

    notification.warning({
      message: "Product deletion",
      description: "Item deleted successfully",
      placement: "topLeft",

      style: {
        top: "78px",
      },
    });
    setdeleteproduct(false);
  };
  if (isloading) {
    return <Loader />;
  }
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
    setshownavbar(true);
  };

  const showDrawer = () => {
    setshownavbar(false);
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
      img: [e.target.elements.img.value],
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
    dispatch(addproducts(formData));

    // Reset the form or perform any other necessary actions
    onClose();
    notification.success({
      message: "Success",
      description: "Item added successfully",
      placement: "topLeft",
      style: {
        top: "78px",
      },
    });
  };

  const updateclose = () => {
    setupdateopen(false);
    setshownavbar(true);
  };
  const handleupdate = (e: any) => {
    e.preventDefault();
    dispatch(updateitem({ id: singleproduct._id, ...updatedata }));
    console.log("values", e);
    notification.success({
      message: "Update Action",
      description: "Item updated successfully",
      placement: "topLeft",
      style: {
        top: "78px",
      },
    });

    setupdateopen(false);
    setshownavbar(true);
  };
  if (isloading) {
    return <Loader />;
  }
  const openstat = () => {
    setstat(true);
    setshownavbar(false);
  };
  const closestat = () => {
    setstat(false);
    setshownavbar(true);
  };
  const handlecancelorders = () => {
    // localStorage.removeItem("cart"); // Remove cart data from localStorage
    // setCartData([]); // Update the state to reflect the empty cart
    // setshowbutton(false);
    dispatch(deleteallitems());
  };

  const currenttime = new Date();
  const currentHour = currenttime.getHours();
  console.log(currenttime);
  console.log(currentHour);
  let wish;
  if (currentHour < 12) {
    wish = "Good Morning Bharat 🌅";
  } else if (currentHour >= 12 && currentHour < 17) {
    wish = "Good Afternoon Bharat ☀️ ";
  } else {
    wish = "Good Evening Bharat 🌇 ";
  }

  return (
    <>
      <Head>
        <title>Admin Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <style>
        {`
        .custom-icon{
          color:green;
        }
          

         
         
          
           
          .fa-bag-shopping{
            color:red;
          }
          .form{
            width:400px;
          }
          .formclass{
            width: 100%;
            padding:12px;
            border-radius:12px;

          }

     
          .textarea{
            width:100%;
            border-radius:12px;
          }
          .controls{
            display: flex;
            flex-direction: row;
            justify-content:space-around;
     
          }
         
        
        `}
      </style>

      {shownavbar && <Navbar1 />}
      <br />
      {displaybutton && (
        <Button
          onClick={() => {
            setshownavbar(true);
            setdisplaybutton(false);
          }}
          style={{ marginLeft: "43%", position: "fixed" }}
          variant="contained"
        >
          Show Navbar Controls
        </Button>
      )}

      {deleteproduct && (
        <Modal
          title=""
          open={deleteproduct}
          onOk={confirmdelete}
          onCancel={handleCancel}
          centered={true}
          keyboard={true}
          okText="Yes"
        > 
        <h1 style={{textAlign:"center"}}>☹️</h1>
          <h3 style={{textAlign:"center"}}>Are you sure want to delete {username} ? </h3><br />
        </Modal>
      )}
      <h3 style={{ textAlign: "center" }}>{wish}</h3>

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

      <Container>
        <div className="controls">
          <Button
            variant="contained"
            size="small"
            onClick={openstat}
            style={{ marginLeft: 10 }}
          >
            Statistics
          </Button>

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
          />
          <AntButton
            type="primary"
            onClick={showDrawer}
            icon={<PlusOutlined />}
            // style={{ float: "right", right: "25px", position: "fixed" }}
          >
            Add New Product
          </AntButton>
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
                      <TableCell align="left">{details.stock}</TableCell>
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
                        <Image
                          width={40}
                          height={40}
                          src={details.img[0]}
                          onClick={() => {
                            setshownavbar(false);
                            setdisplaybutton(true);
                          }}
                        />
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
                            setshownavbar(false);
                          }}
                        >
                          Edit <i className="fa-solid fa-pen-to-square"></i>
                        </button>

                        <button
                          className={deletecss.delete}
                          onClick={() => handledelete(details._id,details.title)}
                        >
                          Delete <i className="fa-solid fa-trash"></i>
                        </button>
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
          <Button variant="contained" onClick={handleLoadMore}>
            Load More Items
          </Button>
        </div>
      )}
      <Drawer
        onClose={updateclose}
        open={updateopen}
        bodyStyle={{ paddingBottom: 2 }}
        width={320}
        title="Update Product"
        style={{ overflowY: "hidden" }}
      >
        <form action="#" onSubmit={handleupdate}>
          <Row gutter={12}>
            <Col span={24}>
              <label htmlFor="Title">Title</label>
              <br />
              <br />
              <input
                type="text"
                value={updatedata?.title}
                onChange={(e) =>
                  setupdatedata((prevvalue) => ({
                    ...prevvalue,
                    title: e.target.value,
                  }))
                }
                style={{ width: "80%", padding: 8, borderRadius: 8 }}
              />
            </Col>
          </Row>
          <br />
          <Row gutter={12}>
            <Col span={24}>
              <label htmlFor="Price">Price</label>
              <br />
              <br />
              <input
                type="number"
                value={updatedata?.price}
                onChange={(e) =>
                  setupdatedata(
                    (prevvalue: {
                      title: string;
                      price: number;
                      stock: number;
                    }) => ({
                      ...prevvalue,
                      price: Number(e.target.value),
                    })
                  )
                }
                style={{ width: "80%", padding: 8, borderRadius: 8 }}
              />
            </Col>
          </Row>
          <br />
          <Row gutter={12}>
            <Col span={24}>
              <label htmlFor="Stock">Stock</label>
              <br />
              <br />
              <input
                type="number"
                value={updatedata?.stock}
                onChange={(e) =>
                  setupdatedata((prevvalue) => ({
                    ...prevvalue,
                    stock: Number(e.target.value),
                  }))
                }
                style={{ width: "80%", padding: 8, borderRadius: 8 }}
              />
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

      <Drawer
        title="Add New Product"
        width="auto"
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 2 }}
        extra={
          <Space>
            <AntButton onClick={onClose}>Cancel</AntButton>
          </Space>
        }
      >
        <form action="#" onSubmit={handlesubmit} className="form">
          {/* 1st row */}
          <Row gutter={[12, 12]}>
            <Col span={12}>
              <input
                type="text"
                name="title"
                placeholder="Enter Title"
                required
                className="formclass"
              />
            </Col>
            <Col span={12}>
              <input
                type="number"
                name="price"
                placeholder="Enter Price"
                required
                className="formclass"
              />
            </Col>
          </Row>
          <br />

          {/* 2nd row */}
          <Row gutter={12}>
            <Col span={12}>
              <input
                type="string"
                name="img"
                placeholder="Upload Image"
                required
                className="formclass"
              />
            </Col>
            <Col span={12}>
              <input
                type="number"
                name="quantity"
                placeholder="Enter Quantity"
                value={1}
                disabled
                className="formclass"
              />
            </Col>
          </Row>
          <br />
          {/* 3rd row */}
          <Row gutter={12}>
            <Col span={24}>
              <textarea
                name="description"
                rows={8}
                placeholder="Enter Description"
                className="textarea"
                required
              ></textarea>
            </Col>
          </Row>
          <br />
          {/* 4th Row */}
          <Row gutter={12}>
            <Col span={12}>
              <input
                type="number"
                name="rating"
                placeholder="Enter a number between 0-5"
                required
                className="formclass"
              />
            </Col>
            <Col span={12}>
              <input
                type="text"
                name="size"
                placeholder="Enter size"
                required
                className="formclass"
              />
            </Col>
          </Row>
          <br />
          {/* 5th Row */}
          <Row gutter={12}>
            <Col span={24}>
              <textarea
                name="full"
                rows={10}
                placeholder="Enter description"
                className="textarea"
                required
              ></textarea>
            </Col>
          </Row>
          <br />
          {/* 6th row */}
          <Row gutter={12}>
            <Col span={12}>
              <input
                type="text"
                name="color"
                placeholder="Define Color"
                required
                className="formclass"
              />
            </Col>
            <Col span={12}>
              <input
                type="text"
                name="storage"
                placeholder="Enter Storage"
                required
                className="formclass"
              />
            </Col>
          </Row>
          <br />

          {/* 7th row */}
          <Row gutter={12}>
            <Col span={12}>
              <input
                type="boolean"
                name="ribbon"
                placeholder="New or not"
                required
                className="formclass"
              />
            </Col>
            <Col span={12}>
              <input
                type="number"
                name="stock"
                placeholder="Enter Stock"
                required
                className="formclass"
              />
            </Col>
          </Row>
          <br />
          {/* 8th row */}
          <Row>
            <Col span={24}>
              <input
                type="text"
                name="category"
                placeholder="Enter Category"
                required
                className="formclass"
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

      <Drawer open={stat} onClose={closestat} placement="left" width={800}>
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
            setshownavbar(true);
          }}
        >
          Close
        </AntButton>
      </Drawer>
      <br />
      <br />
    </>
  );
};

export default Admin;
