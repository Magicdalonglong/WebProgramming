const express = require('express');
const router = express.Router();
const data = require("../data");
const textmanipulation = data.textmanipulation;

router.get("/clientform", (req, res) => {
    res.render("TextManipulation/static", {});
});

router.get("/serverform", (req, res) => {
    res.render("TextManipulation/server", {});
});

router.post("/serverform", (req, res) => {
    console.log('router.post is called');
    console.log("body is ");
    console.log(req.body);
    let text = req.body.text__;
    let string = req.body.string;
    let number = parseInt(req.body.number);

    let distance = parseInt(req.body.distance);

    var result;

    try {

        result = textmanipulation(text, string, number, distance);

    } catch (e) {
        res.render("TextManipulation/server", {
            text: text,
            string: string,
            number: number,
            distance: distance,
            error: e
        });
        return;
    }
    console.log(text);
    console.log(string);
    console.log(number);
    console.log(distance);
    res.render("TextManipulation/server", {
        text: text,
        string: string,
        number: number,
        distance: distance,
        result: result
    });
});

module.exports = router;