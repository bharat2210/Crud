// import { useRouter } from 'next/router';
// import React from 'react';
// import Admin from '../pages/Admin';
// import Navbar1 from './Navbar1';

// const User_Types = {
//   Public: "Public User",
//   Admin: "Admin User",
// };
// const Current_User_Type = User_Types.Public;

// const Permissions = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();

//   if (Current_User_Type === User_Types.Admin) {

//     if (router.pathname == "/admin") {
//       router.push("/admin");
//     }
//     return <div>{children}</div>;
//   } else if (Current_User_Type === User_Types.Public) {
//     // Render the public page if the user type is public
//     if (router.pathname === "/admin") {
//       router.push("/apiproducts");
//     }
//     return <h1>You don't have permission to access this page.</h1>;
//   } else {

//     // Render other content for other user types
//     return <div>{children}</div>;
//   }
// };

// export default Permissions;

import { useRouter } from "next/router";
import React from "react";
import Navbar1 from "./Navbar1";
import Restrict from "./Restrict";

const User_Types = {
  Public: "Public_User",
  Admin: "Admin_User",
};
export const Current_User_Type = User_Types.Admin;

const Permissions = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  if (Current_User_Type === User_Types.Admin) {
    // Admin user can access all pages
    return <div>{children}</div>;
  } else if (Current_User_Type === User_Types.Public) {
    // Public user can access only public pages
    const { pathname } = router;

    const publicPages = [
      "/Landing",
      "/allpost",
      "/Apiproducts",
      "/Cart",
      "/Uns",
      "/Login",
      "/Signup",
      "/New",
      "/404",
      "/Wishlist",
      "/Contactus"
      
    ];

    if (publicPages.includes(pathname)) {
      // User can access public pages
      return <div>{children}</div>;
    } else {
      // User is not authorized to access the current page
      return (
        <>
          <Navbar1 />
          <Restrict />
        </>
      );
    }
  } else {
    return null;
  }
};

export default Permissions;
