// import express
const express = require('express')

// import user controller
const userController = require('./controller/userController')

//import projectController
const projectController = require('./controller/projectController')

//import jwtMiddleware
const jwtMiddleware = require('./middleware/jwtMiddleware')

//import multer
const multerConfig = require('./middleware/multerMiddleware')

//instance router
const router = new express.Router()

// register
router.post('/register', userController.register)

// login
router.post('/login', userController.login)

// add project
router.post('/add-project', jwtMiddleware, multerConfig.single("projectImage"), projectController.addProjectController)

// Get all projects
router.get('/all-project', jwtMiddleware, projectController.getAllProjectController)

// Get home projects
router.get('/home-project', projectController.getHomeProjectController)

// Get user project
router.get('/user-project', jwtMiddleware, projectController.getUserProjectController)

// remove user project
router.delete('/remove-userProject/:id', jwtMiddleware, projectController.removeUserProjectController)

module.exports = router
