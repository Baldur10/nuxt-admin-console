import {User} from "../../models/user"

export const all = async() => {
    // console.log("Retrieving all Users")
    const result = await User.find({})
    console.log("Retrieving all Users")
    return result;
}

export const byId = async(id) => {
    const result = User.findById(id)
    return result;
}