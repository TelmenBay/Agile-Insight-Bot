import express from 'express';
import { analyzeTextController } from '../controller/controller.js';

const router = express.Router();

router.post('/', analyzeTextController);

export default router;