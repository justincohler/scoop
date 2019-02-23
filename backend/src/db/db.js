const credentials = require('./credentials.json')

module.exports = {
    DB: `mongodb://${credentials.username}:${credentials.password}@scoop-shard-00-00-sqmwx.mongodb.net:27017,scoop-shard-00-01-sqmwx.mongodb.net:27017,scoop-shard-00-02-sqmwx.mongodb.net:27017/test?ssl=true&replicaSet=scoop-shard-0&authSource=admin&retryWrites=true`
}