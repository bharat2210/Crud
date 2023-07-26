import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Navbar1 from './Navbar1';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
 useEffect(()=>{

    const isLoggedIn=localStorage.getItem("user")

    if (!isLoggedIn) {
    //   router.push('/allpost');
      router.push("/Login")
      // alert("You are not Logged in")
    }
   


 },[])
 

  return <div>

    <style>
      {`
      *{
        margin:0;
        padding:0;
      }
      
      `}
    </style>
    <Navbar1/>
    {children} 
  <Footer/>
  
  </div>;
};

export default Layout;