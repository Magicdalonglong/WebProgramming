console.log('here is app');

const todo = require("./todo");


let id;
let title1 = 'Ponder Dinosaurs';
let des1 = 'Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?';


let title2 = "Play Pokemon with Twitch TV";
let des2 = "Should we revive Helix?";

console.log('\ngoing to create a task')

todo.creatTask(title1,des1).then(task => {
	id = task['_id'];
	console.log(task);
})
.catch(err => {
	console.log('err occur when create: '+ err);
});



setTimeout(() => {
	console.log('\ngoing to create another task')

	todo.creatTask(title2,des2).then(task => {
		console.log(task);
	})
	.catch(err => {
		console.log('err occur when create: '+ err);
	});
},750);



setTimeout(() => {
	console.log('\ngoing to getAllTasks')

	todo.getAllTasks().then(item => {
		console.log(item);
	})
	.catch(err => {
		console.log('err occur when getall: '+ err);
	});
},1500);



setTimeout(() => {
	console.log('\ngoing to removeTask')

	todo.removeTask(id).then(remove_info => {
		console.log(remove_info);
	}).catch(err => {
		console.log('err occur when remove: '+ err);
	});
},2250);


let idlist = [];
setTimeout(() => {
	console.log('\ngoing to getAllTasks')

	todo.getAllTasks().then(item => {
		console.log(item);		

		item.forEach( function(element, index) {
			idlist.push(element['_id']);
		});
	})
	.catch(err => {
		console.log('err occur when getall: '+ err);
	});
},3000);



let time = 0;

setTimeout(() => {
idlist.forEach( function(element, index) {
	time++;
	setTimeout(() => {
		console.log('\ngoing to completeTask')

		todo.completeTask(element).then(item => {
			console.log("completeTask successfully");
		}).catch(err => {
			console.log('completeTask failed ,'+err);
		});
	},index*750);
});

},3750);




setTimeout(() => {
	console.log('\ngoing to getAllTasks')

	todo.getAllTasks().then(item => {
		console.log(item);
	})
	.catch(err => {
		console.log('err occur when getall: '+ err);
	});
},4500+time*750);



setTimeout(() => {

	console.log('\n=====Demo completed, thank you!=====')

},5250+time*750);


