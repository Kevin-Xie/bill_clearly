import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nickName: String,

    email: {
        type: String,
		lowercase: true,
		unique: true,
    },

	phone: {
        type: String,
		unique: true,
    },
    
	password: {
        type: String,
		required: true
    },
    
    salt: {
		type: String,
	}
}, {
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
})

const User = mongoose.model('User', UserSchema);

export default User;