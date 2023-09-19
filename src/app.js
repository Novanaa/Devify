import "../configs/database/db.js";
import express from "express";
import cors from "cors";
import FileUpload from "express-fileupload";
const app = express();

// #
import productsRoutes from "./app/v1/products/routes/products.routes.js";
import mainRoutes from "./app/v1/main/routes/main.routes.js";

//# middlewares
app.use(express.json());
app.use(express.static("./public"));
app.use(cors());
app.use(FileUpload());

// Routes
app.use("/", mainRoutes);
app.use("/products", productsRoutes);

export default app;
