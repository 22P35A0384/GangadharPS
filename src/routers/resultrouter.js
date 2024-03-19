import Sendresult from "../controllers/resultcontroler.js";
import express from 'express';
const Router = express.Router()

Router.get('/getresult/:roll',Sendresult);

export default Router;