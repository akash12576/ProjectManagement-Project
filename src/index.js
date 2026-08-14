import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

import dotenv from "dotenv"
import app from "./app.js";
import connectDB from "./db/index.js"


dotenv.config({
    path:"./.env",
    override: true
});
console.log("PORT =", process.env.PORT);
console.log("MONGO_URI exists =", !!process.env.MONGO_URI);
const port = process.env.PORT || 3000;

connectDB()
 .then(() => {
    app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`);
})
 })
 .catch((err) => {
    console.error("MongoDB connection error" , err);
    process.exit(1);
 })