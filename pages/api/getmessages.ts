import { NextApiRequest, NextApiResponse } from "next"

const messages=require('../../../backend/db/messagemodel')
require('../../../backend/db/config')

const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="GET"){
        try{
             const data= await messages.find();
             res.status(200).send(data) 
        }catch(error){
            res.status(500).json({message:"Internal Server Error"})
        }
    }else{
        res.status(401).json({messages:"Method Not Allowed"})
    }
}
export default handler;