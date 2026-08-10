import dotenv from "dotenv"
import express from "express"

dotenv.config({
    path:"./.env",
    override: true
});
console.log("PORT =", process.env.PORT);

const app = express();
const port = process.env.PORT || 3000;

app.get("/instagram", (req,res)=>{
   res.send("This is an ig page");
})

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`);
})