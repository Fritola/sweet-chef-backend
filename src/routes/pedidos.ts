import express, { Request, Response } from "express";
import verifyToken from "../middlewares/verifyToken";
import Pedido, { IPedido } from "../models/Pedido";

const router = express.Router();

// Rota para cadastrar um pedido
router.post("/cadastrar", verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;

    const pedido: IPedido = new Pedido({
      formato: req.body.formato,
      massa: req.body.massa,
      cobertura: req.body.cobertura,
      acompanhamentos: req.body.acompanhamentos,
      total: req.body.total,
      usuario: userId,
    });
    console.log(pedido);
    const savedPedido: IPedido = await pedido.save();
    res.json(savedPedido);
  } catch (error: any) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;
