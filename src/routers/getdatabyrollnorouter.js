import Getdatabyrollno from "../controllers/getdatabyrollno.js";
import express from 'express';
const Router = express.Router();

Router.get('/student/data/:rollno',Getdatabyrollno);

export default Router;