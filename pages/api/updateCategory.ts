import { NextApiRequest, NextApiResponse } from "next";

const category=require('../../../backend/db/ShopbyCategory');
require('../../../backend/db/config')

const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method === 'PUT'){
        try{
            const {id}=req.query
            const{imgPath,title,description}=req.body
            const data= await category.findOneAndUpdate(
                {_id:id},
                {imgPath,title,description},
                {new:true}

            )
            res.status(202).send(data);
        }catch(error){
            res.status(500).json({message:"Error updating category"})
        }
    }else{
        res.status(405).json({message:"Method not allowed"})
    }
}
export default handler;