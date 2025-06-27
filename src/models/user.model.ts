import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";



export interface IUserModel extends IUser, Document {}
const UserSchema: Schema =new Schema<IUser>({
    firstName:{type:String, required:true, trim:true},
    lastName:{type:String,required:true,trim:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number}
    
},
{
    timestamps:true
}
)

export default mongoose.model<IUserModel>('User',UserSchema)