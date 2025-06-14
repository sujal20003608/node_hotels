//var notes=require('./notes.js');
//var age=notes.age;
//console.log(age); 

//ar l=require('lodash');
//var c=['person','people','person',1,2,1,1,3,3,4];
//console.log(l.uniq(c));
//console.log(l.isString(1));//
//var object={
    //name:'sujal',
   // age:21
//}
//var objecttojson=JSON.stringify(object);
//console.log(objecttojson);
//var json='{"name":"sujal","age":"21"}';
//var jsontoobject=JSON.parse(json);
//console.log(jsontoobject);
//console.log(typeof(objecttojsoc'express'
const express=require('express');
const app = express();

const db=require('./db');


const bodyparser=require('body-parser');

const router=require('./routes/personroutes');
const menuroute=require('./routes/menuroutes');

app.use(bodyparser.json());

app.get('/',function(req, res){
  res.send('welcome to our restraunt....how can i help you');
})




app.use('/person',router);
app.use('/menu',menuroute);

app.listen(3000,()=>{
  console.log('listining on port 3000');
})
 
