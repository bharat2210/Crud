import { NextApiRequest, NextApiResponse } from "next"

const img=require("../../../backend/db/imageModel")
require('../../../backend/db/config')

const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method === "GET"){
        try{
            const data = await img.find()
            res.status(200).send(data)
                
        }catch(error){
            res.status(500).json({message:"Internal Server Error"})
        }
    }else{
        res.status(405).json({message:"Method Not Allowed"})
    }
}
export default handler;