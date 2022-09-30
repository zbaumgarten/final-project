// dependencies
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const userRoutes = require('./controllers/User')
const pastryRoutes = require('./controllers/Pastry')

const app = express()

app.use(express.json())

app.use(cors())

//rootes
app.use('/user', userRoutes)
app.use('/', pastryRoutes)


//db connection 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

//port 
const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`listening on port ${PORT}`))
