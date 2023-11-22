// models/Complemento.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IComplemento extends Document {
  nome: string;
  valor: number;
  imagem: string;
}

const complementoSchema = new Schema({
  nome: { type: String, required: true },
  valor: { type: Number, required: true },
  imagem: { type: String, required: true },
});

const Complemento = mongoose.model<IComplemento>(
  "Complemento",
  complementoSchema
);

export default Complemento;
