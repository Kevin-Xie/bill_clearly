class SportHistoryHandler {
	constructor() {

    }
    
    createSportRecord(req, res, next) {
        res.send('createSportRecord');
    }
}

export default new SportHistoryHandler();