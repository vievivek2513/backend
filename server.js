import { connectDB } from "./data/database.js";
import { app } from "./index.js";

connectDB();

app.listen(process.env.port, () => {
  console.log(`server is running on port ${process.env.port}`);
});
