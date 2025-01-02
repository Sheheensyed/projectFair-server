// import express
const express = require('express')

// import user controller
const userController = require('./controller/userController')

//instance router
const router = new express.Router()

// register
 router.post('/register',userController.register)

 // login
 router.post('/login',userController.login)

// add project
router.post('./add-project')

module.exports = router