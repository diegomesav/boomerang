import { Grid, Typography, TextField } from '@material-ui/core'
import React from 'react'
import {useForm, FormProvider,useFormContext, Controller } from 'react-hook-form'
import AddressInput from './AddressInput';
//import { useFormContext, Controller } from 'react-hook-form'

const AddressForm = () => {
  const methods = useForm();

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing= {3}>
            <AddressInput required name="firstname" label="First name" />
            <AddressInput required name="lastName" label="First name"/>
            <AddressInput required name="firstname" label="First name" />
            <AddressInput required name="lastName" label="First name"/>
          </Grid>
        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm