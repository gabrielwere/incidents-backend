const express = require('express')
const mongoose = require('mongoose')
const app = express()
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
require("dotenv").config()

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:5173' 
}));

const PORT = 4000
const mongoUrl = process.env.MONGO_URL

const officialsRoute = require('./routes/gvt_officials.js')
const compromisedAccountsRoute = require('./routes/compromised_accounts.js')


app.use(express.json())
app.use('/gvt_officials',officialsRoute)
app.use('/compromised_accounts',compromisedAccountsRoute)


mongoose.connect(mongoUrl)
const db = mongoose.connection
db.on("error", (err)=>{ console.log(err)})
db.once("open", ()=> console.log("connected to database"))


app.listen(PORT,(err)=>{
    if(!err){
        console.log("app running on port 4000")
    }else{
        console.log("app not running")
    }
})
