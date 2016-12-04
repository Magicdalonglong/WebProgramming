var express = require('express');
var app = express();

var requestTime = function (req, res, next) {
  let t = new Date()
  req.tt=t.getTime();
  next();
};

var order = function(req, res, next){

	req.gotosecond = "second";
	next();

};
app.use(requestTime);


app.get('/', function (req, res) {
  var responseText = 'Hello World!';
  console.log('req.tt is '+ req.tt);
  console.log('req.gotosecond is '+ req.gotosecond);


  res.send(responseText);
});
app.use(order);
app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});