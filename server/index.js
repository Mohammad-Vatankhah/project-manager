import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRout.js";

// Router

const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

mongoose
  .connect(process.env.MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(
      process.env.Port,
      console.log(`Listening to port ${process.env.Port}`)
    )
  )
  .catch((error) => console.log(error.message));

// usage of routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
