"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import edit from "../styles/edit.module.css";
import styles from "../styles/delete.module.css";
import Navbar1 from "../Components/Navbar1";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteuser, readuser } from "../Features/register";
import Loader from "../Components/Loader";
import prompt from "../styles/prompt.module.css";

import Update1 from "../Components/Update1";
import { useRouter } from "next/router";
import { AppDispatch, RootState } from "../store";

const allregister = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const [showdelete, setshowdelete] = useState<boolean>(false);
  const [showupdate, setshowupdate] = useState<boolean>(false);
  const [id, setId] = useState();

  const { rusers, isloading } = useSelector<any, any>(
    (state:RootState) => state.grand
  );
  useEffect(() => {
    dispatch(readuser());
    console.log("read users are", rusers);
  }, []);

  const handledelete = (userId: number) => {
    setshowdelete(true);
    setId(userId);
  };
  const confirmhandledelete = () => {
    dispatch(deleteuser(id));
    setshowdelete(false);
    dispatch(readuser());
  };
  if (isloading) {
    return <Loader />;
  }
  const goback = () => {
    router.back();
  };
  return (
    <>
      <Navbar1 />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      {showdelete && (
        <div className={prompt.modal}>
          <div className={prompt.modalContent}>
            <p>Are you sure you want to delete this user?</p>
            <div className={prompt.modalButtons}>
              <button onClick={confirmhandledelete}>Yes</button>
              <button onClick={() => setshowdelete(false)}>No</button>
            </div>
          </div>
        </div>
      )}
      {showupdate && <Update1 id={id} setshowupdate={setshowupdate} />}

      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <TableContainer component={Paper} sx={{ width: 1100 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  ID
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  Name
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  Email
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  Password
                </TableCell>
                <TableCell sx={{ fontSize: 18, fontWeight: 800 }} align="left">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rusers &&
                rusers.map((element: any) => (
                  <TableRow key={element.id}>
                    <TableCell>{element.id}</TableCell>
                    <TableCell>{element.name}</TableCell>
                    <TableCell>{element.email}</TableCell>
                    <TableCell>{element.password}</TableCell>
                    <TableCell sx={{ display: "flex", gap: 2 }} align="left">
                      <button
                        className={edit.edit}
                        onClick={() => {
                          setshowupdate(true);
                          setId(element.id);
                        }}
                      >
                        Edit <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        className={styles.delete}
                        onClick={() => handledelete(element.id)}
                      >
                        Delete <i className="fa-solid fa-trash"></i>
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div><br /><br />
      <button
        onClick={goback}
        style={{
          padding: "12px",
          fontSize: "13px",
          fontWeight:"bold",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "100px",
          marginLeft:"242px"
        }}
      >
        Back to prev page
      </button>
    </>
  );
};

export default allregister;
