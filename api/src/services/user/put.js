import {User} from "../../models/user"

export const byId = async(id,user) =>{
    console.log("Reached put.js -> byId")
    const result = await User.findByIdAndUpdate(id,user);
    console.log(result)
    return result;
} 