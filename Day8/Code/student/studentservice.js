const students= require('./studentdb')

function getstudents(){
    return students;
}

function getStudent(id){
    return students.find((student)=>student.regno==id)
}

function getByCourse(Course){
    return students.filter((student) => student.course==Course )
}
function getByGender(Gender){
    return students.filter((student)=>student.gender==Gender)
}


module.exports={getstudents,getStudent,getByGender,getByCourse}