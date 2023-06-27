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
} from "../Features/productsslice";
import Navbar1 from "../Components/Navbar1";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import Updateproduct from "../Componentsapi/Updateproduct";
import Loader from "../Components/Loader";
import { addproducts } from "../Features/productsslice";

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

const Admin = () => {
  const { Option } = Select;
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();

  const [id, setid] = useState();
  const [visibleItems, setVisibleItems] = useState(4);
  const apiproducts = useSelector(
    (state: RootState) => state.allcarts.apiproducts
  );
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


  useEffect(() => {
    dispatch(getproducts());
  }, []);

  useEffect(() => {
    dispatch(searchproductdata(search));
  }, [search]);

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
    setTimeout(() => {
      setitemadded(false);
    }, 2000);
    console.log("values", values);
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
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  ID
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  Title
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  Price
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  Stock
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  Category
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  Image
                </TableCell>
                <TableCell
                  sx={{ fontSize: 18, fontWeight: 800 }}
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
                    <TableRow key={details.id}>
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
                          src={details.img}
                          onClick={() => {
                            setshownavbar(false);
                            setdisplaybutton(true);
                          }}
                        />

                        {/* 3 */}
                        {/* <Image
                          width={40}
                          height={40}
                          src={details.img}
                          onClick={handleImageClick}
                          preview={{
                            visible: ImageView,
                            onVisibleChange: (visible, current) => {
                              setImageView(visible);
                              setshownavbar(visible);
                              console.log("current", current);
                            },
                          }}
                        />
                        {ImageView && (
        <div>
       
           <Modal>
            <button onClick={handleCancelClick}>Cancel</button>

           </Modal>
          
        </div> */}
                      </TableCell>

                      <TableCell
                        colSpan={2}
                        sx={{ display: "flex", gap: 2 }}
                        align="left"
                      >
                        <button
                          className={edit.edit}
                          onClick={() => {
                            setshowupdate(true);
                            setid(details.id);
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
        <AntForm layout="vertical" onFinish={onFinish}>
          <Row gutter={12}>
            <Col span={12}>
              <AntForm.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: "Please enter title" }]}
              >
                <Input placeholder="Please enter title" />
              </AntForm.Item>
            </Col>
            <Col span={12}>
              <AntForm.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: "Please enter price" }]}
              >
                <Input placeholder="Please enter Price" />
              </AntForm.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <AntForm.Item
                name="img"
                label="Image"
                rules={[{ required: true, message: "Please upload Image" }]}
              >
                <Input placeholder="Please enter Image" />
              </AntForm.Item>
            </Col>
            <Col span={12}>
              <AntForm.Item
                name="quantity"
                label="Quantity"
                rules={[{ required: true, message: "Please enter Quantity" }]}
              >
                <Input type="number" placeholder="Please enter Quantity" />
              </AntForm.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={24}>
              <AntForm.Item
                name="description"
                label="Headline"
                rules={[
                  {
                    required: true,
                    message: "please enter Headline",
                  },
                ]}
              >
                <Input.TextArea rows={1} placeholder="Please enter  Headline" />
              </AntForm.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={12}>
              <AntForm.Item
                name="rating"
                label="Rating"
                rules={[{ required: true, message: "Provide Rating" }]}
              >
                <Input type="number" placeholder="Rating" />
              </AntForm.Item>
            </Col>
            <Col span={12}>
              <AntForm.Item
                name="size"
                label="Size"
                rules={[{ required: true, message: "Enter Size" }]}
              >
                <Input placeholder="Enter Size" />
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
                    message: "please enter  description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={3}
                  placeholder="please enter  Description"
                />
              </AntForm.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={12}>
              <AntForm.Item
                name="color"
                label="Color"
                rules={[{ required: true, message: "Please enter color" }]}
              >
                <Input placeholder="Please enter color" />
              </AntForm.Item>
            </Col>
            <Col span={12}>
              <AntForm.Item
                name="storage"
                label="Storage"
                rules={[{ required: true, message: "Please enter storage" }]}
              >
                <Input placeholder="Please enter storage" />
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
                <Switch />
              </AntForm.Item>
            </Col>
            <Col span={12}>
              <AntForm.Item
                name="stock"
                label="Stock"
                rules={[{ required: true, message: "Please enter Stock" }]}
              >
                <Input type="number" placeholder="Please enter Stock" />
              </AntForm.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <AntForm.Item
                name="category"
                label="Category"
                rules={[{ required: true, message: "Please enter Category" }]}
              >
                <Input type="text" placeholder="Please enter Category" />
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
    </>
  );
};

export default Admin;
