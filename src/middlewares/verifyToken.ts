// middlewares/verifyToken.ts
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");
  const tokenSemBearer = token?.replace("Bearer ", "");

  if (!tokenSemBearer) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  try {
    // Verifique e decode o token
    const decoded = jwt.verify(tokenSemBearer, "secret123");
    (req as any).userId = (decoded as any).userId; // Adicione o ID do usuário à requisição
    next();
  } catch (error) {
    console.error("Erro na verificação do token:", error);
    res.status(401).json({ error: "Token inválido." });
  }
};

export default verifyToken;
