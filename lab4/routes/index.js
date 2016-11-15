const educationData = require("./educations");
const hobbyData = require("./hobbies");
const classData = require("./classes");


const constructorMethod = (app) => {

	console.log("congfig fucntion called");
    app.use("/education", educationData);
    app.use("/hobbies", hobbyData);
    app.use("/classes", classData);

    

   
    // body... 

    app.use("*", (req, res) => {
        res.status(404).json({error:"not found" });
    });
};

module.exports = constructorMethod;