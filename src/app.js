import express from "express";
import cors from "cors";
const app = express();

//Basic Configuration
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

// Cors configurations
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost5173",
    credentials:true,
    methods: ["GET" , "POST", "PATCH", "PUT", "DELETE" ,"OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))


app.get('/', (req, res) => {
    res.send('Welcome to home page')
})

export default app
