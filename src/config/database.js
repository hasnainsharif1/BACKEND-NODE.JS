import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log( ` \n MongooseDB connectd !!!`);
        console.log(`Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Connection Failed !!! ")
        process.exit(1)
    }
}

export default connectDB;

