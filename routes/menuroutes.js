const express=require('express');
const router=express.Router();
const menuitem=require('./../models/menu');

router.post('/',async(req,res)=>{
  try{
    const data=req.body;
  const newmenu=new menuitem(data);
  const response=await newmenu.save();
  console.log('data saved');
  res.status(200).json(response);
  }catch(err){
   console.log(err);
   res.status(500).json({error:'internal server error'}); 
  }
})
router.get('/',async(req,res)=>{
  try{
    const data=await menuitem.find();
    console.log("data retrieved");
    res.status(200).json(data);
  }catch(err)
  {
    console.log(err);
    res.status(500).json({error:'ingternal server error'});
  }
})
router.get('/:taste',async(req,res)=>{
    try{

    
const taste=req.params.taste;
if(taste=='spicy'||taste=='sour'||taste=='sweet')
{const response=await menuitem.find({taste:taste});
console.log('data retrieved');
res.status(200).json(response);
}else
{
    res.status(404).json({error:'enter taste is invalid'});
}
}catch(err){
    console.log(err);
    res.status(500).json({error:'ingternal server error'});
}
})
router.put('/:id',async(req,res)=>{
  try{
    const menuid=req.params.id;
    const updateddata=req.body;
    const response=await menuitem.findByIdAndUpdate(menuid,updateddata,{
      new:true,
      runValidators:true
    })
    console.log('data updated');
    res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(404).json({error:'internal server error'});
    }
})
module.exports=router;
