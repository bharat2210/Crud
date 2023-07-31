import { NextApiRequest, NextApiResponse } from "next";

const messages=require('../../../backend/db/messagemodel');
require("../../../backend/db/config")

const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="PUT"){
        try{
            const {id}=req.query
            const{firstname,lastname,email,message}=req.body
            const data = await messages.findOneAndUpdate({_id:id},
                {firstname,lastname,email,message},
                {new:true}
                )
                res.status(202).send(data)
        }catch(error){
            res.status(500).json({message:"Error updating"})
        }
    }else{
        res.status(405).json({message:"Method not allowed"})
    }
}
export default handler;