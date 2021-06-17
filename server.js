/**
 * @docs
 * 
 * server.js is the entry point of the application. 
 * Mongoose used to connect to the mongoDB database.
 * Express used to establish a port on 5000 (if using local server)
 * 
 * Created by Sarath C Ani
 * github : https://github.com/Sarathcani999/ShoppingListMERN
 */

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = require('./config/keys')
const chalk = require('chalk')
const notes = require('./routes/api/notes')
const users = require('./routes/api/users')
const blockchain = require('./routes/api/blockchain')
const pendingblocks = require('./routes/api/pendingblocks')
const cors = require('cors')

// const routeDetails = require('./routes/middleware/routeName')

// For parsing body of requests
app.use(express.json())
app.use(cors())

// // For Debugging Purpose
// app.use(routeDetails)

// MongoDB Connect
const mongoOptions = {
    useUnifiedTopology: true , 
    useNewUrlParser: true
}
mongoose.connect(db.mongoURI , mongoOptions )
    .then(() => console.log(chalk.bold.yellow("MongoDB Connected")))
    .catch(err => console.error(err));

// Use Routes
app.use('/api/notes' , notes)
app.use('/api/auth/' , users)
app.use('/api/blockchain/' , blockchain)
app.use('/api/pendingblocks/' , pendingblocks)



// PORT Establishment
const port = process.env.PORT | 5000
app.listen(port , () => {
    console.log(chalk.bold.yellow(`PORT Established at ${port}`))
})