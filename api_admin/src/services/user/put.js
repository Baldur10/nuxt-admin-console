import {UserSchema} from "../../models/db_schema"

const byId = async(id,user) =>{
    console.log("Reached put.js -> byId")
    const result = await UserSchema.findByIdAndUpdate(id,user);
    console.log(result)
    return result;
}

export default {
    byId
}