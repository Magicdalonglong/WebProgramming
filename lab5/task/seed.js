const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const recipes = data.recipes;
const uuid = require('node-uuid');

let recipe1 = {
    _id: uuid.v4(),
    title : "PARMESAN CRUSTED CHICKEN",
    ingredients :[
    {
        name: "Mayonnaise",
        amount: "1/4 cup"
    },
    {
        name: "chicken breast",
        amount :4 
    }
    ],
    steps: [
    "Preheat oven to 425°.",
    "Combine Hellmann's® or Best Foods® Real Mayonnaise with cheese in medium bowl. Arrange chicken on baking sheet. Evenly top with Mayonnaise mixture, then sprinkle with bread crumbs.",
    "Bake until chicken is thoroughly cooked, about 20 minutes."
    ],
    comments:[
    {
      _id: uuid.v4(),
      poster: "Gordan Ramsay",
      comment: "These chicken are delicious!" 
    },
    {
      _id: uuid.v4(),
      poster: "Daughter",
      comment: "I love chicken, I love daddy!" 
    }

    ]

};

let recipe2 = {
    _id: uuid.v4(),
    title : "Steak",
    ingredients :[
    {
        name: "Steak",
        amount: "4 Lbs"
    },
    {
        name: "pepper",
        amount :4 
    }
    ], 
    steps:[
    "heat",
    "add pepper"
    ],
    comments : [
    {
        _id: uuid.v4(),
        poster: "Leigh",
        comment :"the steak is good"
    }
    ]

};

dbConnection().then(db => {
    return db.dropDatabase().then(() => {
        return dbConnection;
    }).then(() =>{

        return recipes.addRecipe(recipe1)
            .then(() => {
                return recipes.addRecipe(recipe2);
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