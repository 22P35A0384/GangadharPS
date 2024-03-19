import Chatbot from "../controllers/chatbot.js";
import express from 'express';
const Router = express.Router();

Router.post('/chatbot',Chatbot);

export default Router;