import Deleteuser from '../controllers/deleteacc.js';
import express from 'express';
const Router = express.Router();

Router.post('/deleteuser',Deleteuser);

export default Router;