const mongoose = require('mongoose')
const degreeSchema = new mongoose.Schema({
    _id:{type:String,require:true}, //define id by ourselves
    name:{type:String,require:true},
    department:{type:String,require:true},
    numberofyears:{type:Number,require:true},
    faculty:{type:String}
})

const Degree = mongoose.model('degrees',degreeSchema)
/*const BIT=new Degree({
    _id:"FAS2021ICT",
    name:"BSc in Information Tecnology",
    department:"Physical Science",
    numberofyears:3,
    faculty:"Applied Science"
})
BIT.save()*/
module.exports = Degree