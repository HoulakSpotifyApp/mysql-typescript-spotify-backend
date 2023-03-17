import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserRepository } from "../models/user.repository";

const router = Router();

const controller = new UserController(
    new UserRepository()
);


router.route('/:param').
post(controller.create.bind(controller))
export default router