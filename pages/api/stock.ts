import { NextApiRequest, NextApiResponse } from "next"

const products=require('../../../backend/db/products')
require("../../../backend/db/config")


const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="PUT"){
        try{
            const {id}=req.query
            let data = await products.findById(id)
            if(!data){
               
                res.status(404).json({message:"Product not found"})
            }
            data.stock -= 1
            await data.save();
         res.status(200).json({message:"Product saved"})   
        }catch(error){
            res.status(500).json({message:"Product error"})
        }
    }else{
        res.status(404).json({message:"Method not supported"})
    }
}
export default handler;