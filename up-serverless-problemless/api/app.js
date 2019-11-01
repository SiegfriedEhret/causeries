const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

process.on('uncaughtException', (err) => {
	console.log('uncaughtException', err);
	process.exit(1);
});

process.on('unhandledRejection', (err) => {
	console.log('unhandledRejection', err);
	process.exit(1);
});

const { MONGO_PASSWORD, MONGO_USERNAME, PORT = 3000 } = process.env;
const params = 'replicaSet=rs0';
// const params = 'ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0';
const mongoUrl = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@docdb-2019-10-31-23-35-21.cluster-cme4bkttdutq.eu-central-1.docdb.amazonaws.com:27017/?${params}`;

let db;

const app = express();

async function initDB() {
	console.log('initDB');

	// Use connect method to connect to the server
	const client = await MongoClient.connect(mongoUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		ssl: true,
		sslValidate: false,
		sslCA: fs.readFileSync('./rds-combined-ca-bundle.pem')
	});
	console.log('client', client);

	return await client.db('things');
}

// parse application/json
app.use(bodyParser.json());

app.get('/test', (req, res) => res.send('plop'));

app.get('/', async function(req, res) {
	console.log('le get');
	if (!db) {
		db = await initDB();
		console.log('db', db);
	}

	try {
		res.send(await db.collection('things').find().toArray());
	} catch (e) {
		console.error(e);
		res.sendStatus(500);
	}
});

app.post('/', async function(req, res) {
	console.log('le post');
	if (!db) {
		db = await initDB();
		console.log('db', db);
	}

	try {
		await db.collection('things').insertOne(req.body);
		res.sendStatus(201);
	} catch (e) {
		console.error(err);
		res.sendStatus(500);
	}
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));