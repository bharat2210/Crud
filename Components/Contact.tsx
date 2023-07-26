// Next imports
import React, { useState } from "react";
// Antd imports
import { Col, Modal, Row } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { Result } from "antd";
// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { createmessages } from "../Features/message";
import { AppDispatch, RootState } from "../store";
// Components imports
import Loader from "./Loader";
import { json } from "stream/consumers";

const Contact = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isloading } = useSelector((state: RootState) => state.allmessages);
  const [firstname, setfirstName] = useState<string>("");
  const [lastname, setlastName] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const[requestbyname,setrequestbyname] = useState<string>("");
  const[requestbyemail,setrequestbyemail] = useState<string>("");
  const [sendmessage, setsendmessage] = useState<boolean>(false);

  // const userinfo={
  //   fisrtname:firstname,
  //   lastname:lastname,
  //   email:email,
  //   message:message
  // }
  const data= { firstname,email}
  const handlesubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(createmessages({ firstname, lastname, email, message })).then(
      () => {
       
        localStorage.setItem("createmessages",JSON.stringify(data))
        const datagot= getStoredData();
        console.log("localstorage",datagot)
        const gotname=datagot.firstname;
        const gotemail=datagot.email;
        setrequestbyname(gotname)
        setrequestbyemail(gotemail)
        setsendmessage(true);
        setfirstName("");
        setlastName("");
        setemail("");
        setMessage("");
      }
    ); // console.log(e)
  };
  if (isloading) {
    return <Loader />;
  }
  const getStoredData = () => {
    const data = localStorage.getItem("createmessages");
    if (data) {
      return (JSON.parse(data));
      
    }
    return null;
  
  };
  const clearStoredData = () => {
    localStorage.removeItem("createmessages")
  }
const onok=()=>{
  setsendmessage(false);
  clearStoredData();
}
const oncancel=()=>{
  setsendmessage(false);
  clearStoredData();
}   
 

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@500&family=Roboto&display=swap" rel="stylesheet"/>
      <style>
        {`
        body{
          font-family: 'Heebo', sans-serif;
          background-image:url("https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80");
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
            `}
      </style>
      {sendmessage && (
        <Modal
          open={sendmessage}
          centered={true}
          cancelText="Close"
          onOk={() => {onok()}}
          onCancel={() => {oncancel()}}
        >
          <Result
            icon={<SmileOutlined />}
            title={`Thankyou , we have received your message ${requestbyname}. Our team will shortly contact you via email ${requestbyemail}`}
          />
        </Modal>
      )}
      <div className="main-container" style={{width:"100%",height:"auto",backgroundColor:"transparent"}}>
        <h1 style={{ textAlign: "center", color: "black" }}>Contact Us</h1><br />
        <div className="row">
          <div className="column1">
            <h2 style={{ color: "rgb(25,118,210)" }}>
              We would Love to hear from you
            </h2>
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
            </p><br />
            <p style={{ fontWeight: "900", color: "green" }}>
              Available 24X7 Just for you <br />
              TollFree Number : 1800 180 3000
            </p>
          </div><br />
          <div className="column2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1587.958537621464!2d76.6978035315703!3d30.71333548648994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefd89ee56eeb%3A0x489a927bc5c0de0a!2sWiznox%20Technologies!5e0!3m2!1sen!2sin!4v1690261761317!5m2!1sen!2sin"
              width="500"
              height="400"
              style={{ border: "0",borderRadius:"12px" }}
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
          padding:"0px 0px 8px 0px",
          marginTop:"50px"
        }}
      >
        <br /><br /><br />
        <h1 style={{ textAlign: "center", color: "black" }}>
        Share your valuable feedback, suggestions !
        </h1>
        <h2 style={{ textAlign: "center", color: "black" }}>
          We Care about you ❤️
        </h2>
        <br /><br />
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
                  cols={102}
                  rows={16}
                  style={{ borderRadius: "12px", border: "none",color:"black",fontWeight:"900" }}
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
      <br />
      <br />
    </div>
  );
};
export default Contact;
