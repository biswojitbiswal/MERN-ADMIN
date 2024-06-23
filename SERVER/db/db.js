import monggose from 'mongoose'

const connectDB = async() => {
    try {
        const connrctionInstance = monggose.connect(`${process.env.MONGODB_URL}`)
        console.log(`MongoDB connected successful!`);
    } catch (error) {
        console.log("MongoDb connection failed", error);
        process.exit(1);
    }
}

export default connectDB