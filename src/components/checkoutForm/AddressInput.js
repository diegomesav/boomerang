import { Grid, TextField } from '@material-ui/core';
import React from 'react'
import { useFormContext, Controller, FormProvider } from 'react-hook-form'

const AddressInput = ({name, label, required}) => {
  const {control} = useFormContext();
  
  return (

    <Grid item sm={6}  xs={12}>
      <Controller
            control={control}
            name={name}
            render = {({ field})=> (
                <TextField
                    fullWidth
                    label={label}
                    required
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                />
            )}
         />
    </Grid>
  )
}

export default AddressInput