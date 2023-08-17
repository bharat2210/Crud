import { NextApiRequest, NextApiResponse } from "next"

const people=require('../../../backend/db/peopledemo')
require('../../../backend/db/config')


const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="DELETE"){
        try{
            const {id}=req.query
            const data = await people.deleteOne({_id:id})
            res.status(200).send(data)
        }catch(error){
            res.status(500).json({message:"Error deleting people"})
        }
    }else{
        res.status(405).json({message:"Method not allowed"})
    }
}
export default handler;