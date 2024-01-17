const express = require('express');
const userModels = require('../models/userModel.js')
const bcrypt = require('bcrypt');
const salt = require('../private/salt.js')

const router = express.Router();

router.post('/', async(req, res)=>{
    try{
        const {userName, password} = req.body;
        const authUser = await userModels.find({userName:userName});
        if(authUser[0]){
            const hashPassword = await bcrypt.hash(password, salt);
            if(hashPassword==authUser[0].password){
                res.json({
                    message:"User logged in",
                    data:authUser
                })
            }else{
                res.json({
                    message:"Password is wrong!"
                })
            }
        }else{
            res.json({
                message:"User does not exist please, first signup!"
            })
        }
    }catch(err){
        res.json({
            message:err.message
        })
    }
})

module.exports = router;