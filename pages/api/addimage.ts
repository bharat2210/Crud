import { NextApiRequest, NextApiResponse } from "next"

const img=require('../../../backend/db/imageModel')
require('../../../backend/db/config')

const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method === 'POST'){
        try{
            let data = new img(req.body);
            let result= await data.save();
            result= result.toObject();
            res.status(201).send(result)
        }catch(error){
            res.status(500).json({message:"Error in Creating record"})
        }
    }else{
        res.status(405).json({message:"Method not supported"})
    }
}
export default handler;