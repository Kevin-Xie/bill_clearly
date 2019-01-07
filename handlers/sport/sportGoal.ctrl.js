import SportGoalSevice from './sportGoal.serv';

class SportGoalHandler {
	constructor() {

    }
    
    async createSportGoal(req, res, next) {
        SportGoalSevice.createSportGoal(req.body)
            .then((result) => {
                res.json({isSuccess: true, data: result});
            })
            .catch(err => {
                res.json({isSuccess: false, error: err.message});
            })

    }

    getSportGoal(req, res, next) {

    }
}

export default new SportGoalHandler();