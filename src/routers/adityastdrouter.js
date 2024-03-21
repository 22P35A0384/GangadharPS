import Adityastd from '../controllers/adityastd.js';
import express from 'express';
const Router = express.Router()

Router.post('/adityastd',Adityastd);

export default Router;