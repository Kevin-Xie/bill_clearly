class UserHandler {
	constructor() {

    }
    
    getUsers(req, res, next) {
        res.send('getUsers');
    }
}

export default new UserHandler();