const mongoCollections = require("../config/mongoCollections");
const hobbies = mongoCollections.hobbies;

let exportedMethods = {
    getAllhobbies() {
        return hobbies().then((hobbiesCollection) => {
            return hobbiesCollection.find({}).toArray();
        })
    },
    gethobbiesByname(name) {
        return hobbies().then((hobbiesCollection) => {
            return hobbiesCollection.findOne({ _name: name }).then((hobbies) => {
                if (!hobbies) throw "hobbies not found";
                return hobbies;
            });
        });
    },
    addHobby(name, description) {
        return hobbies().then((hobbiesCollection) => {
            let newhobbies = {
                _name: name,
                description: description,
            };

            return hobbiesCollection.insertOne(newhobbies).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then(() => {
                return this.gethobbiesByname(name);
            });
        });
    },
    removehobbies(id) {
        return hobbies().then((hobbiesCollection) => {
            return hobbiesCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete hobbies with id of ${id}`)
                } else { }
            });
        });
    },
    updatehobbies(id, title, body, hobbieserId) {
        return hobbies().then((hobbiesCollection) => {
            return users.getUserById(hobbieserId)
                .then((userThathobbiesed) => {
                    let updatedhobbies = {
                        title: title,
                        body: body,
                        hobbieser: {
                            id: hobbieserId,
                            name: userThathobbiesed.name
                        }
                    };

                    return hobbiesCollection.updateOne({ _id: id }, updatedhobbies).then((result) => {
                        return this.gethobbiesById(id);
                    });
                });
        });
    }
}

module.exports = exportedMethods;