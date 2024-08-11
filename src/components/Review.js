import React from "react";
import {List,ListItem,ListItemText,Typography} from '@mui/material'
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import accounting from "accounting";


const Review = (nextStep, backStep) => {
  const[{basket}, dispatch] = useStateValue();
  return(
    <div>
      <Typography variant='h6' gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {
          basket?.map(product => (
            <ListItem key={product.nameProduc}>
              <ListItemText primary={product.nameProduct} />
              <Typography variant="body2"></Typography>
              {accounting.formatMoney(product.price)}
            </ListItem>
          ))
        }
        <ListItem>
          <ListItemText primary="Total: "/>
          <Typography variant="subtitle1">
            {accounting.formatMoney(getBasketTotal(basket))}
          </Typography>
        </ListItem>
      </List>
        
    </div>
  )
}

export default Review;