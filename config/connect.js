import mongoose from "mongoose";
import colors from "colors";

export const connect = async () => {
  try {
    const connect_database = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Connected to database on ${connect_database.connection.host}`);
  } catch (error) {
    console.log(`Error is ${error}`.bgRed.white);
  }
};
