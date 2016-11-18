console.log("here is app")

const bodyParser = require("body-parser")
const express = require("express");
const app = express();
const config = require("./routes");

app.use(bodyParser.json());
app.set('json spaces',2);

config(app);

app.listen(3000, () => {
	console.log('server is ready');
	console.log('the server will runing on localhost:3000')
});