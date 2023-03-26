import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/logo.png"
import { makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
        marginBottom: "7rem",
    },
    AppBar:{
        backgroundColor: "whitesmoke",
        boxShadow: "none",
    },
    grow:{
        flexGrow: 1,
    },
    button:{
        marginLeft: theme.spacing(2),
    },
    image:{
        marginRight: "10px",
    },
}))

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}