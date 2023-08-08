import { NextApiRequest, NextApiResponse } from "next";


const offers=require('../../../backend/db/offermodel')
require('../../../backend/db/config');

const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="DELETE"){
        try{
            const {id}=req.query
            const data = await offers.deleteOne({_id:id})
            res.status(200).json({message:"Deleted Successfully"})
        }catch(error){
            res.status(500).json({message:"Internal Server Error"})
        }
    }else{
        res.status(405).json({message:"Method Not Allowed"})
    }
}
export default handler;