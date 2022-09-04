import {Router} from 'express';
import * as userController from '../controller/admin_controller';

const User = Router();

User.get(`/`,userController.fetchUsers);

// User.post('/signup', userController.createUser);

// User.post('/login', userController.login)

User.get(`/:id`,userController.getUser);

User.post(`/`,userController.createUser);

User.put(`/:id`,userController.updateUser);

User.delete(`/:id`,userController.deleteUser);

export default User