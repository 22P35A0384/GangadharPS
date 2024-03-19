import Spotlight from "../controllers/spotlight.js";
import express from 'express';
const Router=express.Router();

Router.post('/capture_image',Spotlight);

export default Router;