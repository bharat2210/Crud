import { NextApiRequest, NextApiResponse } from "next";

const offers=require('../../../backend/db/offermodel');
require("../../../backend/db/config");


const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="PUT"){
        try{
            const {id}=req.query
            const{imgPath}=req.body
            const data = await offers.findOneAndUpdate({_id:id},{imgPath},{new:true})
            res.status(200).send(data)
        }catch(error){
            res.status(500).json({message:"Internal Server Error"})
        }
    }else{
        res.status(405).json({message:"Method Not Allowed"})
    }
}
export default handler;