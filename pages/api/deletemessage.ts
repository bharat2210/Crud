import { NextApiRequest, NextApiResponse } from "next"

const messages=require('../../../backend/db/messagemodel')
require('../../../backend/db/config')


const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="DELETE"){
        try{
            const {id}=req.query
            const data = await messages.deleteOne({_id:id})
            res.status(200).send(data)
        }catch(error){
            res.status(500).send({message:"Internal Server Error"})
        }
    }else{
        res.status(405).send({messages:"Method Not Allowed"})
    }
}
export default handler;