import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from config.env
dotenv.config({ path: "./config/config.env" });

export const connectDB = async () => {
    try {
        const db = process.env.MONGO_URL;

        const { connection } = await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected to: ${connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit the process with failure
    }
};
