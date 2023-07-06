import { Grid, Typography, TextField,Button } from '@material-ui/core'
import React from 'react'
import {useForm, FormProvider,useFormContext, Controller, } from 'react-hook-form'
import AddressInput from './AddressInput';
import {Link} from 'react-router-dom'
import { useStateValue } from "../../StateProvider";
import { actionTypes } from '../../reducer';

const AddressForm = ({nextStep}) => {
  const methods = useForm();
  const [{shippingData},dispatch] = useStateValue();

    
  

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form >
          <Grid container spacing= {3}>
            <AddressInput required name="firstname" label="First name"/>
            <AddressInput required name="lastName" label="Last name"/>
            <AddressInput required name="address" label="Address" />
            <AddressInput required name="phone" label="Phone"/>
            <AddressInput required name="city" label="City"/>
            <AddressInput required name="email" label="Email"/>
          </Grid>
        </form>
        <div style={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
          <Button component={Link} to="/checkout-page">back to checkout page</Button>
          <Button  type="submit" variant="contained" color="primary"
          onClick={methods.handleSubmit(data => {
            dispatch({
              type: actionTypes.SET_SHIPPINGDATA,
              shippingData: data,
            });
            nextStep();
          })}>next</Button>
        </div>
      </FormProvider>
    </>
  )
}

export default AddressForm