console.log('here is app2');

const todo = require("./todo");


let id1;
let id2;
console.log('\ngoing to create a task')

todo.creatTask('Homework1','exe1.3, exe1.4')
.then(task => {
	id1 = task['_id'];
	console.log('create successfully');
	console.log(task);
})
.catch(err => {
	console.log('err occur when create: '+ err);
});



setTimeout(() => {

	console.log('\ngoing to create another task')
	todo.creatTask('Homework2','exe2.3, exe2.4,exe2.9')
	.then(task => {
		id2 = task['_id'];
		console.log('create successfully');
		console.log(task);
	})
	.catch(err => {
		console.log('err occur when create: '+ err);
	});

},750);




setTimeout(() => {

	console.log('\ngoing to complete by invalid id')
	todo.completeTask('id1212').then(item => {
		console.log('completeTask successfully');
		console.log(item);
	}).catch(err => {
		console.log('completeTask failed ,'+err);
	});

},1500);


setTimeout(() => {

	console.log('\ngoing to complete by valid id')
	todo.completeTask(id1).then(item => {
		console.log('completeTask successfully');
		console.log(item);
	}).catch(err => {
		console.log('completeTask failed ,'+err);
	});

},2250);


setTimeout(() => {

	console.log('\ngoing to get by valid id')
	todo.getTask(id1).then(item => {
		console.log('get successfully');
		console.log(item);
	}).catch(err => {
		console.log('err occur when get: '+ err);
	});

},3000);


setTimeout(() => {

	console.log('\ngoing to get by invalid id')
	todo.getTask('ass').then(item => {
		console.log('get successfully');
		console.log(item);
	}).catch(err => {
		console.log('err occur when get: '+ err);
	});

},3750);


setTimeout(() => {

	console.log('\ngoing to getall')
	todo.getAllTasks().then(item => {
		console.log('getall successfully');
		console.log(item);
	});

},4500);






setTimeout(() => {
	console.log('\ngoing to remove by invalid id')

	todo.removeTask('12').then(remove_info => {
		console.log(remove_info);
	}).catch(err => {
		console.log('err occur when remove: '+ err);
	});

},5250);



setTimeout(() => {
	console.log('\ngoing to remove by valid id')

	todo.removeTask(id1).then(remove_info => {
		console.log(remove_info);
	}).catch(err => {
		console.log('err occur when remove: '+ err);
	});

},6000);


setTimeout(() => {

	console.log('\ngoing to getall again')
	todo.getAllTasks().then(item => {
		console.log('getall successfully');
		console.log(item);
	});

},6750);

setTimeout(() => {

	console.log('\n=====Demo completed, thank you!=====')

},7500);


