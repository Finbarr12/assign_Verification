import express, { Application } from "express";
import cors from "cors";

export const AppSide = (app: Application) => {
  app.use(express.json()).use(cors());
};
