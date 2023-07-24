// Next imports
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { pinapi } from "../Features/pin";
// Antd imports
import { DatePicker } from "antd";
import { Button, Result } from "antd";
import { Modal } from "antd";
import {
  CloseOutlined,
  SketchOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { Spin } from "antd";
// Font Awesome imports
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// Libraries imports
import { Country, State, City } from "country-state-city";
import { ICountry, IState, ICity } from "country-state-city";
import { toast } from "react-toastify";
// Components imports
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
// Num-words imports
import numWords from "num-words";


const { Text } = Typography;

const New = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const [countries, setcountries] = useState<ICountry[]>([]);
  const [state, setstate] = useState<IState[]>([]);
  const [city, setCities] = useState<ICity[]>([]);
  const [globalcode, setglobalcode] = useState<string>("");
  const [selectedCountry, setselectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastname, setlastName] = useState<string>("");
  const [address, setaddress] = useState<string>("");
  const [contactNumber, setcontactNumber] = useState<string>("");
  const [pinCode, setpinCode] = useState<string>("");
  const [selectedState, setselectedState] = useState<string>("");
  const [orderbill, setorderbill] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  const [ordersuccess, setordersuccess] = useState<boolean>(false);
  const [isvalidPincode, setisvalidPincode] = useState<boolean>(false);
  const [paymentMethod, setpaymentMethod] = useState<string>("credit");
  const [ccNumber, setccNumber] = useState<string>("");
  const [dcNumber, setdcNumber] = useState<string>("");
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.allcarts
  );
  const word = numWords(totalPrice).toUpperCase();
  useEffect(() => {
    const apicountries = Country.getAllCountries();
    setcountries(apicountries);
  }, []);
  // console.log("selectedCountry", countries);

  const handlecountrycode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countrycode = e.target.value;
    setselectedCountry(countrycode);
    setglobalcode(countrycode);
    const fetchedStates = State.getStatesOfCountry(countrycode);
    setstate(fetchedStates);
  };
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stateCode = e.target.value;
    setselectedState(stateCode);
    // console.log("stateCode", stateCode);
    const fetchedCities = City.getCitiesOfState(globalcode, stateCode);
    // console.log("fetchedcities", fetchedCities);
    setCities(fetchedCities);
    // console.log("city", city);
  };

  const handlesubmit = (e: any) => {
    e.preventDefault();
    setordersuccess(true);
  };

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  // console.log(year, month, day, hour, minute, second);

  const handlepinchange = async (e: any) => {
    const value = e.target.value;
    setpinCode(value);
    if (value.length === 6) {
      try {
        setloading(true);
        const response = await dispatch(pinapi(value));
        const result = response.payload[0];
        console.log("Result", result);
        if (result.Status === "Error") {
          setisvalidPincode(false);
          toast.error("Invalid pincode", {
            position: "top-left",
            style: {
              top:"78px",
            },
          });
          setpinCode("");
        } else {
          setisvalidPincode(true);
          toast.success("Pincode Found", {
            position: "top-left",
            style: {
              top: "78px",
            },
          });
        }
      } catch (error) {
        setisvalidPincode(false);
        return error;
      } finally {
        setloading(false);
      }
    }
  };

  // Payment_Method Function
  const paymethodchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpaymentMethod(e.target.value);
  };
  // async function fetchdata() {
  //   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsIm5hbWUiOiJCaGFyYXQiLCJlbWFpbCI6ImJrQGdtYWlsLmNvbSIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2ODk4NTA2NjAsImV4cCI6MTY4OTkzNzA2MH0.BrQ4vEaiewXzc7pUN-BiZjpjDc9ILqMFV2hmePEoYsU"
  //   try {
  //     const response = await fetch("http://mk-nest.api:5000/auth/me", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "accept": "/",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     return error;
  //   }
  // }

  return (
    <>
      <Head>
        <title>Checkout Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>
        {`
        #country{
            padding: 8px;
            border-radius: 3px;
        }
        #state{
            padding: 8px;
            border-radius: 3px;
        }

        .invoice-header {
          display: flex;
          padding: 50px 0%;
          width: 100%;
        }
        
        .title {
          font-size: 18px;
          letter-spacing: 3px;
          color: rgb(66, 66, 66);
        }
        
        .date {
          padding: 5px 0px;
          font-size: 14px;
      
          color: black;
        }
        
        .invoice-number {
          font-size: 17px;
          letter-spacing: 2px;
          color: rgb(156, 156, 156);
        }

        
        table {
          table-layout: auto;
          width: 100%;
        }
        table, th, td {
          border-collapse: collapse;
        }
        
        th {
          padding: 10px 0px;
          border-bottom: 1px solid rgb(187, 187, 187);
          border-bottom-style: dashed;
          font-weight: 400;
          font-size: 13px;
          color:black;
          text-align: left;
        
        }
        
        td{
          padding: 10px 0px;
          border-bottom: 0.5px solid rgb(226, 226, 226);
          border-bottom-style: dashed;
          text-align: left;
        }
        
        .dashed {
          border-bottom: 1px solid rgb(187, 187, 187);
          border-bottom-style: dashed;
        }
        
        .total {
          font-weight: 800;
          font-size: 20px !important;
          color: black;
        }
        
   
        
      
        
       
        
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
         
          .invoice-container {
              border: solid 1px gray;
              width: 48%;
              height: 650px;
              margin: 50px auto;
              padding: 30px;
              border-radius: 5px;
              background: white;
        
        
          .title-date {
              width: 50%;
          }
          .invoice-number {
              width: 50%;
          }
          .space {
              width: 80%;
              display:flex;
              flex-direction:column;
          }
        }
        .product{
          max-width: 170px;
          text-align: left;
          font-size: 15px;
          padding: 10px;
          border: none;
          outline: none;
        
        }
        .overlay{
          position: fixed;
          margin-right:auto;
          margin-left:auto;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index:9999;
        
     
        }
        .animation{
          animation: fade 0.3s;
        }
        @keyframes fade {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      
        
      
      
  
        
        
        
        
        
        `}
      </style>

      {loading && (
        <Spin style={{ position: "absolute", top: "708px", left: "300px" }} />
      )}

      {/* Billing (Invoice) */}
      {orderbill && (
        <div className="overlay">
          <div
            className="invoice-container animation"
            style={{
              position: "relative",
              overflowX: "hidden",
              overflowY: "auto",
            }}
          >
            <div className="invoice-header">
              <div className="title-date">
                <h3 style={{ fontWeight: "bolder", color: "dodgerblue" }}>
                  <SketchOutlined /> Shopeee
                </h3>
                <h6>INVOICE</h6>
                <p className="date">{`${date}`}</p>
                <h6>Shipping Address</h6>
                <p style={{ lineHeight: "17px" }}>
                  To <br />
                  {name} {lastname} <br />
                  {address}, {selectedCity},<br />
                  {pinCode} {selectedState},{selectedCountry} <br />
                  Mob: {contactNumber} <br />
                  <br />
                  Payment Method: By{" "}
                  {paymentMethod === "Debit"
                    ? `Debit Card Ending With XXXX X${dcNumber
                        ?.toString()
                        .slice(13, 16)}`
                    : paymentMethod === "Credit"
                    ? `Credit Card Ending With XXXX X${ccNumber
                        ?.toString()
                        .slice(13, 16)}`
                    : paymentMethod}
                </p>
              </div>
              <div className="space"></div>
              <CloseOutlined
                style={{
                  position: "absolute",
                  left: "715px",
                  top: "5px",
                  fontSize: "24px",
                }}
                onClick={() => setorderbill(false)}
              />
            </div>
            <div className="invoice-body">
              <table>
                <thead>
                  <th style={{ paddingLeft: "12px" }}>PRODUCT</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Amount</th>
                </thead>

                <tbody id="table-body">
                  {cart &&
                    cart.map((data) => (
                      <tr className="single-row" key={data._id}>
                        <td>
                          <p>{data.title}</p>
                        </td>
                        <td>
                          <p>{data.quantity}</p>
                        </td>
                        <td>
                          <p>{data.price}</p>
                        </td>
                        <td>
                          <p>{data.price * data.quantity}</p>
                        </td>
                      </tr>
                    ))}

                  <div id="sum">
                    <h5>Total Amount:</h5>
                    <p style={{ lineHeight: "8px" }}>
                      <p style={{ fontSize: "18px", fontWeight: "600" }}>
                        ₹{totalPrice}/-
                      </p>
                      <p style={{ width: "140px", fontSize: "9px" }}>
                        ({word})
                      </p>
                    </p>
                  </div>
                  <div
                    className="signatory"
                    style={{ position: "absolute", left: "570px" }}
                  >
                    <img src="sign.png" alt="" height={70} width={180} />
                    <p style={{ fontSize: "12px", textAlign: "center" }}>
                      Authorised Signatory
                    </p>
                  </div>

                  <br />
                  <button
                    style={{
                      padding: "6px",
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "8px",
                      width: "100px",
                    }}
                    onClick={() => alert("Printed")}
                  >
                    Print{" "}
                    <i
                      className="fa-solid fa-print"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </button>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {/* Order Successfull */}
      {ordersuccess && (
        <Modal
          title={`Order ID: ${year}${month + 1}${day}${hour}${minute}${second}`}
          open={ordersuccess}
          onCancel={() => setordersuccess(false)}
          onOk={() => setordersuccess(false)}
          okText="OK"
        >
          <Result
            status="success"
            title="Successfully Purchased"
            subTitle={`${date}`}
            extra={[
              <Button
                type="primary"
                key="console"
                onClick={() => router.push("/Apiproducts")}
              >
                Go to Home page
              </Button>,
              <Button
                key="buy"
                onClick={() => {
                  setordersuccess(false);
                  setorderbill(true);
                }}
              >
                View Order Details
              </Button>,
            ]}
          />
        </Modal>
      )}

      <Navbar1 />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js"
      />

      {/* <button onClick={fetchdata}>Fetch</button> */}

      <div className="container animation">
        <div className="py-5 text-center">
          {/* <h2>Checkout</h2> */}
          <Text mark style={{ fontSize: "30px" }}>
            Checkout
          </Text>
        </div>

        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">
                {totalQuantity}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {cart &&
                cart.map((data: any) => (
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">
                        <strong>Name:{""}</strong>
                        {data.title}
                      </h6>
                      <small className="text-muted">
                        <strong>Storage:{""}</strong> {data.storage}
                      </small>
                      <br />
                      <small className="text-muted">
                        <strong>Quantity:{""}</strong> {data.quantity}
                      </small>
                      <br />
                      <h6 className="my-0">
                        <strong>Price:{""}</strong> {data.price}
                      </h6>
                      <br />
                    </div>
                    <br />

                    <span>
                      <img src={data.img} alt="" height={65} width={80} />
                    </span>
                  </li>
                ))}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total: ₹(incl. of all taxes )</span>
                <strong>{totalPrice}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" onSubmit={handlesubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Valid First name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value={lastname}
                    onChange={(e) => setlastName(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid Last name is required.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address2">
                  Address 2 <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select
                    className="custom-select d-block w-100"
                    id="country"
                    required
                    value={selectedCountry}
                    onChange={handlecountrycode}
                  >
                    {countries &&
                      countries.map((data: any) => (
                        <option value={data.isoCode} key={data.isoCode}>
                          {data.name}
                        </option>
                      ))}
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    required
                    value={selectedState}
                    onChange={handleStateChange}
                  >
                    {state &&
                      state.map((data) => (
                        <option key={data.isoCode} value={data.isoCode}>
                          {data.name}
                        </option>
                      ))}
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">City</label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    required
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    {city &&
                      city.map((data) => (
                        <option key={data.name}>{data.name}</option>
                      ))}
                  </select>

                  <div className="invalid-feedback">City is required</div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">ZipCode</label>
                  <input
                    required
                    type="text"
                    pattern="[0-9]{6}"
                    maxLength={Number("6")}
                    value={pinCode}
                    style={{
                      border: "2px solid black",

                      borderColor: isvalidPincode ? "green" : "black",
                      outlineColor: isvalidPincode ? "green" : "red",
                    }}
                    onChange={handlepinchange}
                  />

                  <div className="invalid-feedback">ZipCode is required</div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Mobile</label>
                  <input
                    required
                    type="text"
                    pattern="[0-9]{10}"
                    maxLength={Number("10")}
                    value={contactNumber}
                    onChange={(e) => setcontactNumber(e.target.value)}
                  />

                  <div className="invalid-feedback">ZipCode is required</div>
                </div>
              </div>
              <hr className="mb-4" />

              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                />
                <label className="custom-control-label" htmlFor="save-info">
                  Save this information for next time
                </label>
              </div>
              <hr className="mb-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    value="Credit"
                    className="custom-control-input"
                    checked={paymentMethod === "Credit"}
                    required
                    onChange={paymethodchange}
                  />
                  <label className="custom-control-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    value="Debit"
                    checked={paymentMethod === "Debit"}
                    className="custom-control-input"
                    required
                    onChange={paymethodchange}
                  />
                  <label className="custom-control-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                    value="UPI"
                    checked={paymentMethod === "UPI"}
                    onChange={paymethodchange}
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    UPI/GooglePay/Paytm/PhonePe
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="cod"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={paymethodchange}
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    Pay on Delivery (POD)
                  </label>
                </div>
              </div>
              <div
                className="row"
                style={{ display: paymentMethod === "COD" ? "none" : "block" }}
              >
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder={
                      paymentMethod === "UPI" ? " Name" : "Name on Card"
                    }
                    required
                  />
                  <small className="text-muted">
                    {paymentMethod === "UPI" ? "" : "Full Name as on Card"}
                  </small>
                  <div className="invalid-feedback">Name is required</div>
                </div>
                <div
                  className="col-md-6 mb-3"
                  style={{
                    display: paymentMethod === "Credit" ? "block" : "none",
                  }}
                >
                  <label htmlFor="cc-number">Credit card number</label>
                  <input
                    type="text"
                    name="cc-number"
                    className="form-control"
                    value={ccNumber}
                    onChange={(e) => setccNumber(e.target.value)}
                    id="cc-number"
                    pattern="[0-9]{16}"
                    maxLength={Number("16")}
                    placeholder="Enter Card Number"
                    required={paymentMethod === "Credit"}
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
                {/* Debit Card number */}
                <div
                  className="col-md-6 mb-3"
                  style={{
                    display: paymentMethod === "Debit" ? "block" : "none",
                  }}
                >
                  <label htmlFor="cc-number">Debit card number</label>
                  <input
                    type="text"
                    name="dc-number"
                    value={dcNumber}
                    onChange={(e) => setdcNumber(e.target.value)}
                    className="form-control"
                    id="dc-number"
                    pattern="[0-9]{16}"
                    maxLength={Number("16")}
                    placeholder="Enter Card Number"
                    required={paymentMethod === "Debit"}
                  />
                  <div className="invalid-feedback">
                    Debit card number is required
                  </div>
                </div>
                <div
                  className="col-md-6 mb-3"
                  style={{
                    display: paymentMethod === "UPI" ? "block" : "none",
                  }}
                >
                  <label htmlFor="cc-number">Upi-id/G-Pay Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    placeholder="Enter Upi-id/G-Pay Number"
                    required={paymentMethod === "UPI"}
                  />
                  <div className="invalid-feedback">Upi id is required</div>
                </div>
              </div>
              <div
                className="row"
                style={{ display: paymentMethod === "COD" ? "none" : "block" }}
              >
                <div
                  className="col-md-3 mb-3"
                  style={{
                    display: paymentMethod === "UPI" ? "none" : "block",
                  }}
                >
                  <label htmlFor="cc-expiration">Expiration</label>
                  <DatePicker picker="month" placeholder="MM/YYYY" format="MM/YY" />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div
                  className="col-md-3 mb-3"
                  style={{
                    display: paymentMethod === "UPI" ? "none" : "block",
                  }}
                >
                  <label htmlFor="cc-cvv">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    pattern="[0-9]{3}"
                    maxLength={Number("3")}
                    placeholder="3 Digits CVV"
                    required={
                      paymentMethod === "Credit" || paymentMethod === "Debit"
                    }
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
      <br /><br /><br />
    
      <Footer/>
    </>
  );
};
export default New;
