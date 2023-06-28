"use client";
import React from "react";
// Ant Design Imports
import {
  Col,
  Row,
  Switch,
  Drawer,
  Modal,
  Input,
  Space,
  Select,
  Image,
  Spin,
} from "antd";
import { Button as AntButton, Form as AntForm } from "antd";
import { PlusOutlined } from "@ant-design/icons";

// Miscellenous Imports
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import edit from "../styles/edit.module.css";
import deletecss from "../styles/delete.module.css";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  deleteitem,
  getproducts,
  searchproductdata,
  updateitem,
} from "../Features/productsslice";
import Navbar1 from "../Components/Navbar1";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import { Updateproduct } from "../Componentsapi/Updateproduct";
import Loader from "../Components/Loader";
import { addproducts } from "../Features/productsslice";
import { Card, Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

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
import { cloneWith } from "lodash";

const Admin = () => {
  const [id, setid] = useState();
  const [updatedata, setupdatedata] = useState({
    title: "",
    price: "",
    stock: "",
  });
  const allproducts = useSelector((state: any) => state.allcarts.apiproducts);
  // console.log("allproducts", allproducts);
  // console.log("update id", id);

  const singleproduct = allproducts.filter((data: any) => {
    return data.id === id;
  })[0];
  // console.log("singleproduct", singleproduct);

  const { Option } = Select;
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();

  const [visibleItems, setVisibleItems] = useState(4);
  const apiproducts = useSelector(
    (state: RootState) => state.allcarts.apiproducts
  );
  // STATISTICS

  const { rusers } = useSelector<any, any>((state: RootState) => state.grand);

  let totalprice = 0;
  const { users } = useSelector((state: RootState) => state.app);

  apiproducts.forEach((item) => {
    totalprice += item.price;
  });
  console.log(totalprice);
  const formattedTotalPrice = totalprice.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });

  const limitedTotalPrice = `${formattedTotalPrice.substring(0, 10)}...`;

  let totalstock = 0;
  apiproducts.forEach((item) => {
    totalstock += item.stock;
  });

  // STAT END
  const { isloading, searchdata } = useSelector(
    (state: RootState) => state.allcarts
  );
  const [open, setOpen] = useState(false);
  const [showupdate, setshowupdate] = useState(false);
  const [deleteproduct, setdeleteproduct] = useState(false);
  const [search, setsearch] = useState();
  const [shownavbar, setshownavbar] = useState(true);
  const loadMoreButtonRef = React.useRef<HTMLInputElement>(null);
  const [imageview, setimageview] = useState(false);
  const [displaybutton, setdisplaybutton] = useState(false);
  const [itemadded, setitemadded] = useState(false);
  const [updateopen, setupdateopen] = useState(false);
  const [stat, setstat] = useState(false);

  useEffect(() => {
    dispatch(getproducts());
    dispatch(showuser());
    dispatch(readuser());
  }, []);

  useEffect(() => {
    dispatch(searchproductdata(search));
  }, [search]);
  useEffect(() => {
    setupdatedata(singleproduct);
  }, [singleproduct, id]);
  // console.log("updatedata", updatedata);

  // Admin actions
  const handledelete = (userId: any) => {
    setid(userId);
    setdeleteproduct(true);
    console.log("userId", userId);
  };
  const confirmdelete = () => {
    dispatch(deleteitem(id));
    dispatch(getproducts());
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
  const onFinish = (values: any) => {
    dispatch(addproducts(values));
    setitemadded(true);
    setOpen(false);
    setshownavbar(true);
    setTimeout(() => {
      setitemadded(false);
    }, 2000);
    console.log("values", values);
  };

  const updateclose = () => {
    setupdateopen(false);
    setshownavbar(true);
  };
  const handleupdate = (e: any) => {
    e.preventDefault();
    dispatch(updateitem({ id: singleproduct.id, ...updatedata }));
    console.log("values", e);
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

  return (
    <>
      <Head>
        <title>Admin Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>
        {`
          

          .centered-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
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
         
        
        `}
      </style>
      {itemadded && (
        <div className="popup">
          <p>Item has been added 😀 </p>
        </div>
      )}
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
      {showupdate && <Updateproduct setshowupdate={setshowupdate} id={id} />}
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
          <h3>Are you sure want to delete this Product ? ☹️</h3>
        </Modal>
      )}
      <AntButton
        type="primary"
        onClick={showDrawer}
        icon={<PlusOutlined />}
        style={{ float: "right", right: "25px" }}
      >
        Add New Product
      </AntButton>
      <Button variant="contained" onClick={openstat}>
        Statistics
      </Button>
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
      <Autocomplete
        style={{
          position: "absolute",
          left: "225px",

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
        renderInput={(params: any) => (
          <TextField {...params} placeholder="Search By Category" />
        )}
        onChange={(event, value: any) => {
          setsearch(value);
        }}
      />

      <br />
      <br />
      <br />
      <Container>
        <TableContainer component={Paper} sx={{ width: 1100 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 18, fontWeight: 600 }} align="left">
                  ID
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
                      return item.category
                        .toLowerCase()
                        .includes(searchdata.toLowerCase());
                    }
                  })
                  .slice(0, visibleItems)
                  .map((details: any) => (
                    <TableRow key={details.id} data-aos="zoom-in">
                      <TableCell align="left" sx={{ fontWeight: 800 }}>
                        {details.id}.
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
                            setid(details.id);
                            setupdateopen(true);
                            setshownavbar(false);
                          }}
                        >
                          Edit <i className="fa-solid fa-pen-to-square"></i>
                        </button>

                        <button
                          className={deletecss.delete}
                          onClick={() => handledelete(details.id)}
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
        {/* <AntForm layout="vertical">
         <Row>
          <Col span={24}>
            <AntForm.Item
             label="Title"
             name="title"
            
            >
              <Input type="text" />
            </AntForm.Item>
          </Col>
         </Row>


     
         <Row>
          <Col span={24}>
            <AntForm.Item
             label="Price"
             name="price"
            >
              <Input type="number"/>
            </AntForm.Item>
          </Col>
         </Row>


        
         <Row>
          <Col span={24}>
            <AntForm.Item
             label="Stock"
             name="stock"
            >
              <Input type="number" />
            </AntForm.Item>
          </Col>
         </Row>
         <AntButton type="primary" htmlType="submit">Update</AntButton>


        </AntForm> */}

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
                  setupdatedata((prevvalue) => ({
                    ...prevvalue,
                    price: e.target.value,
                  }))
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
                    stock: e.target.value,
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
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 2 }}
        extra={
          <Space>
            <AntButton onClick={onClose}>Cancel</AntButton>
          </Space>
        }
      >
        <AntForm layout="vertical" onFinish={onFinish} data-aos="zoom-in">
          <Row gutter={12}>
            <Col span={12}>
              <AntForm.Item
                name="title"
                label="Title"
                hasFeedback
                rules={[
                  { required: true, message: "Please Enter Title" },
                  { whitespace: true, message: "Title cannot be empty" },
                  { min: 5, message: "Title must be at least 5 characters" },
                  {
                    max: 15,
                    message: "Title can't exceed more than 15 characters",
                  },
                ]}
              >
                <Input placeholder="Enter Title" size="large" />
              </AntForm.Item>
            </Col>
            <Col span={12}>
              <AntForm.Item
                name="price"
                label="Price"
                hasFeedback
                rules={[
                  { required: true, message: "Please Enter Price" },
                  {
                    validator: (_, value) => {
                      if (value && Number(value) < 0) {
                        return Promise.reject(
                          "Price must be a positive number"
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Enter Price"
                  addonBefore="₹"
                  size="large"
                />
              </AntForm.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <AntForm.Item
                name="img"
                label="Image"
                hasFeedback
                rules={[{ required: true, message: "Image Link is Required" }]}
              >
                <Input placeholder="Provide Image Link Here" size="large" />
              </AntForm.Item>
            </Col>
            <Col span={12}>
              <AntForm.Item name="quantity" label="Quantity">
                <Input
                  type="number"
                  placeholder="Enter Quantity"
                  size="large"
                  defaultValue={1}
                  disabled
                />
              </AntForm.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={24}>
              <AntForm.Item
                name="description"
                label="Headline"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Headline",
                  },
                  {
                    min: 10,
                    message: "Headline must be at least 10 characters",
                  },
                  {
                    max: 20,
                    message: "Headline cannot exceed more than 20 Characters",
                  },
                  {
                    whitespace: true,
                    message: "Headline must begin with a character",
                  },
                ]}
              >
                <Input.TextArea
                  rows={1}
                  placeholder="Enter Headline"
                  allowClear
                />
              </AntForm.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={12}>
              <AntForm.Item
                name="rating"
                label="Rating"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter a number between 0-5",
                  },
                  {
                    validator: (_, value) => {
                      if (value && (Number(value) < 0 || Number(value) > 5)) {
                        return Promise.reject("Rating must be between 0 and 5");
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Enter a number between 0-5"
                  size="large"
                  min={0}
                  max={5}
                />
              </AntForm.Item>
            </Col>
            <Col span={12}>
              <AntForm.Item
                name="size"
                label="Size"
                rules={[{ required: true, message: "Please Enter Size" }]}
              >
                <Input placeholder="Enter Size" size="large" />
              </AntForm.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={24}>
              <AntForm.Item
                name="full"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Description",
                  },
                  {
                    min: 15,
                    message: "Description must be at least 15 characters",
                  },
                  {
                    max: 120,
                    message:
                      "Description cannot exceed more than 120 Characters",
                  },
                  {
                    whitespace: true,
                    message: "Description cannot begin with space",
                  },
                ]}
              >
                <Input.TextArea
                  rows={3}
                  placeholder="Enter Description"
                  allowClear
                  showCount={true}
                />
              </AntForm.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={12}>
              <AntForm.Item
                name="color"
                label="Color"
                rules={[{ required: true, message: "Please Enter Color" }]}
              >
                <Input placeholder="Enter Color of the Product" size="large" />
              </AntForm.Item>
            </Col>
            <Col span={12}>
              <AntForm.Item
                name="storage"
                label="Storage"
                rules={[{ required: true, message: "Please Enter Storage" }]}
              >
                <Input placeholder="Enter Storage" size="large" />
              </AntForm.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              {/* <AntForm.Item
                name="ribbon"
                label="Ribbon"
                rules={[{ required: true, message: 'Ribbon ' }]}
              >
                <Input type="boolean" placeholder="Please enter Ribbon" />
              </AntForm.Item> */}
              <AntForm.Item
                name="ribbon"
                label="Ribbon"
                valuePropName="checked"
              >
                <Switch checkedChildren="True" unCheckedChildren="False" />
              </AntForm.Item>
            </Col>
            <Col span={12}>
              <AntForm.Item
                name="stock"
                label="Stock"
                rules={[
                  { required: true, message: "Please Enter Stock Value" },
                  {
                    validator: (_, value) => {
                      if (value && Number(value) < 0) {
                        return Promise.reject(
                          "Stock must be a positive number"
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Enter Stock Value"
                  size="large"
                />
              </AntForm.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <AntForm.Item
                name="category"
                label="Category"
                rules={[{ required: true, message: "Please Enter Category" }]}
              >
                <Input type="text" placeholder="Enter Category" size="large" />
              </AntForm.Item>
            </Col>
          </Row>
          <AntForm.Item>
            <AntButton type="primary" htmlType="submit">
              Submit
            </AntButton>
          </AntForm.Item>
        </AntForm>
      </Drawer>

      <Drawer open={stat} onClose={closestat} placement="left" width={800}>
        <h4 style={{ color: "GrayText" }}>Dashboard</h4>
        <h1 style={{ color: "dodgerblue" }}>Products Statistics</h1>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Products"
                value={apiproducts.length}
                valueStyle={{ color: "#3f8600" }}
                suffix="Items"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Value"
                value={limitedTotalPrice}
                valueStyle={{ color: "#3f8600" }}
                prefix="₹"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Stock"
                value={totalstock}
                valueStyle={{ color: "#3f8600" }}
                suffix="Units"
              />
            </Card>
          </Col>
        </Row>
        <h1 style={{ color: "dodgerblue" }}>Users Statistics</h1>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Registered Users"
                value={rusers.length}
                valueStyle={{ color: "#3f8600" }}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Active Users"
                value={rusers.length}
                valueStyle={{ color: "#3f8600" }}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Users Records"
                value={users.length}
                valueStyle={{ color: "#3f8600" }}
              />
            </Card>
          </Col>
        </Row>
        <br />
        <Button
          variant="contained"
          onClick={() => {
            setstat(false);
            setshownavbar(true);
          }}
        >
          Close
        </Button>
      </Drawer>
      <br />
      <br />
    </>
  );
};

export default Admin;
