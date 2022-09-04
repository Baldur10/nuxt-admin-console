import {User} from "../../models/user"

export const byId = async(id,user) => {
    try {
        const result = await User.findByIdAndDelete(id,user);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    return result;
}