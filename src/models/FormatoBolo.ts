// models/FormatoBolo.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IFormatoBolo extends Document {
  nome: string;
  valor: number;
  imagem: string; // Adiciona o campo imagem
}

const formatoBoloSchema = new Schema({
  nome: { type: String, required: true },
  valor: { type: Number, required: true },
  imagem: { type: String, required: true }, // Adiciona a definição do campo imagem
});

const FormatoBolo = mongoose.model<IFormatoBolo>(
  "FormatoBolo",
  formatoBoloSchema
);

export default FormatoBolo;
