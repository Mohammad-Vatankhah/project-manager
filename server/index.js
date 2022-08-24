import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import ProjectRoute from "./Routes/ProjectRoute.js";
import CompanyRoute from "./Routes/CompanyRoute.js";
import UploadRoute from "./Routes/UploadRoute.js";
// Router

const app = express();

// make images folder accessible
app.use(express.static("public"));
app.use("/images", express.static("images"));

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
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
app.use("/project", ProjectRoute);
app.use("/company", CompanyRoute);
app.use("/upload", UploadRoute);
