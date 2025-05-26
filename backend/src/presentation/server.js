const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

//Rotas do sistema
app.use('/users', userRoutes);


module.exports = app;
