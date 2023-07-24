import { NextApiRequest, NextApiResponse } from "next"

const demo=require("../../../backend/db/demomodel")
require("../../../backend/db/config")

const handler =async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method === "GET"){
        try{
            let data = await demo.find();
            res.status(200).send(data)
        }catch(error){
            res.status(500).send({message:"Error getting data"})
        }
    }else{
        res.status(405).send({message:"Method not allowed"})
    }
}
export default handler;