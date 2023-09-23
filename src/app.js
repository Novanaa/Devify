import "../configs/database/db.js";
import express from "express";
import cors from "cors";
import FileUpload from "express-fileupload";
const app = express();

// #
import mainRoutes from "./app/v1/main/routes/main.routes.js";
import productsRoutes from "./app/v1/products/routes/products.routes.js";
import booksRoutes from "./app/v1/books/routes/books.routes.js";
import usersRoutes from "./app/v1/users/routes/user.routes.js";

//# middlewares
app.use(express.json());
app.use(express.static("./public"));
app.use(cors());
app.use(FileUpload());

// Routes
app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/books", booksRoutes);
app.use("/users", usersRoutes);

export default app;
