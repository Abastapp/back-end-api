const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.post('/register', async (req, res) => {
    try{
        const user = await User.create(req.body)
        return res.send(user)
    }catch(err){
        console.log(err)
    }
})

module.exports = app => app.use('/auth', router)