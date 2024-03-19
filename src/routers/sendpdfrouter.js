import Sendpdf from '../controllers/sendpdf.js';
import express from 'express';
const Router = express.Router();

Router.get("/pdf/:id",Sendpdf);

export default Router;