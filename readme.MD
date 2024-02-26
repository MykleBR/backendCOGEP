Pré-requisitos:

    Node.js e npm:
        Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em nodejs.org.

    Banco de Dados MySQL:
        Garanta que você tenha um servidor MySQL em execução. Certifique-se de criar o banco de dados dbteste.

Passos:

    Clonar o Repositório:
        Clone o repositório do seu backend para sua máquina.

    bash

        git clone https://seurepositorio.git
        cd nome-do-seu-backend

Instalar Dependências:

    Instale as dependências do projeto.

    bash

        npm install

Configurar o Banco de Dados:

    Certifique-se de que o arquivo src/config/database.ts esteja configurado corretamente com as credenciais do seu banco de dados MySQL.

Executar Migrations:

    Execute as migrações para criar as tabelas no banco de dados.

    bash

        npx sequelize-cli db:migrate

Iniciar o Servidor:

    Inicie o servidor backend.

    bash

        npm start

O servidor deve estar rodando na porta especificada (por padrão, na porta 3000).

Testar as Rotas:

    Use um cliente HTTP, como o Postman ou Insomnia, para testar as rotas.

    Rotas de Autenticação:
        POST /auth/atividade: Autentica o usuário e emite um token JWT.
        POST /auth/pessoa: Registra um novo usuário e emite um token JWT.

    Rotas Protegidas (requerem token JWT):
        GET /cadastro/pessoa: Lista todas as pessoas.
        POST /cadastro/pessoa: Cadastra uma nova pessoa.
        PUT /cadastro/pessoa/:id: Atualiza uma pessoa existente.
        DELETE /cadastro/pessoa/:id: Exclui uma pessoa existente.
        GET /cadastro/atividade: Lista todas as atividades.
        POST /cadastro/atividade: Cadastra uma nova atividade.
        PUT /cadastro/atividade/:id: Atualiza uma atividade existente.
        DELETE /cadastro/atividade/:id: Exclui uma atividade existente.

Configuração do Banco de Dados (src/config/database.ts):

    Este arquivo configura a conexão com o banco de dados MySQL usando o Sequelize. O código cria uma instância do Sequelize e a exporta.

    import { Sequelize } from 'sequelize';

    const sequelize = new Sequelize('mysql://root:gegkyoyrsr@localhost:3306/dbteste');

    export default sequelize;

Controlador de Autenticação (src/controllers/AuthController.ts):

    Este controlador gerencia as operações de autenticação do usuário.

        atividade(req: Request, res: Response): Promise<void>: Autentica o usuário e emite um token JWT.

        pessoa(req: Request, res: Response): Promise<void>: Registra um novo usuário e emite um token JWT.


    import { Request, Response } from 'express';
    import jwt from 'jsonwebtoken';
    import bcrypt from 'bcrypt';
    import User from '../models/User';

    class AuthController {
    // Métodos detalhados acima...
    }

    export default AuthController;

Controlador de Cadastro (src/controllers/CadastroController.ts):

    Este controlador gerencia operações CRUD para Pessoas e Atividades.

        Métodos para Pessoas:
            cadastrarPessoa(req: Request, res: Response): Promise<void>
            atualizarPessoa(req: Request, res: Response): Promise<void>
            excluirPessoa(req: Request, res: Response): Promise<void>
            listarPessoas(req: Request, res: Response): Promise<void>

        Métodos para Atividades:
            cadastrarAtividade(req: Request, res: Response): Promise<void>
            atualizarAtividade(req: Request, res: Response): Promise<void>
            excluirAtividade(req: Request, res: Response): Promise<void>
            listarAtividades(req: Request, res: Response): Promise<void>


    import { Request, Response } from 'express';
    import Pessoa from '../models/Pessoa';
    import Atividade from '../models/Atividade';

    class CadastroController {
    // Métodos detalhados acima...
    }

    export default CadastroController;

Middleware de Autenticação (authMiddleware.ts):

    Este middleware verifica a presença e validade do token JWT nas requisições.


    import { Request, Response, NextFunction } from 'express';
    import jwt from 'jsonwebtoken';

    interface AuthRequest extends Request {
    user?: { userId: string };
    }

    const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    // Método detalhado acima...
    };

    export default authMiddleware;

Modelos (src/models/Atividade.ts, src/models/Pessoa.ts, src/models/User.ts):

    Estes arquivos definem os modelos Sequelize para Atividade, Pessoa e Usuário.

        Atividade.ts:
            Campos: nome, descricao, dataInicio, dataFim, dataCriacao.

        Pessoa.ts:
            Campos: nome, telefone, email, endereco.

        User.ts:
            Campos: username, password (com hash).


    // Atividade.ts
    import { DataTypes, Model } from 'sequelize';
    import sequelize from '../config/database';

    // Definição do modelo Atividade detalhada acima...
    export default Atividade;

    // Pessoa.ts
    import { DataTypes, Model } from 'sequelize';
    import sequelize from '../config/database';

    // Definição do modelo Pessoa detalhada acima...
    export default Pessoa;

    // User.ts
    import { DataTypes, Model } from 'sequelize';
    import sequelize from '../config/database';
    import bcrypt from 'bcrypt';

    // Definição do modelo User detalhada acima...
    export default User;

Rotas (src/routes/authRoutes.ts, src/routes/cadastroRoutes.ts):

    Estas rotas definem os endpoints para autenticação e operações CRUD de Pessoas e Atividades.

    // authRoutes.ts
    import express from 'express';
    import AuthController from '../controllers/AuthController';

    const router = express.Router();

    // Definição das rotas de autenticação detalhadas acima...
    export default router;

    // cadastroRoutes.ts
    import express from 'express';
    import CadastroController from '../controllers/CadastroController';
    import authMiddleware from '../middlewares/authMiddleware';

    const router = express.Router();

    // Rotas protegidas por autenticação para CRUD detalhadas acima...
    export default router;

Servidor (src/index.ts):

    Este arquivo configura e inicia o servidor Express.

    import express from 'express';
    import bodyParser from 'body-parser';
    import cors from 'cors';
    import authRoutes from './routes/authRoutes';
    import cadastroRoutes from './routes/cadastroRoutes';

    const app = express();
    const PORT = process.env.PORT || 3000;

    // Configuração do middleware e rotas detalhada acima...

    const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });

    export default server;

Este guia fornece uma visão geral do seu backend, destacando os principais pontos em cada arquivo.

