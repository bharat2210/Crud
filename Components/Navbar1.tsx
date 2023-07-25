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
import AdbIcon from "@mui/icons-material/Adb";
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



function Navbar1() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = React.useState();
  const { cart } = useSelector((state: any) => state.allcarts);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [keyValue, setKeyValue] = useState("");

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
    router.push("/");
  };

  const handleregister = () => {
    router.push("/allregister");
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

  return (
    <>
      <style>
        {`
      #logout{
        background-color: black;
        color: white;
        border-radius:40%;
      }
      
      
      
      
      `}
      </style>
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      /> */}
      <AppBar position="fixed">
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
             <SketchOutlined style={{fontSize:"28px"}} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
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
              <Button
                onClick={handlepost}
                sx={{
                  my: 2,
                  fontSize: 15,
                  color: router.pathname === "/Landing" ? "white" : "white",
                  borderBottom:
                    router.pathname === "/Landing"
                      ? "3px solid white "
                      : "none",
                  borderRadius:
                    router.pathname === "/Landing" ? "12px" : "none",
                  display: "block",
                }}
              >
               
                Home
             
               
              </Button>
              <Button
                onClick={handleregister}
                sx={{
                  fontSize: 14,
                  my: 2,
                  color: router.pathname === "/allregister" ? "white" : "white",
                  borderBottom:
                    router.pathname === "/allregister"
                      ? "3px solid white "
                      : "none",
                  borderRadius:
                    router.pathname === "/allregister" ? "12px" : "none",
                  display: "block",
                }}
              >
                Users
              </Button>
              <Button
                onClick={handleimages}
                sx={{
                  my: 2,
                  fontSize: 15,
                  color: router.pathname === "/Uns" ? "white" : "white",
                  borderBottom:
                    router.pathname === "/Uns" ? "3px solid white " : "none",
                  borderRadius: router.pathname === "/Uns" ? "12px" : "none",
                  display: "block",
                }}
              >
                Images
              </Button>
              <Button
                onClick={handleproduct}
                sx={{
                  my: 2,
                  fontSize: 15,
                  color: router.pathname === "/Apiproducts" ? "white" : "white",
                  borderBottom:
                    router.pathname === "/Apiproducts"
                      ? "3px solid white "
                      : "none",
                  borderRadius:
                    router.pathname === "/Apiproducts" ? "12px" : "none",
                  display: "block",
                }}
              >
                Products
              </Button>
              <Button
                onClick={handlecontact}
                sx={{
                  my: 2,
                  fontSize: 15,
                  color: router.pathname === "/Contactus" ? "white" : "white",
                  borderBottom:
                    router.pathname === "/Contactus" ? "3px solid white " : "none",
                  borderRadius: router.pathname === "/Contactus" ? "12px" : "none",
                  display: "block",
                }}
              >
                Contact us
              </Button>
              <Button
                onClick={handleadmin}
                sx={{
                  my: 2,
                  fontSize: 15,
                  color: router.pathname === "/Admin" ? "white" : "white",
                  borderBottom:
                    router.pathname === "/Admin" ? "3px solid white " : "none",
                  borderRadius: router.pathname === "/Admin" ? "12px" : "none",
                  display: "block",
                }}
              >
                Admin
              </Button>
            
              {/* <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                  <h5>Enter Security Key to access this page</h5>
                </DialogTitle>
                <DialogContent>
                  <TextField
                    label="Security Key"
                    value={keyValue}
                    onChange={(e) => setKeyValue(e.target.value)}
                  />
                  <br />
                
                  <Stack spacing={2} direction="row">
                    <Button onClick={handleSubmit} variant="contained">
                      Submit
                    </Button>
                    <Button onClick={() => setDialogOpen(false)} variant="text">
                      Cancel
                    </Button>
                  </Stack>
                </DialogContent>
              </Dialog> */}
              <div
                className="flex"
                style={{ display: "flex", flexDirection: "row", gap: "2px" }}
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
                    <ShoppingCartIcon sx={{ color: "white", fontSize: 30 }} />
                  </Badge>
                </IconButton>

                <Tooltip title="Logout" color="red" placement="top" style={{zIndex:9999}}>
                  <Button
                    onClick={handleLogout}
                    id="logout"
                    sx={{
                      my: 2,

                      position: "absolute",
                      right: 1,
                    }}
                  >
                    <Avatar
                      src={
                        <UserOutlined
                          style={{ fontSize: "24px", fontWeight: "800" }}
                        />
                      }
                      size="large"
                    />
                   
                  </Button>
                </Tooltip>
             
              </div>
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
