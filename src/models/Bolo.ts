import mongoose, { Document, Model, Schema } from "mongoose";

export interface IBolo extends Document {
  nome_formato: string;
  preco_formato: number;
  nome_massa: string;
  preco_massa: number;
  nome_cobertura: string;
  preco_cobertura: number;
  nome_acompanhamento: string;
  preco_acompanhamento: number;
  imagem: string; // Adicione o campo "imagem" como uma string
}

const boloSchema = new Schema<IBolo>({
  nome_formato: String,
  preco_formato: Number,
  nome_massa: String,
  preco_massa: Number,
  nome_cobertura: String,
  preco_cobertura: Number,
  nome_acompanhamento: String,
  preco_acompanhamento: Number,
  imagem: String, // Defina a imagem no schema
});

const Bolo: Model<IBolo> = mongoose.model("Bolo", boloSchema);

export default Bolo;
