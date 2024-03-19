import Getlogin from '../controllers/adityaloginscontroller.js';
import express from 'express';
const Router = express.Router()

Router.post('/adityalogins',Getlogin);

export default Router;