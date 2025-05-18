const express=require('express')
const app = express();
const port = 3001;
const mongoose =require('mongoose')
const coursert=require('./routes/courseRoute')
 
app.use(express.json())
app.use('/Course')
mongoose.connect('mongodb://localhost:27017/studentinfoDB').then(()=>{
    console.log("Databse connected")
}).catch((error=>{
    console.error(error);
    
})
)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})