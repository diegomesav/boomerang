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
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { auth } from '../firebase';
import { actionTypes } from '../reducer';

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
  const [{basket, user}, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleAuth = ()=>{
    if(user){
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      })
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      })
      navigate("/");
    }
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" class={classes.AppBar}>
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} className = {classes.image}/>
            </IconButton>
          </Link>
          <div className={classes.grow}/>
          <Typography variant="h6" component="div" color="primary">
            Hola {user ? user.email : "Boomerang"}
          </Typography>
          <div className={classes.button} >
            <Link to="/signin">
              <Button variant="text" onClick={handleAuth}>
                <strong>{user ? "Sign out" : "Sign in"}</strong>
              </Button>
            </Link>
            <Link to="/checkout-page">
              <IconButton>
                <Badge badgeContent={basket?.length} color='secondary'>
                <ShoppingCart fontSize='large' color='primary'/>
                </Badge>
              </IconButton>
            </Link>

          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}