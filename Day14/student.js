const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    _Id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date,require:true},
    gender:{type:String,require:true},
    degreeId:{type:String,require:true,ref:'degrees'}
})

const Student = mongoose.model('students',studentSchema)

const kolins = new Student({
    _Id:'2000IT001',
    name:'Peter Kolins',
    date_of_birth:'01-05-1995',
    gender:'male',
    degreeId:'FAS2021ICT'
})
kolins.save()

module.exports=Student