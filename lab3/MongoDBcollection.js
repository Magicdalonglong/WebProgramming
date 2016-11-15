const dbconnection = require("./MongoDBconnection");

let getcollectionmethod = (collection) =>{
	let col= undefined;
	return () => {
		if(!col){
			col = dbconnection()
			.then(db => {
				return db.collection(collection);

			});
			
		}
		return col;
	}
}

module.exports = {

	todoItems: getcollectionmethod("todoItems")
}