// routes/coberturas.ts
import express, { Request, Response } from "express";
import Cobertura, { ICobertura } from "../models/Cobertura";

const router = express.Router();

// Rota para cadastrar uma cobertura
router.post("/cadastrar", async (req: Request, res: Response) => {
  try {
    const { nome, valor, imagem } = req.body;

    const novaCobertura = new Cobertura({ nome, valor, imagem });
    const coberturaSalva: ICobertura = await novaCobertura.save();

    res.json(coberturaSalva);
  } catch (error) {
    console.error("Erro ao cadastrar cobertura:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

// Rota para obter todas as coberturas
router.get("/", async (req: Request, res: Response) => {
  try {
    const coberturas: ICobertura[] = await Cobertura.find();
    res.json(coberturas);
  } catch (error) {
    console.error("Erro ao obter coberturas:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

export default router;
