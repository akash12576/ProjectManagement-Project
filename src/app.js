import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//Basic Configuration
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser());

// Cors configurations
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost5173",
    credentials:true,
    methods: ["GET" , "POST", "PATCH", "PUT", "DELETE" ,"OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

// import the routes

import healthCheckRouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js"
import projectRouter from "./routes/project.routes.js"

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/projects", projectRouter);


app.get('/', (req, res) => {
    res.send('Welcome to home page')
})

export default app
