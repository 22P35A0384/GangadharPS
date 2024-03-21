import Adityaimg from '../controllers/adityaphotos.js'
import express from 'express';
const Router = express.Router();

Router.get("/adityaimg/:id",Adityaimg);

export default Router;