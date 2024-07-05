import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors(
    cors({
      origin: ["https://deploy.mern-.vercel.app"],
      methods: ["CREATE", "UPDATE", "DELETE", "FETCH_ALL"],
      credentials: true,
    })
  )
);

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://Dila:pass1234@cluster0.4uw4wdq.mongodb.net/Data_Base?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
