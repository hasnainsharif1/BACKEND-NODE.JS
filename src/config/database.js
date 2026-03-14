import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoUrl = process.env.MONGODB_URL;

        console.log(`Connecting to MongoDB at: ${mongoUrl}`);

        const connectionInstance = await mongoose.connect(mongoUrl);

        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGO Connection ERROR", error);
        process.exit(1);
    }
};

export default connectDB;