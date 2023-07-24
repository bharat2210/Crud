import { NextApiRequest, NextApiResponse } from "next"

const demo=require('../../../backend/db/demomodel')
require('../../../backend/db/config')

const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method ==="PUT"){
        try{
            let {id}=req.query
            let {name,age,email}=req.body
            let data = await demo.findOneAndUpdate(
                {_id:id},
                {name,age,email},
                {new:true}
            )
            res.status(200).send(data);
        }catch(error){
            res.status(500).json({message:"Error updating"})
        }
    }else{
        res.status(405).json({message:"Method not allowed"})
    }
}
export default handler;