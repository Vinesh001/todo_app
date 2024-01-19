const express = require('express');
const userModels = require('../models/userModel.js')
const bcrypt = require('bcrypt');
const salt  = require('../private/salt.js')

const router = express.Router();

router.post('', async(req, res)=>{
    try{
        const {name, userName, password} = req.body;
        console.log({name,userName,password});
        const checkUserName = await userModels.find({userName:userName});
        if(checkUserName[0]){
            res.json({
                message:"From this userName, one user already exist!",
                data:checkUserName
            })
        }else{
            
            const hashPassword = await bcrypt.hash(password, salt);
            const dataToBeAdded = {
                name:name,
                userName:userName,
                password:hashPassword
            }
            const dataAdded = await userModels.create(dataToBeAdded);
            if(dataAdded){
                // res.cookie('userId', dataAdded._id);
                res.json({
                    message:"Data added successfully!",
                    data:dataAdded
                })
            }else{
                res.json({
                message:"Something wrong while adding data!"
                })
            }
        }

    }catch(err){
        res.json({
            message:err.message
        })
    }
})

module.exports = router;