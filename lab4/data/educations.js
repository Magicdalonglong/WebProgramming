const mongoCollections = require("../config/mongoCollections");
const educations = mongoCollections.educations;

let exportedMethods = {
    getAllEducations() {
        return educations().then((educationCollection) => {
            return educationCollection.find({},{schoolname:0}).toArray();
        })
    },
    getEducationBydegree(degree) {
        return educations().then((educationCollection) => {
            return educationCollection.findOne({ _degree: degree }).then((education) => {
                if (!education) throw "education not found";
                return education;
            });
        });
    },
    addEducation(degree, schoolname, thisdegree) {
        return educations().then((educationCollection) => {
            let neweducation = {
                _degree: degree,
                schoolname: schoolname,
                thisdegree: thisdegree
            };

            return educationCollection.insertOne(neweducation).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then(() => {
                return this.getEducationBydegree(degree);
            });
        });
    },
    removeEducation(id) {
        return educations().then((educationCollection) => {
            return educationCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete education with id of ${id}`)
                } else { }
            });
        });
    },
    updateEducation(id, title, body, educationerId) {
        return educations().then((educationCollection) => {
            return users.getUserById(educationerId)
                .then((userThateducationed) => {
                    let updatededucation = {
                        title: title,
                        body: body,
                        educationer: {
                            id: educationerId,
                            name: userThateducationed.name
                        }
                    };

                    return educationCollection.updateOne({ _id: id }, updatededucation).then((result) => {
                        return this.geteducationById(id);
                    });
                });
        });
    }
}

module.exports = exportedMethods;