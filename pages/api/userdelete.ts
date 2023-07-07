import { NextApiRequest, NextApiResponse } from "next";

const users=require('../../../backend/db/user')
require("../../../backend/db/config")



export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method === "DELETE"){
        try{
            const {id}=req.query
            let data =await users.deleteOne({_id:id});
            res.status(200).json(data);
        }catch(error){
            res.status(500).json({ message: 'Error Deleting user' });
    }
    }else{
        res.status(405).json({ message: 'Method not allowed' });
    }
}
 