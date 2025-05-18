
const express=require('express')
const router = express.Router()
const Course = require('../Course')
 
router.get('/',async(req,res)=>{
    try{
        const id=req.params.id 
        const results = await Course.findById(id)
        
        if(results){
            res.status(200).json(results)
        }else
        {
            res.status(404).send("Sorry, No Data found")
        }

    }catch(error){
        console.log(error);
        res.status(500).send("Server Found ! ")
    }

})
module.exports=router;
