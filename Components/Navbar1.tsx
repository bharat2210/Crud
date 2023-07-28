// Next imports
import * as React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
// Redux imports
import { useSelector } from "react-redux";
// MUI imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// Antd imports
import { SketchOutlined, UserOutlined } from "@ant-design/icons";
import { Tooltip, Avatar } from "antd";
// Var imports
import { Current_User_Type } from "./Permisions";

function Navbar1() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = React.useState();
  const { cart } = useSelector((state: any) => state.allcarts);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [keyValue, setKeyValue] = useState("");
  const [localstoragevalue, setLocalStorageValue] = useState(false);
  console.log("Current user type ", Current_User_Type);

  React.useEffect(() => {
    const isloggedInUser = !!localStorage.getItem("user");
    setLocalStorageValue(isloggedInUser);
    console.log("Is logged in", isloggedInUser);
  });

  React.useEffect(() => {
    const name = JSON.parse(localStorage.getItem("user") || "null");
    if (name) {
      setLoggedInUser(name.name);
    }
  }, []);
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  // const handleCloseDialog = () => {
  //   setDialogOpen(false);
  // };
  // const handleSubmit = () => {
  //   // Replace 'YOUR_SECURITY_KEY' with the actual security key you want to check
  //   if (keyValue === "bhart") {
  //     router.push("/Admin");
  //   } else {
  //     alert("Invalid security key");
  //   }
  // };
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handlePageNavigation = (path: any) => {
    handleCloseNavMenu();
    router.push(path);
  };

  const handleLogout = () => {
    localStorage.clear();
    setLocalStorageValue(false);
    router.push("/Signup");
  };

  const handlepost = () => {
    router.push("/Landing");
  };

  const handleimages = () => {
    router.push("/Uns");
  };

  const handleproduct = () => {
    router.push("/Apiproducts");
  };

  const handlecart = () => {
    router.push("/Cart");
  };
  const handleadmin = () => {
    router.push("/Admin");
  };
  const handlecontact = () => {
    router.push("/Contactus");
  };
  const handlesignin = () => {
    router.push("/Signup");
  };
  const handlelogin = () => {
    router.push("/Login");
  };

  return (
    <>
      <style>
        {`
    
      
      
      
      
      `}
      </style>
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      /> */}
      <AppBar
        position="fixed"
        sx={{ height: 84, backgroundColor: "rgb(25,118,210)" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <SketchOutlined style={{ fontSize: "28px" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "sans-serif",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Shopeee
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", padding: 8 },
              }}
            >
              {localstoragevalue ? (
                <>
                  <Button
                    onClick={handlepost}
                    sx={{
                      my: 2,
                      fontSize: 18,
                      color: router.pathname === "/Landing" ? "white" : "white",
                      borderBottom:
                        router.pathname === "/Landing"
                          ? "3px solid white "
                          : "none",
                      borderRadius:
                        router.pathname === "/Landing" ? "12px" : "none",
                      display: "block",
                      textTransform: "none",
                    }}
                  >
                    Home
                  </Button>
                  {/* <Button
                onClick={handleregister}
                sx={{
                  fontSize: 18,
                  my: 2,
                  color: router.pathname === "/allregister" ? "white" : "white",
                  borderBottom:
                    router.pathname === "/allregister"
                      ? "3px solid white "
                      : "none",
                  borderRadius:
                    router.pathname === "/allregister" ? "12px" : "none",
                  display: "block",
                  textTransform:"none"
                }}
              >
                Users
              </Button>  */}
                  <Button
                    onClick={handleimages}
                    sx={{
                      my: 2,
                      fontSize: 18,
                      color: router.pathname === "/Uns" ? "white" : "white",
                      borderBottom:
                        router.pathname === "/Uns"
                          ? "3px solid white "
                          : "none",
                      borderRadius:
                        router.pathname === "/Uns" ? "12px" : "none",
                      display: "block",
                      textTransform: "none",
                    }}
                  >
                    Images
                  </Button>
                  <Button
                    onClick={handleproduct}
                    sx={{
                      my: 2,
                      fontSize: 18,
                      color:
                        router.pathname === "/Apiproducts" ? "white" : "white",
                      borderBottom:
                        router.pathname === "/Apiproducts"
                          ? "3px solid white "
                          : "none",
                      borderRadius:
                        router.pathname === "/Apiproducts" ? "12px" : "none",
                      display: "block",
                      textTransform: "none",
                    }}
                  >
                    Products
                  </Button>
                  <Button
                    onClick={handlecontact}
                    sx={{
                      my: 2,
                      fontSize: 18,
                      color:
                        router.pathname === "/Contactus" ? "white" : "white",
                      borderBottom:
                        router.pathname === "/Contactus"
                          ? "3px solid white "
                          : "none",
                      borderRadius:
                        router.pathname === "/Contactus" ? "12px" : "none",
                      display: "block",
                      textTransform: "none",
                    }}
                  >
                    Contactus
                  </Button>
                  <Button
                    onClick={handleadmin}
                    sx={{
                      my: 2,
                      fontSize: 18,
                      color: router.pathname === "/Admin" ? "white" : "white",
                      borderBottom:
                        router.pathname === "/Admin"
                          ? "3px solid white "
                          : "none",
                      borderRadius:
                        router.pathname === "/Admin" ? "12px" : "none",
                      display:
                        Current_User_Type === "Admin_User" ? "block" : "none",
                      textTransform: "none",
                    }}
                  >
                    Admin
                  </Button>

                  <div
                    className="flex"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "2px",
                    }}
                  >
                    <IconButton
                      aria-label="cart"
                      sx={{ my: 2, fontSize: 15, color: "white" }}
                      onClick={handlecart}
                    >
                      <Badge
                        color="secondary"
                        badgeContent={cart.length}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        sx={{ color: "white" }}
                      >
                        <ShoppingCartIcon
                          sx={{ color: "white", fontSize: 30 }}
                        />
                      </Badge>
                    </IconButton>

                    <Tooltip
                      title={
                        Current_User_Type === "Admin_User"
                          ? "Logout (Admin)"
                          : "Logout"
                      }
                      placement="top"
                      zIndex={9999}
                    >
                      <Button
                        onClick={handleLogout}
                        id="logout"
                        sx={{
                          position: "absolute",
                          right: 1,
                        }}
                      >
                        <img src="Client.png" alt="" height={60} width={60} />
                      </Button>
                    </Tooltip>
                  </div>
                </>
              ) : (
                <>
                  <Button
                    onClick={handlesignin}
                    sx={{
                      my: 2,
                      fontSize: 18,
                      color: router.pathname === "/Signup" ? "white" : "white",
                      borderBottom:
                        router.pathname === "/Signup"
                          ? "3px solid white "
                          : "none",
                      borderRadius:
                        router.pathname === "/Signup" ? "12px" : "none",
                      display: "block",
                      textTransform: "none",
                    }}
                  >
                    Signup
                  </Button>

                  <Button
                    onClick={handlelogin}
                    sx={{
                      my: 2,
                      fontSize: 18,
                      color: router.pathname === "/Login" ? "white" : "white",
                      borderBottom:
                        router.pathname === "/Login"
                          ? "3px solid white "
                          : "none",
                      borderRadius:
                        router.pathname === "/Login" ? "12px" : "none",
                      display: "block",
                      textTransform: "none",
                    }}
                  >
                    Login
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <br />
      <br />
      <br />
      <br />

      {/* Mobile Menu */}
      <Drawer
        anchor="left"
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <List>
          <ListItem onClick={() => handlePageNavigation("/")}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem onClick={() => handlePageNavigation("/allregister")}>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem onClick={() => handlePageNavigation("/allpost")}>
            <ListItemText primary="Records" />
          </ListItem>
          <ListItem onClick={() => handlePageNavigation("/Uns")}>
            <ListItemText primary="Images" />
          </ListItem>
          <ListItem onClick={() => handlePageNavigation("/Products")}>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar1;
