const app= require("./fileData");


let string;
app.getFileAsString('text.json')
.then(data=>{
	string = data;
	console.log('reading string from file');
})
.catch(err=>{
	console.log("err occur when read string from file" +  err);
});


let obj;
app.getFileAsJSON("text.json")
.then(data=>{
	console.log('reading Obj from file');
	obj = data;
})
.catch(err=>{
	//verson1 :
	console.log("err occur when read obj from file" + err);

	//version2 :
	//console.log(err);
});


setTimeout(() => {
	app.saveStringToFile('tosave',string).
then(res => {
	console.log("result of writing string to file: " + res);
})
.catch(err => {
	console.log('err occur when write string' + err)
});
},750);



setTimeout(() => {
	app.saveJSONToFile('tosave_obj',obj).
then(res => {
	console.log("result of writing obj to file: " + res);
})
.catch(err => {
	console.log('err occur when write obj' + err)
});
},750);


