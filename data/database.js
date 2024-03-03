import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "todo",
    })
    .then((c) => console.log("data base is connected"))
    .catch((e) => console.log(e));
};
