import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SportHistorySchema = new Schema({
	taskId: {
		type: String,
		required: true
	},
	
	progress: Number,
	
	occurDate: {
		type: Date,
		default: Date.now
	},
	
	description: String

}, {
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
})

SportHistorySchema.pre('save', next => {
	next();
})


const SportHistory = mongoose.model('SportHistory', SportHistorySchema);

export default SportHistory;