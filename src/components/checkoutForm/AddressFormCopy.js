import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function AddressForm() {

  const [name,setName] = useState("");
  const [lastName,setLastName] = useState("");
  const [address,setAddress] = useState("");
  const [phone,setPhone] = useState("");
  const [city,setCity] = useState("");
  const [departamento,setDepartamento] = useState("");

  const [client,setClient] = useState({});

  const enviarDatos = () => {
    
      client.name = name;
      client.lastName = lastName;
      client.address = address;
      client.phone = phone;
      client.city = city;
      client.departamento = departamento

      
      console.log(client)
      //return client;
  }

  const cliente = enviarDatos()
  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={name}
            onChange={e=>setName(e.target.value)}  
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={lastName}
            onChange={e=>setLastName(e.target.value)}  
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={address}
            onChange={e=>setAddress(e.target.value)}  
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            defaultValue={address}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={phone}
            onChange={e=>setPhone(e.target.value)}  
            required
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            autoComplete="shipping phone-line1"
            variant="standard"
        
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={city}
            onChange={e=>setCity(e.target.value)}  
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={departamento}
            onChange={e=>setDepartamento(e.target.value)}  
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12}>
        <Button
            variant="contained"
            onClick={enviarDatos}
            >
            enviar
          </Button>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
