import * as React from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';

function Navbar1() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();

  const handleOpenNavMenu = (event:any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event:any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageNavigation = (path:any) => {
    handleCloseNavMenu();
    router.push(path);
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push('/Login');
  };

  const handleregister = () => {
    router.push('/allregister');
  };

  const handlepost = () => {
    router.push('/allpost');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CRUD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',padding:8 } }}>
            <Button
              onClick={handleregister}
              sx={{
                fontSize:15,
                my: 2,
                color: router.pathname === '/allregister' ? 'white' : 'white',
                borderBottom:router.pathname==='/allregister'? "3px solid white ":"none",
                borderRadius:router.pathname==='/allregister'? "12px" :"none",
                display: 'block',
              }}
            >
              Users
            </Button>
            <Button
              onClick={handlepost}
              sx={{
                my: 2,
                fontSize:15,
                color: router.pathname === '/allpost' ? 'white' : 'white',
                borderBottom:router.pathname==='/allpost'? "3px solid white ":"none",
                borderRadius:router.pathname==='/allpost'? "12px" :"none",
                display: 'block',
              }}
            >
              Records
            </Button>
            <Button onClick={handleLogout} sx={{ my: 2,  fontSize:15,color: 'white', display: 'block' }}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar1;
