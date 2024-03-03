import mongoose from "mongoose";

const messageSchem = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
});

export const Message = mongoose.model("todos", messageSchem);
