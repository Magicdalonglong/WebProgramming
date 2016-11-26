const noteData = require("./note");

const constructorMethod = (app) => {
    app.use("/note", noteData);

    app.use("*", (req, res) => {
        res.render("misc/debug",{err:"Page not found"});
    });
};

module.exports = constructorMethod;