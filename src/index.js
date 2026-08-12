import dotenv from "dotenv"
import app from "./app.js";
dotenv.config({
    path:"./.env",
    override: true
});
console.log("PORT =", process.env.PORT);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`);
})