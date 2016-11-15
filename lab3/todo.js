const MongoCollection = require("./MongoDBCollection");
const uuid = require('node-uuid');
const todoItems = MongoCollection.todoItems;

var arr = new Array(32);
module.exports = {

	creatTask (title, description) {
		if(!title)
			return Promise.reject("No title provided");
		if(!description)
			return Promise.reject("No description provided");

		return todoItems().then((todoItemscollection) => {
            let newItem = {
            	_id: uuid.v1(),
                title: title,
                description: description,
                completed: false,
                completedAt: null
            };

            return todoItemscollection.insertOne(newItem).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getTask(newId);
            }).catch(err => {
            	return Promise.reject(err);
            });
        }); 

	},
	getTask(id) {
		if(!id)
			return Promise.reject("You must provide an id");

		return todoItems().then(todoItemscollection => {
			return todoItemscollection.findOne({_id: id})
			.then(item => {
				if(!item)return Promise.reject("No task found");
				return item;
			})			

		});
	},

	getAllTasks() {

		return todoItems().then(todoItemscollection => {
			return todoItemscollection.find().toArray();
		});				
	},
	completeTask(taskId){
		if(!taskId)
			return Promise.reject("You must provide an id");

		return todoItems().then(todoItemscollection => {
				let d = new Date();
				let time = d.toLocaleTimeString();
				

				return todoItemscollection.updateOne(
					{'_id': taskId}, 
					{
						$set:{
							"completed": true,
							"completedAt": time
							}
					}
				)
				.then(() =>{
					return this.getTask(taskId);
				});
		});	


	},
	removeTask(id) {
		if(!id)
			return Promise.reject("You must provide an id");
		return todoItems().then((todoItemscollection) => {
            return todoItemscollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    return Promise.reject(`Could not delete task with id of ${id}`)
                }
                return "Remove successfully";
            });
        });

	}



}