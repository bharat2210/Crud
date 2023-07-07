import { NextApiRequest, NextApiResponse } from "next";

const users = require("../../../backend/db/user");
require("../../../backend/db/config");


const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==='POST'){
        const{email,password}=req.body;
     try{
      const user=await users.findOne({email,password})
      if( user.password!==password){
        return res.status(401).json({message:"Invalid Credentials"})
      }
      res.status(200).json({message:"Login successfully"})
     }catch(error){
        res.status(500).send({message:"Login failed"})
     }
    }else{
        res.status(405).json({message:"Method not allowed"})
    }
}
export default handler;