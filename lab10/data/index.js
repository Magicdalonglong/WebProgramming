const uuid = require('node-uuid');
const bcrypt = require("bcrypt-nodejs");

var user = [{
        _id: uuid.v4(),
        username: 'masterdetective123',
        displayname : 'Sherlock Holmes',
        First_Name: 'Sherlock',
        Last_Name: 'Holmes',
        Profession: 'Detective',
        Bio: 'Sherlock Holmes(/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle.Known as a "consulting detective" in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.',
        Password: '$2a$10$BoT5q0.lXtM3..qi60f.oe/VpxbTz6LuaF5tHZ8FkprydmKUGT0pW'
    }, {
        _id: uuid.v4(),
        username: 'lemon',
        displayname : 'Liz Lemon',

        First_Name: 'Elizabeth',
        Last_Name: 'Lemon',
        Profession: 'Writer',
        Bio: 'Elizabeth Miervaldis "Liz" Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.',
        Password: '$2a$10$G5n7HVXriS/.MV8tpJrczOqaoqmwuF/4SEZe.H9wzV0JKLPlJVihe'
    },

    {
        _id: uuid.v4(),
        username: 'theboywholived',
        displayname : 'Harry Potter',
        First_Name: 'Harry',
        Last_Name: 'Potter',
        Profession: 'Student',
        Bio: 'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry\'s struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles.',
        Password: '$2a$10$RMPATnIsGSNWt/zS0hte8emsI4zsPOcPdw1aAyM.2AVQr/GBmmOk2'
    }

]





// let compareFirstPassword = hashedPassword.then(function(hash) {
//     return new Promise((resolve, reject) => {

//         // Load hash from your password DB.
//         bcrypt.compare("merlinsbeard", hash, function(error, res) {
//             if (res === true) {
//                 console.log("merlinsbeard maches the hash");
//                 resolve(resolve);
//             } else {
//                 reject(error);
//                 console.log("merlinsbeard does not match the hash");
//             }
//         });
//     });
// });


exports.findOne = function(username, password) {
    console.log('findone called new');
    let usr = user.filter(x => x.username === username).shift();
    if (!usr)
        return Promise.reject("No user found");

    if (bcrypt.compareSync(password, usr.Password)) {
        console.log('Bingo! username hashedPassword both mathed');
        return Promise.resolve(usr);
    } else {
        console.log("Wrong password");
        return Promise.reject("Wrong password");
    }


}

exports.findtest = function() {

    let res = user.filter(x => x.username === 'masterdetective123').shift();
    return Promise.resolve(res);

}


exports.findById = function(id) {
    console.log('findById called');

    let res = user.filter(x => x._id === id).shift();
    if (!res)
        return Promise.reject("No user found");

    return Promise.resolve(res);

}