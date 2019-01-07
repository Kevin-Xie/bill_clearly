const config = require('config');
import mongoose from 'mongoose';

let options = {
	useNewUrlParser: true
}

mongoose.connect(config.db.uri, options)
    .then(() => {
        console.log(`MongoDB connected at ${config.db.uri}`);
    })
    .catch(err => {
        mongoose.disconnect();
		console.error('MongoDB connection error');
		throw new Error(err);
    })


export default mongoose.connection;    