const express = require('express');
const router = express.Router();
const todoModel = require('../models/todoModel')


// To get all data 
router.get('/', async(req, res) => {
    try{
        const data = await todoModel.find({});
        console.log(data)
        if(data){
            res.json({
                message:"data send successfully!",
                data
            })
        }else{
            res.json({
                message:"something went wrong!"
            })
        }
    }catch(err){
        res.json({
            message:err.message
        })
    }
});

// To add data
router.post('/', async(req, res)=>{
    try{
        const { description} = req.body;
        const dataToBeUpdated = {
            description
        }
        const ret = await todoModel.create(dataToBeUpdated);
        if(ret){
            res.json({
                message:"data added successfully!",
                data:ret
            })
        }else{
            res.json({
                message:"data does not added!"
            })
        }

    }catch(err){
        res.json({
            message:err.message
        })
    }
    
})

// To delete todo from our array
router.delete('/:id',async(req, res)=>{
    try{
        const id = req.params.id;
        const deletedData = await todoModel.findOneAndDelete({_id:id});
        if(deletedData){
            res.json({
                message:"data deleted successfully!",
                deletedData:deletedData
            })
        }else{
            res.json({
                message:"You entered the wrong ID!"
            })
        }
    }catch(err){
        res.json({
            message:err.message
        })
    }
    
})

module.exports = router;