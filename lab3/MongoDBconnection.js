const MongoClient = require("mongodb").MongoClient;

const settings = {
	setting :{
		serverURL: "mongodb://localhost:27017/",
		database : "lab3"
	}

};

let fullmongoURL =  settings.setting.serverURL + settings.setting.database;

let myconnection = undefined;

let connectmethod = () => {

	if(!myconnection){
		myconnection = MongoClient.connect(fullmongoURL)
		.then (db => {
			return db;	
		});

	}
	return myconnection;

};

module.exports  = connectmethod;