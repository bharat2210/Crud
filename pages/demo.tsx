// Next imports
import React, { useEffect, useState } from "react";
// Redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  adddemo,
  deleteDemo,
  getdemo,
  searchuser,
  updateDemo,
} from "../Features/exp";
import { AppDispatch, RootState } from "../store";
// Mui imports
import { Container } from "@mui/material";
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
// Antd imports
import { Row, Col, Drawer, Modal } from "antd";
// Components imports
import Navbar1 from "../Components/Navbar1";
import Loader from "../Components/Loader";
// Styles imports
import edit from "../styles/edit.module.css";
import deletecss from "../styles/delete.module.css";

interface Userobject {
  name: string;
  age: number;
  email: string;
}
const demo = () => {
  const [id, setid] = useState<number>();
  const [username, setusername] = useState<string>("");
  const [updateddata, setupdateddata] = useState<Userobject>({
    name: "",
    age: 0,
    email: "",
  });
  const [showdelete, setshowdelete] = useState<boolean>(false);
  const [showupdate, setshowupdate] = useState<boolean>(false);
  const [addopen, setaddopen] = useState<boolean>(false);
  const [shownavbar, setshownavbar] = useState<boolean>(true);
  const [search, setsearch] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const demouser = useSelector((state: RootState) => state.alldemo.demouser);
  const { isloading, searchusername } = useSelector(
    (state: RootState) => state.alldemo
  );
  // console.log("demouser", demouser);
  const singledemo = demouser?.filter((data) => data._id === id)[0];
  //  console.log("singledemo",singledemo)

  useEffect(() => {
    setupdateddata(singledemo);
  }, [singledemo]);
  console.log("updateddata", updateddata);

  useEffect(() => {
    dispatch(searchuser(search));
  }, [search]);

  useEffect(() => {
    dispatch(getdemo());
  }, []);

  const onClose = () => {
    setaddopen(false);
    setshownavbar(true);
  };
  const onCloseupdate = () => {
    setshowupdate(false);
    setshownavbar(true);
  };
  const handlesubmit = (e: any) => {
    const formdata = {
      name: e.target.elements.name.value,
      age: e.target.elements.age.value,
      email: e.target.elements.email.value,
    };
    dispatch(adddemo(formdata)).then(() => {
      dispatch(getdemo());
    });

    setaddopen(false);
    setshownavbar(true);
    console.log("formdata", formdata);
  };
  if (isloading) {
    return <Loader />;
  }
  const handleupdate = (e: any) => {
    e.preventDefault();
    dispatch(updateDemo({ id: singledemo?._id, ...updateddata })).then(() =>{
      dispatch(getdemo());
      setshowupdate(false);
      setshownavbar(true);
    });
  };

  const handledelete = (userid: number, username: string) => {
    console.log("userid", userid);
    setid(userid);
    setusername(username);
    setshowdelete(true);
  };
  const confirmdelete = () => {
    dispatch(deleteDemo(id)).then(() => {
      dispatch(getdemo());
    });
    setshowdelete(false);
  };
  const canceldelete = () => {
    setshowdelete(false);
  };
  return (
    <div>
      <style>
        {`
     
     .formclass{
      width: 100%;
      padding:12px;
      border-radius:12px;

    }
     
     
     `}
      </style>
      {shownavbar && <Navbar1 />}
      {showdelete && (
        <Modal
          title="Delete User"
          open={showdelete}
          onOk={confirmdelete}
          onCancel={canceldelete}
          centered={true}
        >
          <h3>Are you sure want to delete {username} ?</h3>
        </Modal>
      )}
      <br />

      <Container>
        <Button
          onClick={() => {
            setaddopen(true);
            setshownavbar(false);
          }}
          variant="contained"
          size="small"
        >
          Add +
        </Button>

        <input
          type="search"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          style={{
            padding: "6px",
            marginLeft: "15px",
            borderRadius: "12px",
            width: "180px",
          }}
          placeholder="Search User"
        />

        <br />
        <br />
        <br />

        <TableContainer component={Paper} sx={{ width: 1100 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Email</TableCell>
                <TableCell
                  sx={{ fontSize: 18, fontWeight: 600 }}
                  colSpan={2}
                  align="left"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demouser &&
                demouser
                  .filter((item: any) => {
                    if (
                      typeof searchusername != "string" ||
                      searchusername.length === 0
                    ) {
                      return item;
                    } else {
                      return item.name
                        .toLowerCase()
                        .includes(searchusername.toLowerCase());
                    }
                  })

                  .map((data, index: number) => (
                    <TableRow key={data._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{data.name}</TableCell>
                      <TableCell>{data.age}</TableCell>
                      <TableCell>{data.email}</TableCell>
                      <TableCell
                        colSpan={2}
                        sx={{ display: "flex", gap: 2 }}
                        align="left"
                      >
                        <button
                          className={edit.edit}
                          onClick={() => {
                            setid(data._id);
                            setshowupdate(true);
                            setshownavbar(false);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handledelete(data._id, data.name)}
                          className={deletecss.delete}
                        >
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Drawer
        placement="right"
        title="Add New User"
        open={addopen}
        onClose={onClose}
      >
        <form action="#" onSubmit={handlesubmit}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <input
                type="text"
                name="name"
                className="formclass"
                placeholder="Enter Name"
              />
            </Col>
          </Row>
          <br />
          <Row gutter={[16, 16]}>
            <Col span={24}>
              {" "}
              <input
                type="number"
                name="age"
                className="formclass"
                placeholder="Enter age"
              />
            </Col>
          </Row>
          <br />
          <Row gutter={[16, 16]}>
            <Col span={24}>
              {" "}
              <input
                type="text"
                name="email"
                className="formclass"
                placeholder="Enter Email"
              />
            </Col>
          </Row>
          <br />

          <Button variant="contained" size="small" type="submit">
            Submit
          </Button>
        </form>
      </Drawer>

      <Drawer
        placement="right"
        title="Update  User"
        open={showupdate}
        onClose={onCloseupdate}
      >
        <form action="#" onSubmit={handleupdate}>
          <label htmlFor="Name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={updateddata?.name}
            onChange={(e) =>
              setupdateddata((prevstate) => ({
                ...prevstate,
                name: e.target.value,
              }))
            }
            className="formclass"
          />
          <br />
          <br />
          <label htmlFor="age">Age</label>
          <br />
          <input
            type="number"
            name="age"
            value={updateddata?.age}
            onChange={(e) =>
              setupdateddata((prevstate) => ({
                ...prevstate,
                age: Number(e.target.value),
              }))
            }
            className="formclass"
          />
          <br />
          <br />
          <label htmlFor="Email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            value={updateddata?.email}
            onChange={(e) =>
              setupdateddata((prevstate) => ({
                ...prevstate,
                email: e.target.value,
              }))
            }
            className="formclass"
          />

          <br />
          <br />
          <Button variant="contained" size="small" type="submit">
            Submit
          </Button>
        </form>
      </Drawer>
    </div>
  );
};

export default demo;
