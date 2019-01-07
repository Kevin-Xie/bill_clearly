module.exports = {
    db: {
        uri: 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost:27017') + '/goal_plan'
    }
}