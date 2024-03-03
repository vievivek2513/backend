import { connectDB } from "./data/database.js";
import { app } from "./index.js";

connectDB();

app.listen(process.env.port, () => {
  console.log("asdasd");
});

// app.get("/", (req, res) => {
//   //   res.render("./index",{name:"vivek" ,age :24});
//   res.sendFile("index");
// });
