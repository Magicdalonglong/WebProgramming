console.log("here is app")

const express = require("express");

let app = express();

let config = require("./routes");

config(app);

app.listen(3000, () => {
	console.log('server is ready');
	console.log('the server will runing on localhost:3000')
});