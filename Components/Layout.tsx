import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from './Footer';

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
 

  return <div>{children} <br />
  <Footer/>
  
  </div>;
};

export default Layout;