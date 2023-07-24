import { NextApiRequest, NextApiResponse } from "next"

const demo=require("../../../backend/db/demomodel")
require("../../../backend/db/config")

const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method === "DELETE"){
    
        try{
            const {id}=req.query
            let data = await demo.deleteOne({_id:id})
            res.status(200).send(data)

        }catch{
            res.status(500).json({message:"Error deleting"})
        }
    }else{
        res.status(405).json({message:"Method not allowed"})
    }
}
export default handler;