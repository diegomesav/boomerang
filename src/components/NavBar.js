import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/logo.png"
import { makeStyles } from '@material-ui/core/styles';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@material-ui/core';

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
        height: "2rem"
    },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" class={classes.AppBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo} className = {classes.image}/>
          </IconButton>
          <div className={classes.grow}/>
          <Typography variant="h6" component="div" color="primary">
            Hola Boomerang
          </Typography>
          <div className={classes.button} >
            <Button color="primary" variant="text" >
              <strong>Sign In</strong>
            </Button>
            <IconButton>
              <Badge badgeContent={20} color='secondary'>
              <ShoppingCart fontSize='large' color='primary'/>
              </Badge>
            </IconButton>

          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}