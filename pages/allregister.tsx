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
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import Update1 from "../Components/Update1";

const allregister = () => {
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
  const [showdelete, setshowdelete] = useState<boolean>(false);
  const [showupdate, setshowupdate] = useState<boolean>(false);
  const [id, setId] = useState();

  const { rusers, isloading } = useSelector<any, any>(
    (state: any) => state.grand
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
      </div>
    </>
  );
};

export default allregister;
