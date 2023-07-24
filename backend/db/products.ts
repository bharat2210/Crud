const mongoos=require('mongoose');
const productsSchema= new mongoos.Schema({
    title:String,
    price:Number,
    img:{
        type:[String]
    },
    quantity:Number,
    description:String,
    rating:Number,
    size:String,
    full:String,
    color:String,
    storage:String,
    ribbon:Boolean,
    stock:{
        type:Number,
        min:0
    },
    category:String,

})
module.exports =mongoos.model("products",productsSchema);