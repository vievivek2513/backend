import { Message } from "../models/todo.js";

export const AddTodo = async (req, res) => {
  const { title, description } = req.body;
  const todo = await Message.create({
    title: title,
    description: description,
  });
  res.status(201).cookie("new thinig", "lol").json({
    success: true,
    status: 201,
    message: "Created Successfully",
  });
};

export const GetAllTodo = async (req, res) => {
  console.log("asdasd");
  const Alltodos = await Message.find({});

  res.status(201).json({
    success: true,
    status: 201,
    users: Alltodos,
    length: Alltodos.length,
  });
};

export const DeletTodo = async (req, res) => {
  const { id } = req.body;
  console.log("adasdasdasd", id);
  const foundTodo = await Message.findOne({ _id: id });
  if (!foundTodo) {
    // If no todo item with the specified ID is found, return an error
    return res.status(404).json({ success: false, message: "Todo not found" });
  } else {
    await Message.deleteOne(foundTodo);
    res.status(200).json({
      success: true,
      todo: foundTodo,
      message: "Deleted Successfully",
    });
  }
  // If the todo item is found, return it in the response
};

export const EditTodo = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  const filter = { _id: id };
  const update = {
    $set: {
      title,
      description,
    },
  };

  const result = await Message.updateOne(filter, update);
  if (result.modifiedCount === 1) {
    res.status(200).json({
      success: true,
      message: "Edit Successfully",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Todo Not found",
    });
  }
  // const { id } = req.body;
  // console.log("adasdasdasd", id);
  // const foundTodo = await Message.findOne({ _id: id });
  // if (!foundTodo) {
  //   // If no todo item with the specified ID is found, return an error
  //   return res.status(404).json({ success: false, message: "Todo not found" });
  // } else {
  //   await Message.deleteOne(foundTodo);
  //   res.status(200).json({
  //     success: true,
  //     todo: foundTodo,
  //     message: "Deleted Successfully",
  //   });
  // }
};
