import SportGoalModel from './sportGoal.model';

class SportGoalService {
    constructor() {

    }

    async createSportGoal(data){
        let newSportGoal = {
            userId:  data.userId,
            taskName:  data.taskName,
            target:  data.target,
            current:  data.current,
            unit:  data.unit,
            description: data.description
        }
		try {
			return await new SportGoalModel(newSportGoal).save()
		} catch (error) {
			throw new Error(error);			
		}
    }
    
    async findByQuery(query) {
        try {
            let sportGoals = await SportGoalModel.find(query);
            return sportGoals;
        } catch (error) {
			throw new Error(error);			            
        }
    }
    // async findByUserName(userName){
	// 	try {
	// 		let user = await UserModel.findOne({userName});
	// 		return user;
	// 	} catch (error) {
	// 		throw new Error(error);			
	// 	}
	// };
}

export default new SportGoalService();
