import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import verifyToken from "../middlewares/verifyToken";
import User, { IUser } from "../models/User";

const router = express.Router();

// Rota para cadastrar um usuário
router.post("/cadastrar", async (req: Request, res: Response) => {
  try {
    const user: IUser = new User({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      telefone: req.body.telefone,
    });

    const savedUser: IUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, senha }: { email: string; senha: string } = req.body;

    // Verificar se o usuário existe
    const user: IUser | null = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas." });
    }

    // Verificar a senha
    if (senha === user.senha) {
      // Gere um token JWT
      const token = jwt.sign({ userId: user._id }, "secret123", {
        expiresIn: "1h",
      });

      // Retorne o token para o cliente
      res.json({ token });
    } else {
      res.status(401).json({ error: "Credenciais inválidas." });
    }
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

router.get("/me", verifyToken, async (req: Request, res: Response) => {
  try {
    // O middleware verifyToken já terá extraído o ID do usuário do token
    const userId = (req as any).userId;

    // Encontre o usuário pelo ID
    const user: IUser | null = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    // Retorne as informações do usuário
    res.json({
      nome: user.nome,
      email: user.email,
      telefone: user.telefone,
      id: user._id,
      // Adicione outros campos conforme necessário
    });
  } catch (error) {
    console.error("Erro ao obter informações do usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

export default router;
