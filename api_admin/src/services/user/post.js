import {UserSchema} from "../../models/db_schema"

const create = async(user) => {

    const result = await UserSchema.create(user);
    console.log("Creating UserSchema");
    console.log(result,typeof(result));
    return result;
};

export default {
    create
}