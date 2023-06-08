import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";

const error = () => {
  const router=useRouter();
  const[second,setseconds]=useState<number>(10);


  

  useEffect(()=>{
    const interval=setInterval(()=>{
      setseconds((prevsecond)=>prevsecond - 1)
    },1000)
    return  ()=> clearInterval(interval)
  },[]);
  
  useEffect(()=>{
    if(second===0){
     
      router.push("/allpost")
         
      
    }
  },[second])
    // const router=useRouter()
   
    // useEffect(()=>{
    //   setTimeout(() => {
    //     router.push("/")
    //   }, 3000);
    // },[]);
  
  return (

    <div>
    
      <style>
        {`
    .image{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .img{
        margin-top:100px;
        border-radius:18px;
    }
   
    .back{
        padding:12px;
        color:white;
        background-color:black;
        font-weight:700;
        border-radius:50px;
        width:120px;
        margin-left:740px;
        

    }
   
    
    
    
    
    
    `}
      </style>
      <Navbar />
      <div className="image">
        <Image
          src="https://github.githubassets.com/images/modules/notifications/inbox-zero.svg"
          alt=""
          height={400}
          width={450}
          priority={true}
        
         className="img"/>
        
      </div>
     
      <h2 style={{textAlign:"center",color:"red"}}>404 Error !!!</h2>
     <Link href="/"> <button className="back" >Back to Home
</button></Link>
<h4 style={{textAlign:"center",color:"green"}} >Redirecting to Previous page in {second} seconds</h4>


    </div>
  );
};

export default error;


// https://ouch-cdn2.icons8.com/fgJKMaVTkdnsgrRX516Zcuib9wOWMHQWsdgrJBOzm4s/rs:fit:477:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQy/L2I4MjEyNGIyLTM2/OGItNDcwMy1hY2U3/LWMyOTc0YTk2OGI3/Mi5wbmc.png