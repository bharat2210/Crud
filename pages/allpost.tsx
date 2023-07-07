"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/delete.module.css";
import edit from "../styles/edit.module.css";
import { useEffect, useState } from "react";
import { deleteuser, searchuserata, showuser } from "../Features/userdetail";
import Loader from "../Components/Loader";
import prompt from "../styles/prompt.module.css";
import Update from "../Components/Update";
import Create from "../Components/Create";
import Navbar1 from "../Components/Navbar1";
import moment from "moment";
import { useRouter } from "next/router";
import { AppDispatch, RootState } from "../store";

import Head from "next/head";

const Allpost = () => {
  const router = useRouter();

  const dispatch: AppDispatch = useDispatch();
  const [id, setId] = useState<number>();
  const [username, setusername] = useState<string>();

  const [showconfirm, setshowconfirm] = useState<boolean>(false);
  const { users, isloading, searchdata } = useSelector(
    (state: RootState) => state.app
  );

  const [showpopup, setshowpopup] = useState<boolean>(false);
  const [showcreate, setshowcreate] = useState<boolean>(false);
  const [search, setsearch] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    dispatch(showuser());
    console.log("users are", users);
  }, []);
  useEffect(() => {
    dispatch(searchuserata(search));
  }, [search]);
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem("user"));
    if (name) {
      setLoggedInUser(name.name);
    }
  });

  const handledelete = (userId:number, username: string) => {
    setshowconfirm(true);
    setId(userId);
    setusername(username);
  };
  const confirmhandledelete = () => {
    dispatch(deleteuser(id));
    dispatch(showuser())
    setshowconfirm(false);
  };
  if (isloading) {
    return <Loader />;
  }
  const goback = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Crud App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>
        {`
   .add{

    border-radius:12px;
    color:white;
  width:80px;
    background-color:black;;
  
  
   }
   .fa-user-plus{
    font-size:15px
   }
   .upper{
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:780px;
    margin-top:14px;
   }
 


   
   `}
      </style>
      <Navbar1 />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {showconfirm && (
        <div className={prompt.modal}>
          <div className={prompt.modalContent}>
            <p>Are you sure you want to delete "{username}" ?</p>
            <div className={prompt.modalButtons}>
              <button onClick={confirmhandledelete}>Yes</button>
              <button onClick={() => setshowconfirm(false)}>No</button>
            </div>
          </div>
        </div>
      )}
      {showcreate && <Create setshowcreate={setshowcreate} />}
      {showpopup && <Update id={id} setshowpopup={setshowpopup} />}
      <h2 style={{ textAlign: "center" }}>Welcome "{loggedInUser}"🎉</h2>
      <div className="upper">
        <button onClick={() => setshowcreate(true)} className="add">
          <i className="fa-solid fa-user-plus"></i>
        </button>
        <TextField
          id="outlined-basic"
          label="Search Record..."
          variant="outlined"
          size="small"
          className="search"
          onChange={(e) => setsearch(e.target.value)}
          InputProps={{
            style: {
              borderRadius: "10px",
            },
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <TableContainer component={Paper} sx={{ width: 1100 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  SNo.
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  Name
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  Age
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  Email
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
              {users &&
                users
                  .filter((details: any) => {
                    if (searchdata.length === 0) {
                      return details;
                    } else {
                      return details.E_name.toLowerCase().includes(
                        searchdata.toLowerCase()
                      );
                    }
                  })

                  .map((details: any,index:number) => (
                    <TableRow key={details._id}>
                      <TableCell align="left" sx={{ fontWeight: 800 }}>
                        {index+1}.
                      </TableCell>
                      <TableCell align="left">{details.E_name}</TableCell>
                      <TableCell align="left">{details.E_age}</TableCell>
                      <TableCell align="left">{details.E_email}</TableCell>
                      <TableCell
                        colSpan={2}
                        sx={{ display: "flex", gap: 2 }}
                        align="left"
                      >
                        <button
                          className={edit.edit}
                          onClick={() => {
                            setshowpopup(true);
                            setId(details._id);
                          }}
                        >
                          Edit <i className="fa-solid fa-pen-to-square"></i>
                        </button>

                        <button
                          className={styles.delete}
                          onClick={() =>
                            handledelete(details._id, details.E_name)
                          }
                        >
                          Delete <i className="fa-solid fa-trash"></i>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <br />
      <h5 style={{ marginLeft: "250px" }}>Created:</h5>
      <span>
        <b style={{ marginLeft: "250px" }}>
          {moment("20230604", "YYYYMMDD").fromNow()}
        </b>
      </span>
      <br />
      <br />
      <button
        onClick={goback}
        style={{
          padding: "12px",
          fontSize: "13px",
          fontWeight: "bold",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "100px",
          marginLeft: "242px",
        }}
      >
        Back to prev page
      </button>
    </>
  );
};

export default Allpost;
