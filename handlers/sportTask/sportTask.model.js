import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SportTask = new Schema({
	UserId: String,
	
	taskName: String,
	
	target: Number,
	
	current: Number,
	
	unit: String,
	
	description: String,

}, {
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
})
