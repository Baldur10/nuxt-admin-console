
/**
 * Command to start Docker
 * docker run -d  --name mymongodb  -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
 * Connect String to Connect to local instance
 * mongodb://root:secret@localhost:27017/?authSource=admin
 */
import mongoose from 'mongoose';
// mongoose.connect(`mongodb://root:secret@localhost:27017/test`);
const Main = async() => {
    const db = 'mongodb://root:secret@localhost:27017/database?authSource=admin'
    mongoose
        .connect(db)
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log("Error: ",err));
}

export {
    Main
}

