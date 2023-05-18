import mongoose from "mongoose";

interface User {
  email: string;
  password: string;
  fullName: string;
  stack: string;
}

interface IUser extends User, mongoose.Document {}
