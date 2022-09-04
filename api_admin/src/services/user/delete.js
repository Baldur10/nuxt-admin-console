import {UserSchema} from "../../models/db_schema"

const byId = async(id,user) => {
    try {
        const result = await UserSchema.findByIdAndDelete(id,user);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    return result;
}

export default {
    byId
}