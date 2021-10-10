const {Router} = require('express')
// const LogFile = require('../models/LogFile')
const User = require('../models/userModel')
const Journey = require('../models/LogFile')

const router = Router()

// Get all users posts all the posts available 

router.get('/all',async (req, res,next) => {
    try {
        const logs = await Journey.find()
        res.status(200).json(logs)
    } catch (error) {
        next(error)
    }
})

// My Posts which will be called upon click on user Profile

router.get('/posts/:id' ,async (req, res,next) => {
    try {
        console.log(req.params.id)
        const userId =  `${req.params.id}` 
        const userLogs = await Journey.findById(userId)
        // console.log(userLogs.json())
        res.status(200).json(userLogs)
    } catch (error) {
        next(error)
    }
})

router.get('/user-posts/:usr',async(req,res,next)=>{
    try{
        console.log(req.params.usr)
        const usrlogs = await Journey.find({'username' : `${req.params.usr}`})
        res.status(200).json(usrlogs)
    }catch(err){
        next(err)
    }
})

// creating new log post

router.post('/create-journey',async (req,res,next)=>{
    try{
        const newLog = new Journey(req.body)
        const createdLog = await newLog.save()
        res.json(createdLog)
    }catch(error){
        next(error)
    }
})


module.exports = router
