
/**
 * Command to start Docker
 * docker run -d  --name mongo-on-docker  -p 27888:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
 * Connect String to Connect to local instance
 * mongodb://mongoadmin:secret@localhost:27888/?authSource=admin
 * temp db: mongodb://mongoadmin:secret@localhost:27888/sellers
 */
import mongoose from 'mongoose';
// mongoose.connect(`mongodb://root:secret@localhost:27017/test`);
const Main = async() => {
    const db = 'mongodb://localhost:27017/sellers'
    mongoose
        .connect(db)
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log("Error: ",err));
}

export {
    Main
}

