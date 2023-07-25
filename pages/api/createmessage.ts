import { NextApiRequest, NextApiResponse } from "next";

const messages=require('../../../backend/db/messagemodel');
require("../../../backend/db/config")


const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="POST"){
        try{
            const data = new messages(req.body);
            let result  =await data.save();
            result = result.toObject();
            res.status(200).send(result);
    }catch(error){
        res.status(500).json({message:"Internal Server Error"})
    }
}else{
    res.status(401).json({message:"Method Not Allowed"})
}
}
export default handler;