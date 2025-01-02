//import user
const users = require('../model/userModel')

//import jwt
const jwt = require('jsonwebtoken')

// register
exports.register = async (req, res) => {
    const { username, email, password } = req.body
    console.log(username, email, password);
    console.log('inside register function');
    // res.send('end')


    try {
        const existingUsers = await users.findOne({ email })
        if (existingUsers) {
            res.status(406).json('User already exists')
        } else {
            const newUser = new users({
                username,
                email,
                password,
                profile: "",
                github: "",
                linkedin: ""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

//login
exports.login = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password);

    try {
        const existingUsers = await users.findOne({ email, password })
        if (existingUsers) {
            const token = jwt.sign({ userId: existingUsers._id }, "secretkey")
            res.status(200).json({ existingUsers, token })
        } else {
            res.status(406).json("Incorrect email or Password")
        }

    } catch (err) {
        res.status(401).json(err)
    }
}