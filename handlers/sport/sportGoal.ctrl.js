class SportGoalHandler {
	constructor() {

    }
    
    createSportGoal(req, res, next) {
        console.log(req.body)
        res.send('createSportGoal');
    }
}

export default new SportGoalHandler();