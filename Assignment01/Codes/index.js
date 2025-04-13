const express = require('express');
const app = express();
const PORT = 3001
;

const userRoute = require('./User/userRoute');
const postRoute = require('./Post/postRoute');

app.use('/User', userRoute);
app.use('/Post', postRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});