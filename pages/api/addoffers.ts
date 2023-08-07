import { NextApiRequest, NextApiResponse } from "next";

const offers= require('../../../backend/db/offermodel')
require('../../../backend/db/config');


const handler= async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="POST"){
        try{
            const data = new offers(req.body);
            let result= await data.save();
            result = result.toObject();
            res.status(200).send(result);
        }catch(error){
            res.status(500).json({message:"Internal Server Error"})
        }
    }else{
        res.status(405).json({message:"Method Not Allowed"})
    }
}
export default handler;