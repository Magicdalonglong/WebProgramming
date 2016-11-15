const express = require('express');
const router = express.Router();


router.get("/localstorage", (req, res) => {
    // same HTML for manual dom and jquery dom
    res.render("examples/localstorage", {});
});


module.exports = router;