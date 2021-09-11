const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let db;
const mongoConnect = (callback) => {

	MongoClient.connect("mongodb+srv://dm124-admin:Z7OaGGuoYjoifkbo@clusterdm124.vny8c.mongodb.net/questionsDatabase?retryWrites=true&w=majority")
		.then(client => {
			db = client.db(); // client.db('databaseName');
			callback();
		})
		.catch();
};
const getDb = () => {
	if (db) {
		return db;
	}
	throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;