import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { makeStyles } from '@material-ui/core';
import products from '../produc-data';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) =>({
    root:{
        flexGrow:1,
        padding: theme.spacing(2),
    }
}))

export default function Products() {
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {
          products.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product}/>
            </Grid>
          ))
        }

      </Grid>
    </Box>
    </div>
  );
}