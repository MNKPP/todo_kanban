import mongoose from "mongoose";

function connectDb() {

    const { MONGO_URI } = process.env;

    mongoose.connect(MONGO_URI, {  })
        .then(() => {
            console.log('Connection to MongoDB is successful !');
        })
        .catch((e) => {
            console.log('Connection to MongoDb failed !');
            console.error(e);
        });

    return mongoose.connection;
}

export default connectDb;