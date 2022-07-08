import express  from "express";
const routerUsers = express.Router();
import * as userController from './users.controller.js'

routerUsers.get("/a", (req, res)=>res.send({message: "ok"}))
routerUsers.post("/", userController.createUserController);
routerUsers.get("/", userController.findAllUserController);

export { routerUsers }