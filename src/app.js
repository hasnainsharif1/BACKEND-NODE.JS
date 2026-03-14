import express from "express";
import userRoutes from "./routes/user.route.js";
// import postRoutes from "./routes/post.route.js";
import router from "./routes/user.route.js";


const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);


app.get("/", (req, res) => {
    res.send("API is working");
});

//http://localhost:5000/api/users/register

export default app;