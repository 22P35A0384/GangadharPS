import Getprofile from '../controllers/getprofile.js';
import express from 'express';
const Router = express.Router();

Router.get("/profile/:id",Getprofile);

export default Router;