class SportGoalHandler {
	constructor() {

    }
    
    createSportGoal(req, res, next) {
        
        res.send('createSportGoal');
    }
}

export default new SportGoalHandler();