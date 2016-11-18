const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;


router.get("/recipe/:recipeId", (req, res) => {
    
    recipeData.getcommentByRecipeId(req.params.recipeId).then((comments) => {

        res.json(comments);
        
    }, (error) => {
        // Not found!
        res.status(404).json({error: "Not found!"});
    });
});

router.get("/:commentId", (req, res) => {
    
    recipeData.getcommentById(req.params.commentId).then((comment) => {

        res.json(comment);
        
    }, (error) => {
        // Not found!
        res.status(404).json({error: "Not found!"});
    });
});

router.post("/:recipeId", (req, res) => {

    recipeData.addcomment(req.params.recipeId,req.body).
    then(comment =>{
        res.json(comment);
    },() => {
          res.status(501).json({error:"Something went wrong with the server when addcomment!"});
      });  
});

router.put("/:recipeId/:commentId", (req, res) => {
    console.log('updatecomments will be called');


    recipeData.updatecomments(req.params.commentId,req.params.recipeId,req.body).
    then(comment =>{
        res.json(comment);
    },() => {
          res.status(501).json({error:"Something went wrong with the server when updatecomments!"});
      });  
});

router.delete("/:id", (req, res) => {

    recipeData.removecomments(req.params.id).
    then(info =>{
        res.json(info);
    },() => {
          res.status(501).json({error:"Something went wrong with the server when removecomments!"});
      });  
});




module.exports = router;