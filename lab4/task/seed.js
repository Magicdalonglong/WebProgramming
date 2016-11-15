const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const educations = data.educations;
const hobbies = data.hobbies;
const classes = data.classes;

dbConnection().then(db => {
    return db.dropDatabase().then(() => {
        return dbConnection;
    }).then(() =>{

        return educations.addEducation("highschool", "First Highschool of Xianshuigu")
            .then(() => {
                return educations.addEducation("undergrad", "China University of Geosciences", "Bachelor of Engineering");
            })
            .then(() => {
                return hobbies.addHobby("Fitness", "Still entry level, three or four times a week, it gives me energy and health");
            })
            .then(() => {
                return hobbies.addHobby("Travel", "I love both metropolis and nature, it relases me from pressure and put so many beautifyl pictures into my albums and my memory");
            })
            .then(() => {
                return hobbies.addHobby("TV show", "Big fun of Game of thrones, I'd like study hints to figure out questions like who is the prince that was promised");
            })
            .then(() => {
                return classes.addClass("CS600", "Adv. Alogrithsm design and implementation","Reza PeyrovianDesign, implementation, and asymptotic time and space analysis of advanced algorithms, as well as analyzing worst-case and average-case complexity of algorithms. Students will be expected to run experiments to test the actual performance of the algorithms on sample inputs. Introduction to NP-complete problems and approximation algorithms.");
            })
            .then(() => {
                return classes.addClass("CS521", "TCP/IP Networking","Moshiur Rahman","The objective of this course is to provide a unified view of data and computer communications, emphasizing on the application and design of TCP/IP networking. In this course, students gain the knowledge and skills required to analyze and develop solutions to solve TCP/IP networking problems of modern data communications, services and related tools and technologies");
            })
            .then(() => {
                return classes.addClass("CS546", "Web Programming","Philip Barresi","This course will provide students with a first strong approach of internet programming. It will give the basic knowledge on how the Internet works and how to create advanced web sites by the use of script languages, after learning the basics of HTML. The course will teach the students how to create a complex global site through the creation of individual working modules, giving them the skills required in any business such as proper team work and coordination between groups.");
            })
            .then(() => {
                return classes.addClass("CS545", "Human-Computer Interaction","Gregg T. Vesonder","This course targets how to create effective, efficient and enjoyable human computer interactions using both standard and emerging techniques. It explores psychological foundations, fundamental concepts, task analysis, requirements analysis and techniques for design and implementation. The course also will explore how anthropological and ethnographic techniques are emerging as important methodologies in computer system development.");
            })
            .then(() => {
                return classes.addClass("CS810", "Programming the Internet of Things using iOS ","Dimitrios Damopoulos ","The growth of the “Internet of Things” is changing our world allowing people to innovate new designs that can change the world. By looking at a variety of real-world application scenarios of the IoT and diverse implemented applications, the various understandings and requirements of IoT applications become apparent. This allows students to understand what IoT technologies are used for today, and what is required in certain scenarios. Finally, students will be given the opportunity to apply these technologies to design and develop applications for popular iOS devices (iPhone, Apple watch, Apple TV), using Swift, the new programming language by apple.");
            });
            
    }).then(() => {
        let d = new Date();
        let time = d.toLocaleTimeString();
        console.log("Done seeding database: "+time);
        db.close();
    }).catch(err => {
        console.error(err);
    });
}, (error) => {
    console.error(error);
});