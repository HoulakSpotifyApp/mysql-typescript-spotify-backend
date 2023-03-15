import { Router } from "express";

import {getUsers, createUser} from '../controllers/user.controller'
const router = Router();


router.route('/')
.get(getUsers);


router.route('/:param')
.post(createUser);
export default router