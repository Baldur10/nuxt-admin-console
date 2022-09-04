import {Router} from 'express';
import * as userController from '../controller/user';

const User = Router();

User.get(`/`,userController.fetchUsers);

User.get(`/:id`,userController.fetchUser);

User.post(`/`,userController.createUser);
try {
    User.put(`/:id`,userController.updateUser);
} catch (error) {
    console.log(error)
    // return error
}

User.delete(`/:id`,userController.deleteUser);

export default User