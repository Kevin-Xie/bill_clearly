import SportGoal from './sportGoal.model';

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
			return await new SportGoal(newSportGoal).save()
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
