import mongoose, { ConnectionOptions } from "mongoose";
import config from './config'

(async () => {
    try {
        const mongooseOptions: ConnectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
    
        const db = await mongoose.connect(
            `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
            mongooseOptions
        );
        console.log("database is connected to:", db.connection.name);
    } catch (e) {
        console.log(e)
    }
})();
