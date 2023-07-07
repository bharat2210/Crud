import { NextApiRequest, NextApiResponse } from "next";

const clients = require("../../../backend/db/client");
require("../../../backend/db/config");


const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method === "PUT"){
        try{
            const {id}=req.query
            const{E_name,E_age,E_email}=req.body;
            let data =await clients.findOneAndUpdate(
                {_id:id},
                {E_name,E_age,E_email},
                {new:true}
                )
            res.status(200).send(data);
        }catch(error){
            res.status(500).json({message:"Error updating client"})
        }
    }else{
        res.status(405).json({message:"Method not allowed"})
    }
}
export default handler;