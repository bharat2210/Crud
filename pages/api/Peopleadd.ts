import { NextApiRequest, NextApiResponse } from "next"

const people= require("../../../backend/db/peopledemo")
require("../../../backend/db/config")


const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="POST"){
        try{
            let data = new people(req.body);
            let result= await data.save();
            result= result.toObject()
            res.status(200).send(result);
        }catch(error){
            res.status(500).json({message:"Internal Server Error"})
        }
    }else{
        res.status(405).json({message:"Method Not Allowed"})
    }
}
export default handler;