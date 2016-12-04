const TextManipulationRouter = require("./textmanipulation");

const constructorMethod = (app) => {
    app.use("/", TextManipulationRouter);

    app.use("*", (req, res) => {
        res.redirect("/clientform");
    })
};

module.exports = constructorMethod;