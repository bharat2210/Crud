import { NextApiRequest, NextApiResponse } from "next";

const products=require('../../../backend/db/products')
require("../../../backend/db/config")


const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method === 'DELETE'){
        try{
            const {id}=req.query
            let data =await products.deleteOne({_id:id});
            res.status(200).json(data)
        }catch(err){
            res.status(500).json({message:"Error deleting product"})
        }
    }else{
        res.status(405).json({message:"Method not allowed"})
    }
}
export default handler;