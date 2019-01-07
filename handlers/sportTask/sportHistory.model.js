import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SportTask = new Schema({
	taskId: String,
	
	amount: Number,
	
	occurDate: Date,
	
	description: String

}, {
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
})
