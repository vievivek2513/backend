import express from "express";

import {
  AddTodo,
  DeletTodo,
  EditTodo,
  GetAllTodo,
} from "../controllers/todo.js";

const router = express.Router();

router.post("/add", AddTodo);

router.get("/all", GetAllTodo);

router.delete("/delete", DeletTodo);

router.put("/edit/:id", EditTodo);

export default router;
