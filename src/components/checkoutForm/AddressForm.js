import { Grid, Typography, TextField,Button } from '@material-ui/core'
import React from 'react'
import {useForm, FormProvider,useFormContext, Controller, } from 'react-hook-form'
import AddressInput from './AddressInput';
import {Link} from 'react-router-dom'
//import { useFormContext, Controller } from 'react-hook-form'

const AddressForm = () => {
  const methods = useForm();
  const handleSubmit = (e) => {
    console.log(e)
  }

  const nombre = (e) =>{
    console.log(e)
  }
    
  

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
          <Button onClick={methods.handleSubmit(data => {console.log(data)})}type="submit" variant="contained" color="primary">next</Button>
        </div>
      </FormProvider>
    </>
  )
}

export default AddressForm