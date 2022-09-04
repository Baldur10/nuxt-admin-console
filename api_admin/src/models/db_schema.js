import mongoose from 'mongoose';
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

export const UserSchema = mongoose.model('user', new mongoose.Schema({
    name: String,
    email: String,
    password: String,
}))