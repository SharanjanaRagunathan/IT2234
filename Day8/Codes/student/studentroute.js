const express=require('express')
const router=express.Router()
const studentservice=require('./studentservice')

router.get('/',(req,res)=>{
   const results=studentservice.getstudents()
   if(results){
    res.status(200).json(results)
   }else{
    res.status(404).send("Sorry,No Data found!")
   }
})

router.get('/:id',(req,res)=>{
    const id=req.params.id
    const results=studentservice.getStudent(id)
    if(results){
     res.status(200).json(results)
    }else{
     res.status(404).send("Sorry,No Data found!")
    }
 })

router.get('/course/:Course', (req, res)=>{
    const Course = req.params.Course
    const results = studentservice.getByCourse(Course)
    if(results) {
        res.status(200).json(results)

    }  else
    {
        res.status(404).send("Data not found!")
    }
});

router.get('/gender/:Gender', (req, res)=>{
    const Gender = req.params.Gender == 'm'? 'male' : 'female'
    const results = studentservice.getByGender(Gender)
    if(results) {
        res.status(200).json(results)

    }  else
    {
        res.status(404).send("Data not found!")
    }
});

 module.exports=router