// Next imports
import React, { useEffect, useState } from "react";
// Antd imports
import { Col, Drawer, FloatButton, Modal, Row, Space, Tooltip } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { Result } from "antd";
import { Descriptions } from "antd";
import { Button as AntButton } from "antd";
// Redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  createmessages,
  getmessages,
  updatemessage,
} from "../Features/message";
import { AppDispatch, RootState } from "../store";
// Components imports
import Loader from "./Loader";
import { TextField } from "@mui/material";
// Libraries imports
const moment = require("moment");

const Contact = () => {
  useEffect(() => {
    dispatch(getmessages());
  }, []);
  const dispatch: AppDispatch = useDispatch();
  const { isloading } = useSelector((state: RootState) => state.allmessages);
  const [firstname, setfirstName] = useState<string>("");
  const [lastname, setlastName] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [date, setDate] = useState("");
  const [requestbyname, setrequestbyname] = useState<string>("");
  const [requestbyemail, setrequestbyemail] = useState<string>("");
  const [sendmessage, setsendmessage] = useState<boolean>(false);
  const [openRecentQueryDrawer, setopenRecentQueryDrawer] =
    useState<boolean>(false);
  const [editQueryDrawer, seteditQueryDrawer] = useState<boolean>(false);
  const [EditQueryId, setEditQueryId] = useState<number>();
  const [QueryData, setQueryData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    date: "",
  });
  const currentDate = moment().format("DD-MM-YYYY");
  useEffect(() => {
    setDate(currentDate);
  }, [currentDate]);

  const messages = useSelector(
    (state: RootState) => state.allmessages.Messages
  );
  console.log("Messages", messages);
  const singlemessage = messages.filter((data) => data._id === EditQueryId)[0];
  console.log("singlemesage", singlemessage);
  useEffect(() => {
    setQueryData(singlemessage);
  }, [singlemessage]);

  const handlesubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(
      createmessages({ firstname, lastname, email, message, date })
    ).then((response) => {
      let responsedata = response.payload;
      console.log(responsedata);
      setsendmessage(true);
      setfirstName("");
      setlastName("");
      setemail("");
      setMessage("");
      setrequestbyname(responsedata.firstname);
      setrequestbyemail(responsedata.email);
    });
  };

  const onok = () => {
    setsendmessage(false);
  };
  const oncancel = () => {
    setsendmessage(false);
  };
  const handleQueryEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updatemessage({ id: singlemessage._id, ...QueryData })).then(
      () => {
        dispatch(getmessages());
        seteditQueryDrawer(false);
        setopenRecentQueryDrawer(true);
      }
    );
  };
  if (isloading) {
    return <Loader />;
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@500&family=Roboto&display=swap"
        rel="stylesheet"
      />
      <style>
        {`
        body{
          font-family: 'Heebo', sans-serif;
          // background-image:url("https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80");
          background-color:#edf2fb;
          background-attachment:fixed;
          background-size:cover;
          background-repeat:no-repeat;
          background-position:center;
        }
            .row{
                display:flex;
                flex-direction:row;
                justify-content:center;
                align-items:center;
                gap:50px;
            }
            .button {
              font-family: inherit;
              font-size: 18px;
              background: rgb(25,118,210);
              color: white;
              padding: 0.5em 0.8em;
              padding-left: 0.4em;
              display: flex;
              margin-left:190px;
              align-items: center;
              border: none;
              border-radius: 16px;
              overflow: hidden;
              transition: all 0.2s;
            }
            
            .button span {
              display: block;
              margin-left: 0.3em;
              transition: all 0.3s ease-in-out;
            }
            
            .button svg {
              display: block;
              transform-origin: center center;
              transition: transform 0.3s ease-in-out;
            }
            
            .button:hover .svg-wrapper {
              animation: fly-1 0.6s ease-in-out infinite alternate;
            }
            
            .button:hover svg {
              transform: translateX(1.2em) rotate(45deg) scale(1.1);
            }
            
            .button:hover span {
              transform: translateX(5em);
            }
            
            .button:active {
              transform: scale(0.95);
            }
            
            @keyframes fly-1 {
              from {
                transform: translateY(0.1em);
              }
            
              to {
                transform: translateY(-0.1em);
              }
            }
            .custom-textarea::placeholder {
              /* Set the desired position for the placeholder text */
              position: absolute;
              top: 10px; /* Adjust the top position */
              left: 15px; /* Adjust the left position */
              color: #888; /* Placeholder text color */
              font-size: 18px; /* Placeholder text font size */
            }
            .custom-input::placeholder {
              color: #888; 
              font-size: 14px;
            }
            .buttons{
              display: flex;
              flex-direction: row;
              gap:10px;
              
            }
            `}
      </style>

      <Tooltip title="Recent Queries" placement="left">
        <FloatButton
          style={{
            top: 110,
            right: 10,
            height: 10,
          }}
          shape="square"
          onClick={() => setopenRecentQueryDrawer(true)}
          icon={<i className="fa-solid fa-clock-rotate-left"></i>}
          type="primary"
        />
      </Tooltip>

      {sendmessage && (
        <Modal
          open={sendmessage}
          centered={true}
          cancelText="Close"
          onOk={() => {
            onok();
          }}
          onCancel={() => {
            oncancel();
          }}
        >
          <Result
            icon={<SmileOutlined />}
            title={`Thankyou , we have received your message ${requestbyname}. Our team will shortly contact you via email ${requestbyemail}`}
          />
        </Modal>
      )}
      <div
        className="main-container"
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "transparent",
        }}
      >
        <h1 style={{ textAlign: "center", color: "black" }}>Contact Us</h1>
        <br />
        <div className="row">
          <div className="column1">
            <h1 style={{ color: "graytext" }}>
              We would love to work <br />
              with you
            </h1>
            <br />
            <p style={{ width: "430px", textAlign: "left", color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vestibulum ipsum sed felis laoreet, ut luctus nulla pulvinar.
              Nullam eleifend erat eget lacinia sodales. Nunc rutrum sit amet
              ligula ac cursus. Cras auctor dolor vitae tristique tempor .Nullam
              efficitur, risus lacinia bibendum posuere, nisl justo ultrices
              sapien, sed pharetra nisi elit eget ex.
            </p>
            <br />
            <p style={{ width: "450px", color: "black" }}>
              {" "}
              Nullam efficitur, risus lacinia bibendum posuere, nisl justo
              ultrices sapien, sed pharetra nisi elit eget ex. Mauris maximus
              lorem et leo sodales, in porttitor eros consectetur.
            </p>
            <br />
            <p style={{ fontWeight: "900", color: "graytext" }}>
              Available 24X7 Just for you <br />
              TollFree Number : 1800 180 3000
            </p>
          </div>
          <br />
          <div className="column2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1587.958537621464!2d76.6978035315703!3d30.71333548648994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefd89ee56eeb%3A0x489a927bc5c0de0a!2sWiznox%20Technologies!5e0!3m2!1sen!2sin!4v1690261761317!5m2!1sen!2sin"
              width="500"
              height="400"
              style={{ border: "0", borderRadius: "12px" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div
        className="main-container2"
        style={{
          backgroundColor: "transparent",
          height: "auto",
          width: "100%",
          borderRadius: "18px",
          padding: "0px 0px 8px 0px",
          marginTop: "50px",
        }}
      >
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: "center", color: "graytext" }}>
          Share your valuable feedback, suggestions!
        </h1>
        <h2 style={{ textAlign: "center", color: "graytext" }}>
          We Care about you ❤️
        </h2>
        <br />
        <br />
        <div className="form">
          <form action="" onSubmit={handlesubmit}>
            <Row style={{ marginLeft: "350px" }}>
              <Col span={6}>
                <input
                  type="text"
                  name="firstname"
                  required
                  value={firstname}
                  onChange={(e) => setfirstName(e.target.value)}
                  style={{
                    width: "60%",
                    padding: "14px",
                    borderRadius: "50px",
                    border: "none",
                  }}
                  className="custom-input"
                  placeholder="First name"
                />
              </Col>
              <Col span={6}>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setlastName(e.target.value)}
                  style={{
                    width: "60%",
                    padding: "14px",
                    borderRadius: "50px",
                    border: "none",
                  }}
                  className="custom-input"
                  placeholder="Last name (Optional)"
                />
              </Col>
              <Col span={6}>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  style={{
                    width: "60%",
                    padding: "14px",
                    borderRadius: "50px",
                    border: "none",
                  }}
                  className="custom-input"
                  placeholder="Enter your email"
                />
              </Col>
            </Row>
            <br />
            <Row style={{ marginLeft: "350px" }}>
              <Col span={24}>
                <textarea
                  name="message"
                  id=""
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols={112}
                  rows={16}
                  style={{
                    borderRadius: "12px",
                    border: "none",
                    color: "black",
                    fontWeight: "900",
                  }}
                  placeholder="Your message"
                  className="custom-textarea"
                ></textarea>
              </Col>
            </Row>
            <br />
            <Row style={{ marginLeft: "160px" }}>
              <Col span={24}>
                <button type="submit" className="button">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>Send</span>
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </div>

      {/* Recent Query Open Drawer */}
      <Drawer
        open={openRecentQueryDrawer}
        onClose={() => setopenRecentQueryDrawer(false)}
        zIndex={9999}
        width={570}
        extra={
          <Space>
            <AntButton
              type="primary"
              onClick={() => setopenRecentQueryDrawer(false)}
            >
              Close
            </AntButton>
          </Space>
        }
      >
        <h2>Recent Queries</h2>
        <br />
        {messages &&
          messages?.map((data) => (
            <React.Fragment key={data._id}>
              <Descriptions bordered={true} layout="vertical">
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
                      onClick={() => {
                        seteditQueryDrawer(true);
                        setEditQueryId(data._id);
                        setopenRecentQueryDrawer(false);
                      }}
                    >
                      Edit & Send Again
                    </AntButton>
                    {/* <AntButton danger>Delete</AntButton> */}
                  </div>
                </Descriptions.Item>
                <Descriptions.Item
                  label="Message"
                  span={2}
                  style={{ fontWeight: "900" }}
                >
                  {data.message}
                </Descriptions.Item>
                <Descriptions.Item
                  label="Sent on"
                  span={2}
                  contentStyle={{ color: "red" }}
                >
                  {data.date ? data.date : "31/07/2023"}
                </Descriptions.Item>
              </Descriptions>
              <br />
            </React.Fragment>
          ))}
      </Drawer>
      {/* Edit Query Drawer */}
      <Drawer
        open={editQueryDrawer}
        onClose={() => {
          seteditQueryDrawer(false);
          setopenRecentQueryDrawer(true);
        }}
        width={340}
        zIndex={9999}
        extra={
          <Space>
            <AntButton type="primary" onClick={() => seteditQueryDrawer(false)}>
              Cancel
            </AntButton>
          </Space>
        }
      >
        <h2>Edit Query</h2>
        <br />
        <form action="" onSubmit={handleQueryEditSubmit}>
          <Row>
            <Col span={24}>
              <TextField
                id="outlined-basic"
                label="Firstname"
                variant="outlined"
                type="text"
                value={QueryData?.firstname}
                onChange={(e) =>
                  setQueryData((prevstate) => ({
                    ...prevstate,
                    firstname: e.target.value,
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
                label="Lastname"
                variant="outlined"
                type="text"
                value={QueryData?.lastname}
                onChange={(e) =>
                  setQueryData((prevstate) => ({
                    ...prevstate,
                    name: e.target.value,
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
                label="Email"
                variant="outlined"
                type="email"
                value={QueryData?.email}
                onChange={(e) =>
                  setQueryData((prevstate) => ({
                    ...prevstate,
                    name: e.target.value,
                  }))
                }
                sx={{ width: "100%" }}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <textarea
                name=""
                id=""
                cols={38}
                rows={8}
                placeholder="Your Message"
                style={{ borderRadius: "4px" }}
                value={QueryData?.message}
                onChange={(e) =>
                  setQueryData((prevValue) => ({
                    ...prevValue,
                    message: e.target.value,
                  }))
                }
              ></textarea>
            </Col>
          </Row>
          <br />
          <AntButton htmlType="submit" type="primary">
            Submit
          </AntButton>
        </form>
      </Drawer>
      <br />
      <br />
    </>
  );
};
export default Contact;
