const express = require('express')
const app = express()
require("dotenv").config()
const userRouter = require('./routes/userRouter.js')
const connectToDB = require('./config/db.js')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectToDB()

app.use("/" ,userRouter )




module.exports=app;
