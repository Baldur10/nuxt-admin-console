import {User} from "../../models/user"

export const create = async(user) => {

    const result = await User.create(user);
    console.log("Creating User");
    console.log(result,typeof(result));
    return result;
};