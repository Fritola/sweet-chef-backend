import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface IPedido extends Document {
  formato: string;
  massa: string;
  cobertura: string;
  acompanhamentos: string[];
  total: number;
  usuario: Types.ObjectId;
}

const pedidoSchema = new Schema<IPedido>(
  {
    formato: String,
    massa: String,
    cobertura: String,
    acompanhamentos: [String],
    total: Number,
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "User", // Substitua pelo nome do modelo de usuário que você está usando
    },
  },
  { timestamps: true } // Adiciona automaticamente campos de timestamp (createdAt, updatedAt)
);

const Pedido: Model<IPedido> = mongoose.model("Pedido", pedidoSchema);

export default Pedido;
