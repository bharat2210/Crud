import React, { useState, useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useSelector } from "react-redux";
import Navbar1 from "../Components/Navbar1";
import { DatePicker } from "antd";
import { RootState } from "../store";
import { Button, Result } from "antd";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { Country,State,City } from "country-state-city";
import { ICountry, IState, ICity } from "country-state-city";

const New = () => {
  const [countries, setcountries] = useState<ICountry[]>([]);
  const [state, setstate] = useState<IState[]>([]);
  const [city, setCities] = useState<ICity[]>([]);
  const [globalcode, setglobalcode] = useState<string>("");
  const [selectedCountry, setselectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setselectedState] = useState("");

  useEffect(() => {
    const apicountries = Country.getAllCountries();
    setcountries(apicountries);
  
  }, []);
  console.log("selectedCountry", countries);

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
    console.log("stateCode", stateCode);
    const fetchedCities = City.getCitiesOfState(globalcode, stateCode);
    console.log("fetchedcities", fetchedCities);
    setCities(fetchedCities);
    console.log("city", city);
  };

  const router = useRouter();

  const [ordersuccess, setordersuccess] = useState(false);

  const { cart, totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.allcarts
  );

  const handlesubmit = (e: any) => {
    e.preventDefault();
    setordersuccess(true);
  };

  const [name, setName] = useState<string>("");
  const [lastname, setlastName] = useState<string>("");
  return (
    <>
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
      
        
      
      
  
        
        
        
        
        
        `}
      </style>
      {ordersuccess && (
        <Modal
          title="Order Success"
          open={ordersuccess}
          onCancel={() => setordersuccess(false)}
          okText="Yes"
        >
          <Result
            status="success"
            title="Successfully Purchased"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
              <Button
                type="primary"
                key="console"
                onClick={() => router.push("/Apiproducts")}
              >
                Go to Home page
              </Button>,
              <Button key="buy" onClick={() => setordersuccess(false)}>
                Buy Again
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
      <div className="overlay">
        <div className="container animation">
          <div className="py-5 text-center">
            <h2>Checkout form</h2>
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
                          <strong>Name: </strong>
                          {data.title}{" "}
                        </h6>
                        <small className="text-muted">
                          <strong>Storage: </strong> {data.storage}
                        </small>
                        <br />
                        <small className="text-muted">
                          <strong>Quantity: </strong> {data.quantity}
                        </small>
                        <br />
                        <h6 className="my-0">
                          <strong>Price: </strong> {data.price}
                        </h6>
                        <br />
                      </div>
                      <br />

                      {/* <span className="text-muted">₹ {data.price}</span> */}
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
                      Valid first name is required.
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
                      Valid last name is required.
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
                      {city && city.map((data) => <option key={data.name}>{data.name}</option>)}
                    </select>

                    <div className="invalid-feedback">City is required</div>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="same-address"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="same-address"
                  >
                    Shipping address is the same as my billing address
                  </label>
                </div>
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
                      className="custom-control-input"
                      checked
                      required
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
                      className="custom-control-input"
                      required
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
                    />
                    <label className="custom-control-label" htmlFor="paypal">
                      PayPal
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Name on card</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder="Name on card"
                      required
                    />
                    <small className="text-muted">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Credit card number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      pattern="[0-9]{16}"
                      maxLength={Number("16")}
                      placeholder="Enter Card Number"
                      required
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">Expiration</label>
                    <DatePicker picker="month" placeholder="YYYY/MM" />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-cvv">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      pattern="[0-9]{3}"
                      maxLength={Number("3")}
                      placeholder="3 Digits CVV"
                      required
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
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
      </div>
      <br />
      <br />
    </>
  );
};

export default New;
