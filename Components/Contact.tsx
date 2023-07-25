// Next imports
import React, { useState } from "react";
// Antd imports
import { Col, Modal, Row, message } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { createmessages } from "../Features/message";
import { AppDispatch, RootState } from "../store";
// Components imports

const Contact = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isloading } = useSelector((state: RootState) => state.allmessages);
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");
  const [sendmessage, setsendmessage] = useState<boolean>(false);
  const handlesubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(createmessages({ firstname, lastname, email, message })).then(
      () => {
        setsendmessage(true);
        setfirstName("");
        setlastName("");

        setMessage("");
      }
    );

    // console.log(e)
  };

  return (
    <div>
      <style>
        {`
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
              background: royalblue;
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
              top: 30px; /* Adjust the top position */
              left: 20px; /* Adjust the left position */
              color: #888; /* Placeholder text color */
              font-size: 18px; /* Placeholder text font size */
            }
           
         
            
            
            
            
            
            
            
            
            
            
            
            `}
      </style>
      {sendmessage && (
        <Modal
          open={sendmessage}
          centered={true}
          onOk={() => setsendmessage(false)}
        >
          <Result
            icon={<SmileOutlined />}
            title={`Great, we have received your message. Our team will shortly contact you via email ${email}`}
          />
        </Modal>
      )}
      <div className="main-container">
        <h1 style={{ textAlign: "center", color: "GrayText" }}>Contact Us</h1>
        <div className="row">
          <div className="column1">
            <h2 style={{ color: "dodgerblue" }}>
              We would Love to hear from you
            </h2>

            <p style={{ width: "430px", textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vestibulum ipsum sed felis laoreet, ut luctus nulla pulvinar.
              Nullam eleifend erat eget lacinia sodales. Nunc rutrum sit amet
              ligula ac cursus. Cras auctor dolor vitae tristique tempor .Nullam
              efficitur, risus lacinia bibendum posuere, nisl justo ultrices
              sapien, sed pharetra nisi elit eget ex.
            </p>

            <p style={{ width: "450px" }}>
              {" "}
              Nullam efficitur, risus lacinia bibendum posuere, nisl justo
              ultrices sapien, sed pharetra nisi elit eget ex. Mauris maximus
              lorem et leo sodales, in porttitor eros consectetur.
            </p>
            <br />

            <p>Available 24X7 Just for you</p>
          </div>
          <div className="column2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1587.958537621464!2d76.6978035315703!3d30.71333548648994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefd89ee56eeb%3A0x489a927bc5c0de0a!2sWiznox%20Technologies!5e0!3m2!1sen!2sin!4v1690261761317!5m2!1sen!2sin"
              width="500"
              height="400"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <br />
      <div
        className="main-container2"
        style={{
          backgroundColor: "rgb(230,228,228)",
          height: "450px",
          width: "100%",
          borderRadius: "18px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Take a message</h1>
        <h2 style={{ textAlign: "center" }}>We Care about you</h2>
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
                    padding: "12px",
                    borderRadius: "50px",
                    border: "none",
                  }}
                  placeholder="First Name"
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
                    padding: "12px",
                    borderRadius: "50px",
                    border: "none",
                  }}
                  placeholder="Last Name (Optional)"
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
                    padding: "12px",
                    borderRadius: "50px",
                    border: "none",
                  }}
                  placeholder="Enter your Email"
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
                  rows={12}
                  style={{ borderRadius: "12px", border: "none" }}
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
