const express = require('express');
const app = express();
const cors = require('cors');
const marcadoPago = require('mercadopago');

app.use(express.json());
app.use(cors);

