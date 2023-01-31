import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(helmet());
dotenv.config();

const port = process.env.SERVER_PORT || 3001;

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    throw Error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/", (req, res) => {
  res.send({ msg: "testing route..." });
});
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(port, () => {
  connect();
  console.log(`Server listening at http://localhost:${port}`);
});

export default app;
