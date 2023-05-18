import mongoose from "mongoose";

const URI = "mongodb://localhost/AuthDb";

export const DbConnect = async () => {
  try {
    const Connection = await mongoose.connect(URI);
    console.log(`DB is connected to ${Connection.connection.host}`);
  } catch (error) {
    console.log("An error occured");
  }
};
