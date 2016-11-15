const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/:id", (req, res) => {
    
    recipeData.getRecipeById(req.params.id).then((recipe) => {
        res.json(recipe);
        
    }, (error) => {
        // Not found!
        res.status(404).json({error: "Not found!"});
    });
});

router.get("/", (req, res) => {

    recipeData.getAllRecipes().then((recipes) => {
     
        res.json(recipes);
    }, () => {
        // Something went wrong with the server!
        res.status(500).json({error: "Something went wrong with the server when getAllRecipes!"});
    });
});
//Line 39: '__gnu_cxx::__alloc_traits<std::allocator<std::pair<int, int> > >::value_type {aka struct std::pair<int, int>}' has no member named 'fisrt'


router.post("/", (req, res) => {

    recipeData.addRecipe(req.body).
    then(recipe =>{
        res.json(recipe);
    },() => {
          res.status(501).json({error:"Something went wrong with the server when addRecipe!"});
      });  
});

router.put("/:id", (req, res) => {
    console.log('updateRecipe will be called');

    recipeData.updateRecipe(req.params.id,req.body).
    then(recipe =>{
        res.json(recipe);
    },(err) => {
          res.status(501).json({error:"Something went wrong with the server! when updateRecipe: "+err});
      });  
});


router.delete("/:id", (req, res) => {

    recipeData.removeRecipe(req.params.id).
    then(info =>{
        res.json(info);
    },() => {
          res.status(501).json({error:"Something went wrong with the server when removeRecipe!"});
      });  
});



module.exports = router;