import { NextApiRequest, NextApiResponse } from "next";

const products=require('../../../backend/db/products')
require("../../../backend/db/config")



const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method === 'GET'){
        try{
            let data= await products.find();
            res.status(200).json(data)
        }catch(error){
            res.status(500).json({message: "Error getting products"})
        }
    }else{
        res.status(405).json({message: "Method not allowed"})
    }
}
export default handler;