import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import fiestasRoutes from "./routes/fiestas.routes.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.set("port",PORT);
app.use(cors());
app.use(express.json());
app.use("/api/",fiestasRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connect to DB"))
.catch((error)=>console.error(error));

app.listen(PORT,()=>{
    console.log(`Listening in port ${PORT}`);
});