class SportTaskHandler {
	constructor() {

    }
    
    createSportTask(req, res, next) {
        res.send('createSportTask');
    }
}

export default new SportTaskHandler();