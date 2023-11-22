import mongoose, { Document, Model, Schema } from "mongoose";

export interface IUser extends Document {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
}

const userSchema = new Schema<IUser>({
  nome: String,
  email: String,
  senha: String,
  telefone: String,
});

const User: Model<IUser> = mongoose.model("User", userSchema);

export default User;
