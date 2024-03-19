import Putupdatepass from '../controllers/changepass.js';
import express from 'express';
const Router = express.Router();

Router.put('/changepass/:mail',Putupdatepass);

export default Router;