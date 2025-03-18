import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
import { DB_NAME } from "./constants/cons.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin : "http://localhost:3000", credentials : true}));

console.log("MONGO_URI : ", process.env.MONGO_URI);
console.log("DB_NAME : ", DB_NAME);

mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


const port = process.env.PORT || 5000;

app.use("/api/users", userRoutes);
app.use("/api/homes", homeRoutes);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
})