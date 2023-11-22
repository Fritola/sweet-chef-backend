import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bolosRoute from "./routes/bolos";
import coberturasRoutes from "./routes/coberturas";
import complementosRoutes from "./routes/complementos";
import formatosRoute from "./routes/formatos";
import massaRoute from "./routes/massas";
import pedidosRoute from "./routes/pedidos";
import usersRoute from "./routes/users";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // Este middleware processará o corpo JSON
app.use(cors());
app.use(express.json());
// Conectar ao MongoDB (substitua 'sua_url_de_conexao' pela URL do seu banco de dados)
mongoose.connect(
  "mongodb+srv://giovana:giovana123@cluster0.kzfumio.mongodb.net/?retryWrites=true&w=majority"
);

app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});

app.use("/users", usersRoute);
app.use("/pedidos", pedidosRoute);
app.use("/bolos", bolosRoute);
app.use("/formatos-de-bolo", formatosRoute);
app.use("/massa-de-bolo", massaRoute);
app.use("/coberturas-de-bolo", coberturasRoutes);
app.use("/complementos", complementosRoutes);
