import express, { Request, Response } from "express";
import Bolo, { IBolo } from "../models/Bolo";

const router = express.Router();

// Rota para cadastrar um bolo
router.post("/cadastrar", async (req: Request, res: Response) => {
  try {
    const bolo: IBolo = new Bolo({
      nome_formato: req.body.nome_formato,
      preco_formato: req.body.preco_formato,
      nome_massa: req.body.nome_massa,
      preco_massa: req.body.preco_massa,
      nome_cobertura: req.body.nome_cobertura,
      preco_cobertura: req.body.preco_cobertura,
      nome_acompanhamento: req.body.nome_acompanhamento,
      preco_acompanhamento: req.body.preco_acompanhamento,
      imagem: req.body.imagem,
    });

    const savedBolo: IBolo = await bolo.save();
    res.json(savedBolo);
  } catch (error: any) {
    res.status(400).json({ error: (error as Error).message });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const bolos: IBolo[] = await Bolo.find();
    res.json(bolos);
  } catch (error) {
    console.error("Erro ao obter bolos:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

export default router;
