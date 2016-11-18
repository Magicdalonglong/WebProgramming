const recipeData = require("./recipes");
const commentData = require("./comments");


const constructorMethod = (app) => {

	console.log("congfig fucntion called");
    app.use("/recipes", recipeData);
    app.use("/comments", commentData);

    

   
    // body... 

    app.use("*", (req, res) => {
        res.status(404).json({error:"not found" });
    });
};

module.exports = constructorMethod;