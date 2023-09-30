import "../configs/db.js";
import express from "express";
import cors from "cors";
import FileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
const app = express();

// # Routes Import
import mainRoutes from "./app/v1/main/routes/main.routes.js";
import productsRoutes from "./app/v1/products/routes/products.routes.js";
import booksRoutes from "./app/v1/books/routes/books.routes.js";
import usersRoutes from "./app/v1/users/routes/user.routes.js";
import authRoutes from "./app/v1/auth/routes/auth.routes.js";
import handleRequestError from "./middlewares/handleRequestError.js";

//# Middlewares
app.use(express.json());
app.use(express.static("./public"));
app.use(cors());
app.use(FileUpload());
app.use(cookieParser());
app.use(handleRequestError);

// Routes
app.use("/", mainRoutes);
app.use("/v1/products", productsRoutes);
app.use("/v1/books", booksRoutes);
app.use("/v1/users", usersRoutes);
app.use("/v1/auth", authRoutes);

// Routes Handling
import notFound from "./middlewares/404.js";
app.all("*", notFound);

export default app;
