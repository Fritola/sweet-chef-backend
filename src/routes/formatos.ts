// routes/formatosDeBolo.ts
import express, { Request, Response } from "express";
import FormatoBolo, { IFormatoBolo } from "../models/FormatoBolo";

const router = express.Router();

// Rota para cadastrar um formato de bolo
router.post("/cadastrar", async (req: Request, res: Response) => {
  try {
    const { nome, valor, imagem } = req.body;

    const novoFormato = new FormatoBolo({ nome, valor, imagem });
    const formatoSalvo: IFormatoBolo = await novoFormato.save();

    res.json(formatoSalvo);
  } catch (error) {
    console.error("Erro ao cadastrar formato de bolo:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

// Rota para obter todos os formatos de bolo
router.get("/", async (req: Request, res: Response) => {
  try {
    const formatos: IFormatoBolo[] = await FormatoBolo.find();
    res.json(formatos);
  } catch (error) {
    console.error("Erro ao obter formatos de bolo:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

export default router;
