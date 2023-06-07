import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

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
 

  return <div>{children}</div>;
};

export default Layout;