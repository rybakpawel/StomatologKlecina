const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const comments = require('./routes/comments')
const aboutMe = require('./routes/aboutme')
const services = require('./routes/services')
const contact = require('./routes/contact')

const PORT = process.env.PORT || 3080
dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
})

mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Connected with mongoose'));

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use('/comments', comments)
app.use('/aboutme', aboutMe)
app.use('/services', services)
app.use('/contact', contact)