const express = require('express');
const router = express.Router();
const data = require("../data");
const educationData = data.educations;

router.get("/highschool", (req, res) => {
    educationData.getEducationBydegree("highschool").then((education) => {    
        res.json(education.schoolname);      
    }, (error) => {
        // Not found!
        res.status(404).json({error: "Not found!"});
    });
});

router.get("/undergrad", (req, res) => {
    educationData.getEducationBydegree("undergrad").then((education) => {     
       
        let re = {};
        re['SchoolName'] = education.schoolname;
        re['Degree'] = education.thisdegree;
        res.json(re);             
    }, (error) => {
        // Not found!
        res.status(404).json({error: "Not found!"});
    });
});




router.get("/", (req, res) => {
    educationData.getAllEducations().then((educationList) => {
        console.log("get /education callded");
        console.log(educationList);
       
        res.json(educationList);
    }, (err) => {
        console.log(err);
        // Something went wrong with the server!
        res.status(500).json({error: "Something went wrong with the server!!"});
    });
});

router.post("/", (req, res) => {
    // Not implemented
    res.status(501).json({error:"Not implemented"});
});

module.exports = router;