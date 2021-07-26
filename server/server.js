const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const home = require('./routes/home')

const PORT = process.env.PORT || 3080
dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
})

mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Connected with mongoose'));

app.use('/home', home)