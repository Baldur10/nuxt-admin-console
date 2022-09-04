import {UserSchema} from "../../models/db_schema"
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const all = async() => {
    // console.log("Retrieving all UserSchemas")
    const result = await UserSchema.find({})
    console.log("Retrieving all UserSchemas")
    return result;
}

const byId = async(id) => {
    const result = UserSchema.findById(id)
    return result;
}
const byEmailAndPassword = async (email, password) => {
    const user = await User.findOne({ email })
    return bcrypt.compareSync(password, user.password) ? { secret: jwt.sign({
        id: user._id,
        name: user.name,
        email: user.email
    }, process.env.SECRET) } : { secret: null }
}

export default {
    all,
    byId,
    byEmailAndPassword
}