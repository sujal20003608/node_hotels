const mongoose=require('mongoose');
const menuitemschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sour','sweet','spicy'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false

    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        dafault:0
    }
});
const menu=mongoose.model('menu',menuitemschema);
module.exports=menu;
