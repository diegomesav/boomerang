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
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";

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
  const [{basket}, dispatch] = useStateValue();
  
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
            Hola Boomerang
          </Typography>
          <div className={classes.button} >
            <Link to="/signin">
              <Button color="primary" variant="text" >
                <strong>Sign In</strong>
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