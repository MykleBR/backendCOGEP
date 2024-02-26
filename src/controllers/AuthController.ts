// src/controllers/AuthController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';

class AuthController {
  static async atividade(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      // Buscar usuário pelo nome de usuário
      const user = await User.findOne({ where: { username } });

      if (!user) {
        return res.status(401).json({ message: 'Nome de usuário ou senha incorretos' });
      }

      // Verificar a senha
      const isPasswordMatch = await user.comparePassword(password);

      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Nome de usuário ou senha incorretos' });
      }

      // Gerar token JWT
      const token = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });

      return res.json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao fazer atividade' });
    }
  }

  static async pessoa(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      // Verificar se o nome de usuário já existe
      const userExistente = await User.findOne({ where: { username } });

      if (userExistente) {
        return res.status(400).json({ message: 'Nome de usuário já registrado' });
      }

      // Hash da senha
      const hashedPassword = await bcrypt.hash(password, 10);

      // Criar um novo usuário com a senha hash
      const newUser = await User.create({ username, password: hashedPassword });

      // Gerar token JWT
      const token = jwt.sign({ userId: newUser.id }, 'secreto', { expiresIn: '1h' });

      return res.status(201).json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
  }
}

export default AuthController;
