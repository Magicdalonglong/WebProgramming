const app= require("./textMetrics");
const f= require("./fileData");

let obj = app.createMetrics("how are you? i am me.");
console.log(obj);



// f.getFileAsString('chapter1.txt')
// .then(data => {
// 	console.log('try createMetrics on chapter1.txt in the lab2 : ')
// 	let obj = app.createMetrics(data);
// 	console.log(obj);
// })
// .catch(err => {
// 	console.log(err);
// })



// f.getFileAsString('chapter2.txt')
// .then(data => {
// 	console.log('try createMetrics on chapter2.txt in the lab2 : ')

// 	let obj = app.createMetrics(data);
// 	console.log(obj);
// })
// .catch(err => {
// 	console.log("err occur when reading string from file "+)
// 	console.log(err);
// })


// f.getFileAsString('chapter3.txt')
// .then(data => {
// 	console.log('try createMetrics on chapter3.txt in the lab2 : ')

// 	let obj = app.createMetrics(data);
// 	console.log(obj);
// })
// .catch(err => {
// 	console.log(err);
// })