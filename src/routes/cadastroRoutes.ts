// cadastroRoutes.ts

import express from 'express';
import CadastroController from '../controllers/CadastroController';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

// Rotas CRUD para Pessoa - Protegidas por autenticação
router.use(authMiddleware);
router.get('/pessoa', CadastroController.listarPessoas);
router.post('/pessoa', CadastroController.cadastrarPessoa);
router.put('/pessoa/:id', CadastroController.atualizarPessoa);
router.delete('/pessoa/:id', CadastroController.excluirPessoa);

// Rotas CRUD para Atividade - Protegidas por autenticação
router.get('/atividade', CadastroController.listarAtividades);
router.post('/atividade', CadastroController.cadastrarAtividade);
router.put('/atividade/:id', CadastroController.atualizarAtividade);
router.delete('/atividade/:id', CadastroController.excluirAtividade);

export default router;
