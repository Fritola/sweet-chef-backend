// models/Cobertura.ts
import mongoose, { Document, Schema } from "mongoose";

export interface ICobertura extends Document {
  nome: string;
  valor: number;
  imagem: string;
}

const coberturaSchema = new Schema({
  nome: { type: String, required: true },
  valor: { type: Number, required: true },
  imagem: { type: String, required: true },
});

const Cobertura = mongoose.model<ICobertura>("Cobertura", coberturaSchema);

export default Cobertura;
