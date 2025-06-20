const mongoose=require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/hotels');
require('dotenv').config();
mongoose.connect(process.env.mongo_url);
const db=mongoose.connection;
db.on('connection',()=>{
    console.log('connection to mongodb server');
});
db.on('disconnected',()=>{
console.log('mongodb server disconnected');
});
db.on('error',(err)=>{
    console.error('mongodb connection error:',err);
});
module.exports=db;