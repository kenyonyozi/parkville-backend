const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// route imports
const userRoutes = require('./routes/userRoutes');

const { PORT } = process.env
const { WELCOME_MESSAGE, DATABASE_URL } = process.env


// declare app isntance
const app = express();

// load middleware
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

// load routes to app
app.use('/users', userRoutes)

// spin up the server 
mongoose.connect(DATABASE_URL).then(() => {
    // successful connection
    app.listen(PORT, ()=> {
        let message = `${WELCOME_MESSAGE} http://localhost:${PORT}`
        console.log(message)
    })
}).catch(error => {
    console.error("Failed to start the server due to : ",error)
})
