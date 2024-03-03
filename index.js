import express from "express";
import path from "path";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import cors from "cors";

export const app = express();
config({
  path: "./data/config.env",
});

app.use(express.json());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/", (req, res) => {
  res.render("./index", { name: "vivek", age: 24 });
});

app.use("/api/v1/todo", userRouter);

// app.use(express.static(path.join(path.resolve(), "public")));

// app.set("view engine", "ejs");
