import { NextApiRequest, NextApiResponse } from "next";

const category=require('../../../backend/db/ShopbyCategory');
require('../../../backend/db/config')


const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="GET"){
        try{
            const data = await category.find();
            res.status(200).send(data);
        }catch(error){
            res.status(500).json({message:"Error getting categories"})
        }
    }else{
        res.status(405).json({message:"Method not allowed"})
    }
}
export default handler;