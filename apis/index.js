import express  from "express";
import userRoutes from "./routes/users.js"
import commentRoutes from "./routes/comments.js"
import likesRoutes from "./routes/likes.js"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

//MIDDLEWARE
app.use(express.json()) // user to send data into json format
app.use(cors())
app.use(cookieParser())

app.use("/api/users", userRoutes)
app.use("/api/likes", likesRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/post", postRoutes)

app.listen(5000, () =>{
    console.log("API working....")
});