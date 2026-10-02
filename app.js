import express from "express";
import mongoose from "mongoose";
import path from "path";
import contactRoutes from "./routes/contacts.js";
import {conectDB} from "./config/database.js";


import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT=process.env.PORT;

conectDB();

// ===== Middlewares / Settings =====
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/",contactRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
