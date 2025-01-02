// import mongoose
const mongoose = require('mongoose')

connectionString=process.env.DATABASE
mongoose.connect(connectionString).then((res)=>{
    console.log(`mongoDB connected succesfully`);
    
}).catch((err)=>{
    console.log(`MongoDB connection failed ${err}`);
})