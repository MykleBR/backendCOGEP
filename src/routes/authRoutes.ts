// src/routes/authRoutes.ts
import express from 'express';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.post('/atividade', AuthController.atividade);
router.post('/pessoa', AuthController.pessoa);

export default router;
