"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {useSelector,useDispatch} from 'react-redux'
import {useState,useEffect} from 'react'
import { updateuser } from "../Features/userdetail";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const Update = ({id,setshowpopup}:any) => {
  const dispatch:ThunkDispatch<any, void, AnyAction> =useDispatch();
    const allusers=useSelector((state:any)=>state.app.users)
    const singleuser=allusers.filter((ele:any)=>{ele.id===id
    return ele.id===id
    })[0];

    const[updatedata,setupdatedata]=useState({E_name:"",E_age:"",E_email:""});
  useEffect(()=>{
    setupdatedata(singleuser);
  },[singleuser])

  const handleupdate=(e:any)=>{
    e.preventDefault();
    setshowpopup(false);
    dispatch(updateuser({id:singleuser.id, ...updatedata}));

  }
  
    console.log("allusers", allusers)
    console.log("singleuse",singleuser)
 
  
  return (
   <>

   <style>
{`
.overlay {
    position: fixed;
      margin-right:auto;
      margin-left:auto;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
   
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
    <div className="overlay">
   

    <Box sx={{ border:1,height:450,padding:12 ,backgroundColor:"white",borderRadius:12}} className="animation">
    <h3 style={{textAlign:"center",color:"dodgerblue",marginTop:1}}>Edit Record</h3>
<form action="" onSubmit={handleupdate}>
<TextField 
id="outlined-basic" 
label="Name" 
variant="outlined"
 name="E_name" 
 type="text" 
 value={updatedata.E_name}
 onChange={(e)=>setupdatedata((prevstate)=>({
    ...prevstate,
    E_name:e.target.value
 }))
}
 />
 <br /><br />
<TextField 
id="outlined-basic"
 label="Age"
  variant="outlined"
   name="E_age"
    type="number" 
     value={updatedata.E_age}
     onChange={(e)=>setupdatedata((prevstate)=>({
        ...prevstate,
        E_age:e.target.value
     }))
    }
     />
     <br /><br />
<TextField 
id="outlined-basic"
 label="Email"
  variant="outlined"
   name="E_email" 
   type="email"
     value={updatedata.E_email}
     onChange={(e)=>setupdatedata((prevstate)=>({
        ...prevstate,
        E_email:e.target.value
     }))
    }
      />
     <br /><br />

<Stack spacing={2} direction="row">
         <Button variant="contained" type="submit" >
           Update
         </Button>
         <Button onClick={()=>setshowpopup(false)}>Cancel</Button>
       </Stack>




</form>










 </Box>



 





    </div>
   
   
   
   
   

   </>
  )
}

export default Update