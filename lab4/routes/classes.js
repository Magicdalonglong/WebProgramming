const express = require('express');
const router = express.Router();
const data = require("../data");
const class_Data = data.classes;

router.get("/:details", (req, res) => {
    console.log('router.get/details is called');
    
    class_Data.getclassBycode(req.query.code).then((class_) => {
       
        re = {};
        re['name'] = class_.name;
        re['prof'] = class_.prof;
        re['description'] = class_.description;
        console.log(re);
        res.send(re);
        
    }, (error) => {
        // Not found!
        res.status(404).json({error: "Not class found!"});
    });
});

router.get("/", (req, res) => {

    class_Data.getAllclasses().then((class_List) => {
        let re = [];

        class_List.forEach((ele,index) => {
            re.push(ele['code']);
        });
        res.json(re);
    }, () => {
        // Something went wrong with the server!
        res.status(500).json({error: "Something went wrong with the server!"});
    });
});


router.post("/", (req, res) => {
    // Not implemented
    res.status(501).json({error:"Not implemented"});
});

module.exports = router;