import * as React from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import { useSelector } from "react-redux";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Navbar1() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = React.useState();
  const { cart } = useSelector((state) => state.allcarts);

  React.useEffect(() => {
    const name = JSON.parse(localStorage.getItem("user"));
    if (name) {
      setLoggedInUser(name.name);
    }
  });

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
    router.push("/allpost");
  };
  const handleimages = () => {
    router.push("/Uns");
  };
  const handleproduct = () => {
    router.push("/Products");
  };
  const handlecart = () => {
    router.push("/Cart");
  };

  return (
    
 <>
   <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Crud
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", padding: 8 },
            }}
          >
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
              onClick={handlepost}
              sx={{
                my: 2,
                fontSize: 15,
                color: router.pathname === "/allpost" ? "white" : "white",
                borderBottom:
                  router.pathname === "/allpost" ? "3px solid white " : "none",
                borderRadius: router.pathname === "/allpost" ? "12px" : "none",
                display: "block",
              }}
            >
              Records
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
                color: router.pathname === "/Products" ? "white" : "white",
                borderBottom:
                  router.pathname === "/Products" ? "3px solid white " : "none",
                borderRadius: router.pathname === "/Products" ? "12px" : "none",
                display: "block",
              }}
            >
              Products
            </Button>
            <div
              className="flex"
              style={{ display: "flex", flexDirection: "row", gap: "2px" }}
            >
              <Button
                className="cart"
                sx={{ my: 2, fontSize: 15, color: "white" }}
                onClick={handlecart}
              >
                <IconButton aria-label="cart" sx={{}}>
                  <Badge color="secondary" 
                    badgeContent={cart.length}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    sx={{color:"white"}}
                  >
                    <ShoppingCartIcon sx={{ color: "white", fontSize: 30 }} />
                  </Badge>
                </IconButton>
              </Button>
              <Button
                onClick={handleLogout}
                sx={{
                  my: 2,
                  fontSize: 12,
                  color: "white",
                  marginLeft: "960px",
                  backgroundColor: "black",
                  borderRadius: 30,
                  width:80
                }}
               
              >
                Logout <i className="fa-solid fa-right-from-bracket"></i>
              </Button>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
 
 
 
 
 
 
 
 
 
 </>
  );
}

export default Navbar1;
