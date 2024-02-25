import React from "react";
import Review from "../Review"
import { Divider } from "@mui/material";

const PaymentForm = (nextStep, backStep) => {
  return(
    <div>
        <Review/>
        <Divider/>
    </div>
  )
}

export default PaymentForm;