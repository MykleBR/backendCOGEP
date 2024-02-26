import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Importe o pacote cors
import authRoutes from './routes/authRoutes';
import cadastroRoutes from './routes/cadastroRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Use o middleware cors aqui
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/cadastro', cadastroRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default server;
