// Next imports
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
// Redux imports
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseitem,
  deleteallitems,
  getCartTotal,
  increaseitem,
  removeitem,
} from "../Features/productsslice";
import { AppDispatch, RootState } from "../store";
// Antd imports
import { InfoCircleOutlined } from "@ant-design/icons";
// Mui imports
import { Button, Stack, Typography } from "@mui/material";
// Styles imports
import prompt from "../styles/prompt.module.css";
import styles from "../styles/confirm.module.css";
// Font Awesome imports
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// Components imports


const Cart = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const [stock, setstock] = useState(false);
  const [outofstocktitle, setoutofstocktitle] = useState<any[]>([]);
  const [showdelete, setshowdelete] = useState<boolean>(false);
  const [empty, setempty] = useState<boolean>(false);
  const { cart, totalQuantity, totalPrice, apiproducts } = useSelector(
    (state: RootState) => state.allcarts
  );

  // console.log("cart", cart);
  // console.log("items", items);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const handle = () => {
    if (cart.length === 0) {
      setempty(true);
    } else {
      setshowdelete(true);
    }
  };
  const confirmdelete = () => {
    dispatch(deleteallitems());
    setshowdelete(false);
  };

  // useEffect(()=>{
  //   const cartqvalue = localStorage.getItem('cart')

  // const qvalue= JSON.parse(cartqvalue)
  //   console.log("qvalue"+ qvalue)
  // },[])

  const checkout = () => {
    const outOfStockItemsArray = [];

    for (const cartItem of cart) {
      const matchingItem = apiproducts.find(
        (item: any) => item._id === cartItem._id
      );
      if(matchingItem && cartItem.quantity > matchingItem.stock) {
        outOfStockItemsArray.push(cartItem.title);
        //  alert(`${cartItem.title} is out of stock`);
      }
    }
    if (outOfStockItemsArray.length > 0) {
      setoutofstocktitle(outOfStockItemsArray);
      setstock(true);
    } else if (cart.length === 0) {
      setempty(true);
    } else if (cart.some((item) => item.quantity === 0 || item.quantity < 0)) {
      alert("Quantity must be greater than zero for all items before checkout");
    } else {
      router.push("/Checkout");
    }
  };
  const handleincrease = (value: any) => {
    // console.log("value: " + value.id);
    dispatch(increaseitem(value._id));

    // const cartqvalue = JSON.parse(localStorage.getItem('cart'));

    // // Check if the cart exists and has a quantity property
    // if (cartqvalue && cartqvalue.quantity) {
    //   // Increment the quantity property by 1
    //   cartqvalue.quantity += 1;

    //   // Update the cart object in local storage
    //   localStorage.setItem('cart', JSON.stringify(cartqvalue));
    // }
  };

  return (
    <div>
      <Head>
        <title>Cart Page</title>

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>
        {`
      body{
       background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
       }
      .alert-prompt {
       position: fixed;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       background-color: #fff;
       border: 1px solid #ccc;
       padding: 20px;
       text-align: center;
       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
       animation: alertPromptAnimation 0.3s ease;
       }

     @keyframes alertPromptAnimation{
      0%{
        opacity: 0;
        transform: translate(-50%, -60%);
      }
      100%{
        opacity: 1;
        transform: translate(-50%, -50%);
      }
      }

     .close-btn {
       padding: 8px 16px;
       background-color: #ccc;
       border: none;
       color: #fff;
       font-size: 14px;
       cursor: pointer;
       transition: background-color 0.3s ease;
      }      

    .close-btn:hover{
       background-color: #aaa;
      }
   


    
    
    `}
      </style>
      {showdelete && (
        <div className={prompt.modal}>
          <div className={prompt.modalContent}>
            <p style={{ fontWeight: "600" }}>
              Are you sure you want to delete all items ?
            </p>
            <Typography variant="body2" sx={{ color: "red" }}>
              This action can't be undone
            </Typography>
            <div className={prompt.modalButtons}>
              <button onClick={confirmdelete}>Yes</button>
              <button onClick={() => setshowdelete(false)}>No</button>
            </div>
          </div>
        </div>
      )}
      {empty && (
        <div className={styles.prompt}>
          <div className={styles.main}>
            <p className={styles.message}>Cart is already empty !!!</p>
            <button className={styles.okButton} onClick={() => setempty(false)}>
              OK
            </button>
          </div>
        </div>
      )}
      {stock && (
        <div className={styles.prompt}>
          <div className={styles.main}>
            <InfoCircleOutlined
              style={{ fontSize: "22px", fontWeight: "900", color: "red" }}
            />
            <p className={styles.message}>
              {outofstocktitle.length === 1
                ? `${outofstocktitle[0]} is out of stock`
                : `${outofstocktitle} are out of stock`}
            </p>
            <p>Either remove it or wait when it is in stock </p>
            <button className={styles.okButton} onClick={() => setstock(false)}>
              OK
            </button>
          </div>
        </div>
      )}

      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cart.length} items</h5>
                </div>
                <div className="card-body">
                  {cart.map((data: any) => (
                    <div className="row" key={data._id}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img src={data.img} className="w-100" alt="Images" />
                          <a href="#!">
                            <div className="mask"></div>
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{data.title}</strong>
                        </p>
                        <p>Color: {data.color}</p>
                        <p>Capacity: {data.storage}</p>

                        <button
                          type="button"
                          className="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                          onClick={() => dispatch(removeitem(data._id))}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <button
                            className="btn btn-primary px-3 me-2"
                            onClick={() => {
                              dispatch(decreaseitem(data._id));
                            }}
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <div className="form-outline">
                            <label>Quantity</label>
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={data.quantity}
                              type="number"
                              className="form-control"
                              onChange={() => null}
                            />
                          </div>

                          <button
                            className="btn btn-primary px-3 ms-2"
                            onClick={() => handleincrease(data)}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>

                        <p className="text-start text-md-center">
                          <strong>₹ {data.price}</strong>
                        </p>
                      </div>
                    </div>
                  ))}

                  <hr className="my-4" />
                  <Stack spacing={2} direction="row-reverse">
                    <Button onClick={handle} variant="outlined">
                      Delete all items
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => router.push("/Apiproducts")}
                      sx={{ backgroundColor: "#3b71ca" }}
                    >
                      Add Items
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount </strong>
                      </div>
                      <span>
                        <strong>₹ {totalPrice}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    onClick={checkout}
                  >
                    Go to checkout ♥
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
