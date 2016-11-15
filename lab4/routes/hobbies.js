const express = require('express');
const router = express.Router();
const data = require("../data");
const hobbyData = data.hobbies;

router.get("/:hobby", (req, res) => {
    
    hobbyData.gethobbiesByname(req.params.hobby).then((hobby) => {
       
        re = {};
        re['Hobby'] = hobby._name;
        re['description'] = hobby.description;
        res.json(re);
        
    }, (error) => {
        // Not found!
        res.status(404).json({error: "Not found!"});
    });
});

router.get("/", (req, res) => {

    hobbyData.getAllhobbies().then((hobbyList) => {
        let re = [];

        hobbyList.forEach((ele,index) => {
            re.push(ele['_name']);
        });
        res.json(re);
    }, () => {
        // Something went wrong with the server!
        res.status(500).json({error: "Something went wrong with the server!"});
    });
});
//Line 39: '__gnu_cxx::__alloc_traits<std::allocator<std::pair<int, int> > >::value_type {aka struct std::pair<int, int>}' has no member named 'fisrt'


router.post("/", (req, res) => {
    // Not implemented
    res.status(501).json({error:"Not implemented"});
});

module.exports = router;