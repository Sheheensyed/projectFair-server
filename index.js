//import .env
require('dotenv').config()

//import connection
require('./connection')

// import express
const express = require('express')

// import cors
const cors = require('cors')

// import router 
const router = require('./router')

// create server
const pfServer = express()

// server using cors
pfServer.use(cors())

// parse the data -> middleware to parse the data 
pfServer.use(express.json())

// use
pfServer.use(router)

// create port
const PORT = 4000 || process.env.PORT

// listen
pfServer.listen(PORT, () => {
   console.log(`pfServer is successfully running in port ${PORT} `);

})





//  // get
 pfServer.get('/',(req,res)=>{
    res.send(`get request recieved`)
 })

//  // send
//  pfServer.post('/',(req,res)=>{
//     res.send('post request recived')
//  })

//  // put
//  pfServer.put('/',(req,res)=>{
//     res.send('put request recived')
//  })

//  // put
//  pfServer.delete('/',(req,res)=>{
//     res.send('delete request recived')
//  })