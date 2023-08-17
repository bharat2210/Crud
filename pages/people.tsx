// Next imports
import React, { useEffect, useState } from "react";
// MUI imports
import { Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { addperson, deleteperson, getPerson, updatePerson } from "../Features/crud";
// AntD imports
import { Button, Drawer, Popconfirm } from "antd";
// Libraries imports
import { toast } from "react-toastify";
import Loader from "../Components/Loader";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const people = () => {
  const [adddrawer, setadddrawer] = useState(false);
  const [editDrawer, seteditdrawer] = useState(false);
  const [deleteId, setdeleteId] = useState<number>(0);
  const [editId, seteditId] = useState<number>(0);
  const [updatedData, setupdatedData] = useState({name:"",age:0,email:""})
  const [name, setname] = useState<string>("");
  const [age, setage] = useState<number>(0);
  const [email, setemail] = useState<string>("");
  const[username,setusername]=useState<string>("")
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getPerson());
  },[]);
  const { peoples, isloading } = useSelector(
    (state: RootState) => state.allpeople
  );
  console.log("people", peoples);
  
const singlePerson = peoples.filter((data)=>data._id === editId)[0]
console.log("singlePerson", singlePerson);

useEffect(()=>{
    setupdatedData(singlePerson)
},[singlePerson]);


  const handleAdduser = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addperson({ name, age, email })).then(() => {
      dispatch(getPerson());
      setadddrawer(false);
      toast.success("User added successfully", {
        position: "top-right",
        style: {
          top: "78px",
        },
      });
    });
  };

  const handledelete=()=>{
    dispatch(deleteperson(deleteId)).then(()=>{
        dispatch(getPerson());
        setadddrawer(false);
        toast.success("User deleted successfully", {
            position:"top-right",
            style:{
                top:"78px"
            }
        })
    })
  }
 
  const handleUpdate=(e:React.FormEvent)=>{
   e.preventDefault();
   dispatch(updatePerson({id:singlePerson._id,...updatedData})).then(()=>{
    seteditdrawer(false);
    dispatch(getPerson());
   })
   console.log(e)
  }

  if (isloading) {
    return <Loader />;
  }
  return (
    <div>
      
      <Button
        type="primary"
        onClick={() => setadddrawer(true)}
        style={{ marginLeft: "215px",marginTop:"50px" }}
      >
        Add User
      </Button><br /><br />

      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{fontWeight:"bolder"}}>SNo.</TableCell>
                <TableCell align="left" style={{fontWeight:"bolder"}}>Name</TableCell>
                <TableCell align="left" style={{fontWeight:"bolder"}}>Age</TableCell>
                <TableCell align="left" style={{fontWeight:"bolder"}}>Email</TableCell>
                <TableCell align="left" style={{fontWeight:"bolder"}} colSpan={2}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {peoples.map((data, index) => (
                <TableRow
                  key={data._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="left">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">{data.name}</TableCell>
                  <TableCell align="left">{data.age}</TableCell>
                  <TableCell align="left">{data.email}</TableCell>
                  <TableCell align="left">
                    <Button onClick={() => {seteditId(data._id);seteditdrawer(true)}}><EditOutlined style={{color:"green"}}/></Button>{" "}
                    <Popconfirm
                      title="Delete Image"
                      description={`Are you sure you want to delete ${username} ?`}
                      okText="Yes"
                      cancelText="No"
                      zIndex={9999}
                      onConfirm={handledelete}
                      
                    >
                      <Button
                     
                        style={{ backgroundColor: "white" }}
                        onClick={() => {setdeleteId(data._id);setusername(data.name)}}
                      >
                        <DeleteOutlined style={{color:"red"}}/>
                      </Button>
                    </Popconfirm>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
{/* Add Drawer */}
      <Drawer
        open={adddrawer}
        placement="left"
        onClose={() => setadddrawer(false)}
        zIndex={9999}
        extra={
          <Button type="primary" onClick={() => setadddrawer(false)}>
            Cancel
          </Button>
        }
      >
        <h2>Add user</h2>
        <br />
        <form action="#" onSubmit={handleAdduser}>
          <TextField
            label="Name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            size="small"
            sx={{
              width: "100%",
            }}
          />{" "}
          <br />
          <br />
          <TextField
            label="Age"
            name="age"
            type="number"
            value={age}
            onChange={(e) => setage(e.target.value)}
            size="small"
            sx={{
              width: "100%",
            }}
          />{" "}
          <br />
          <br />
          <TextField
            label="Email"
            name="email"
            type="string"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            size="small"
            sx={{
              width: "100%",
            }}
          />{" "}
          <br /><br />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
      </Drawer>
{/* Update Drawer */}
      <Drawer
        open={editDrawer}
        placement="left"
        onClose={() => seteditdrawer(false)}
        zIndex={9999}
        extra={
          <Button type="primary" onClick={() => seteditdrawer(false)}>
            Cancel
          </Button>
        }
      >
        <h2>Update user</h2>
        <br />
        <form action="#" onSubmit={handleUpdate}>
          <TextField

            name="name"
            type="text"
            value={updatedData?.name}
           onChange={(e)=>setupdatedData((prevState)=>({
            ...prevState,
            name:e.target.value
           }))}
            size="small"
            sx={{
              width: "100%",
            }}
          />{" "}
          <br />
          <br />
          <TextField
          
            name="age"
            type="number"
            value={updatedData?.age}
            onChange={(e)=>setupdatedData((prevState)=>({
                ...prevState,
                age:Number(e.target.value)
               }))}
            size="small"
            sx={{
              width: "100%",
            }}
          />{" "}
          <br />
          <br />
          <TextField
          
            name="email"
            type="string"
            value={updatedData?.email}
            onChange={(e)=>setupdatedData((prevState)=>({
                ...prevState,
                email:e.target.value
               }))}
            size="small"
            sx={{
              width: "100%",
            }}
          />{" "}
          <br /><br />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
      </Drawer>
    </div>
  );
};

export default people;
