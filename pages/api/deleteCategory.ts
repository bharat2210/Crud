import { NextApiRequest, NextApiResponse } from "next"

const category=require('../../../backend/db/ShopbyCategory')
require('../../../backend/db/config')

const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="DELETE"){
    try{
        const {id}=req.query
        const data = await category.deleteOne({_id:id})
        res.status(200).send(data)
    }catch(error){
        res.status(500).json({message:"Error in deleting category"})
    }
    }else{
        res.status(405).json({message:"Method not allowed"})
    }
}
export default handler;