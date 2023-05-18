import express, { Application } from "express";
import { AppSide } from "./app";
import { DbConnect } from "./Config/Db";

const app: Application = express();

AppSide(app);
DbConnect();
app.listen(2110, () => {
  console.log("Server is running");
});
