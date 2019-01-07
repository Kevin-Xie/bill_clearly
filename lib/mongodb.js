const config = require('config');
import mongoose from 'mongoose';

let options = {
	useNewUrlParser: true
}

mongoose.connect(config.db.uri, options)
    .then(() => {
        console.log('connected')
    })
    .catch(err => {
        console.log('connect error', err)
    })


export default mongoose.connection;    