const demomongoose=require('mongoose');
const demoschema=demomongoose.Schema({
    name:String,
    age:Number,
    email:String,
})
module.exports=demomongoose.model("demo",demoschema)