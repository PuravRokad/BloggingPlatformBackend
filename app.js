import express from "express";
import mongoose from "mongoose";
import userRouter from "./route/userRoute.js";
import blogRouter from "./route/blogRoute.js";

const app = express();
app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/blog",blogRouter);

mongoose.connect(
    "mongodb+srv://admin:admin%402024@cluster0.sy640.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => app.listen(3000))
.then(() => 
console.log("Connected to Database and Listening to localhost 3000")
)
.catch((err) => console.log(err))


// app.use("/", (req, res, next) => {
//     res.send("This is Request to Connect to Database");
// });