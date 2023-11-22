// models/FormatoBolo.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IMassaBolo extends Document {
  nome: string;
  valor: number;
  imagem: string; // Adiciona o campo imagem
}

const massaBoloSchema = new Schema({
  nome: { type: String, required: true },
  valor: { type: Number, required: true },
  imagem: { type: String, required: true }, // Adiciona a definição do campo imagem
});

const MassaBolo = mongoose.model<IMassaBolo>("MassaBolo", massaBoloSchema);

export default MassaBolo;
