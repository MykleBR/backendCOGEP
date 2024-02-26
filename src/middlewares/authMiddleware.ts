// authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user?: { userId: string }; // Adicione essa propriedade personalizada
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const tokenHeader = req.header('Authorization');

  if (!tokenHeader) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const [_, token] = tokenHeader.split(' '); // Separar o prefixo "Bearer"
  
  try {
    const decoded = jwt.verify(token, 'secreto');
    req.user = { userId: (decoded as any).userId };
    next();
  } catch (error) {
    console.error('Erro na verificação do token:', error);
    return res.status(401).json({ message: 'Token inválido' });
  }
};

export default authMiddleware;
