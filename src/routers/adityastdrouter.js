import Adityastd from '../controllers/adityastd';
import express from 'express';
const Router = express.Router()

Router.post('/adityastd',Adityastd);

export default Router;