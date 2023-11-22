// routes/complementos.ts
import express, { Request, Response } from "express";
import Complemento, { IComplemento } from "../models/Complemento";

const router = express.Router();

// Rota para cadastrar um complemento
router.post("/cadastrar", async (req: Request, res: Response) => {
  try {
    const { nome, valor, imagem } = req.body;

    const novoComplemento = new Complemento({ nome, valor, imagem });
    const complementoSalvo: IComplemento = await novoComplemento.save();

    res.json(complementoSalvo);
  } catch (error) {
    console.error("Erro ao cadastrar complemento:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

// Rota para obter todos os complementos
router.get("/", async (req: Request, res: Response) => {
  try {
    const complementos: IComplemento[] = await Complemento.find();
    res.json(complementos);
  } catch (error) {
    console.error("Erro ao obter complementos:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

export default router;
