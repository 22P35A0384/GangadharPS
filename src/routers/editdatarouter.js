import Editdata from "../controllers/editdata.js";
import express from 'express';
const Router = express.Router()

Router.put('/editdata/:mail',Editdata);

export default Router;