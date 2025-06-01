const mongoose = require('mongoose')
const employeeSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date},
    gender:{type:String},
    email:{type:String},
    job:{type:String},
    salary:{type:Number},

    departmentId:{
        type:String,
        require:true,
        ref:'departments'
    },

    //enroled_projects:[type:mongoose.Types.ObjectId,ref:'projects',require:true]

   enroled_projects:[{type:String,ref:'projects',require:true}]
})

const Employee = mongoose.model('employees',employeeSchema)
const Emp1 = new Employee({
    _id:'emp003',
    name:'Kamali',
    date_of_birth:new Date('1962-08-12T12:00:00Z'),
    gender:'female',
    email:'kamali@gmail.com',
    job:'Software Engineer',
    salary:100000,
    departmentId:'dep001',
    enroled_projects:['pro001','pro002']
})
//Emp1.save()
module.exports=Employee