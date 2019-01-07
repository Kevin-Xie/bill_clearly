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

    async getSportGoal(req, res, next) {
        SportGoalSevice.findByQuery(req.query)
            .then(result => {
                res.json({isSuccess: true, data: result});
            })
            .catch(err => {
                res.json({isSuccess: false, error: err.message});
            })
    }
}

export default new SportGoalHandler();