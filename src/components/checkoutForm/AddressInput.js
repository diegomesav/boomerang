import { Grid, TextField } from '@material-ui/core';
import React from 'react'
import { useFormContext, Controller, FormProvider } from 'react-hook-form'

const AddressInput = () => {
  const {control} = useFormContext() || {};
  
  return (

    <Grid item sm={6}>
          <Controller
  control={control}
  name="test"
  render={({
    field: { label, required, name, fulWidth}
  }) => (
    <TextField
      label={label}
      required = {required}
      fullWidth={fulWidth}
    />
  )}
/>
</Grid>
  )
}

export default AddressInput