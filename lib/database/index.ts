import mongoose from "mongoose";
let cached = (global as any).mongoose || { conn: null, promise: null };

const MONDGODB_URI = process.env.MONGODB_URI;

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONDGODB_URI) throw new Error("MongoDB Uri is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONDGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
