import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";

import router from "./Routes/index.js";
import ErrorHandler from "./Middlewares/errorHandler.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(json());

app.use(router);

app.use(ErrorHandler.error);

export default app;
