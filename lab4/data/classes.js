const mongoCollections = require("../config/mongoCollections");
const classes = mongoCollections.classes;

let exportedMethods = {
    getAllclasses() {
        return classes().then((classesCollection) => {
            return classesCollection.find({}).toArray();
        })
    },
    getclassBycode(code) {
        return classes().then((classesCollection) => {
            return classesCollection.findOne({ code: code }).then((classes) => {
                if (!classes) throw "class not found";
                return classes;
            });
        });
    },
    addClass(code,name, prof, description) {
        return classes().then((classesCollection) => {
            let newclasses = {
                code:code,
                name: name,
                prof: prof,
                description: description,
            };

            return classesCollection.insertOne(newclasses).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then(() => {
                return this.getclassBycode(code);
            });
        });
    },
    removeclasses(id) {
        return classes().then((classesCollection) => {
            return classesCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete classes with id of ${id}`)
                } else { }
            });
        });
    },
    updateclasses(id, title, body, classeserId) {
        return "Not implemented yet";
    }
}

module.exports = exportedMethods;