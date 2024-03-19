import Putstudentstatus from "../controllers/putstudentstatus.js";
import express from "express";
const Router = express.Router()

Router.put('/passupdate',Putstudentstatus);

export default Router;