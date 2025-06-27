import { Request,Response} from "express";
import User from "../models/user.model";
export const createUser = async (req: Request, res:Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error: error });
  }
};

export const getUser=async (req:Request,res:Response)=>{
    try{
const users=await User.find();
res.status(200).json(users);
    }catch(error){
       res.status(500).json({message:'Failed to fetch users', error:error})
    }
}
