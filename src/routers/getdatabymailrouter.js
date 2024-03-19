import Getdatabymail from "../controllers/getdatabymail.js";
import express from 'express';
const Router = express.Router();

Router.get('/getdata/:mail',Getdatabymail);

export default Router;