const mongoose=require("mongoose");
const ShopbyCategorySchema=new mongoose.Schema({
    imgPath:String,
    title:String,
    description:String
})
module.exports=mongoose.model("shopbycategories",ShopbyCategorySchema)