// routes/formatosDeBolo.ts
import express, { Request, Response } from "express";
import MassaBolo, { IMassaBolo } from "../models/Massa";

const router = express.Router();

// Rota para cadastrar um formato de bolo
router.post("/cadastrar", async (req: Request, res: Response) => {
  try {
    const { nome, valor, imagem } = req.body;

    const novaMassa = new MassaBolo({ nome, valor, imagem });
    const massaSalva: IMassaBolo = await novaMassa.save();

    res.json(massaSalva);
  } catch (error) {
    console.error("Erro ao cadastrar massa de bolo:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

// Rota para obter todos os formatos de bolo
router.get("/", async (req: Request, res: Response) => {
  try {
    const formatos: IMassaBolo[] = await MassaBolo.find();
    res.json(formatos);
  } catch (error) {
    console.error("Erro ao obter formatos de bolo:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

export default router;
