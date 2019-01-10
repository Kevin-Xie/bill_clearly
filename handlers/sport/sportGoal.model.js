import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SportGoalSchema = new Schema({

	userId: {
		type: String,
		required: true
	},
	
	taskName: {
		type: String,
		required: true
	},
	
	target: {
		type: Number,
		default: 0,
	},
	
	current: {
		type: Number,
		default: 0
	},	
	
	unit: String,
	
	description: String,

}, {
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
})

const SportGoal = mongoose.model('SportGoal', SportGoalSchema) 

export default SportGoal;