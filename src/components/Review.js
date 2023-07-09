import React from "react";
import {List,Typography} from '@material-ui/core'
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";


const Review = (nextStep, backStep) => {
  const[{basket}, dispatch] = useStateValue();
  return(
    <div>
      <Typography variant='h6' gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {getBasketTotal(basket)}
      </List>
        
    </div>
  )
}

export default Review;