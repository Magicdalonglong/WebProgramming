const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

let exportedMethods = {
    
    getAllRecipes() {
        return recipes().then((recipeCollection) => {
            return recipeCollection.find({},{_id:1,title:1}).toArray();
        })
    },
    getRecipeById(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({ _id: id }).then((recipe) => {
                if (!recipe) return Promoise.reject("recipe not found");
                return recipe;
            });
        });
    },

    
    addRecipe(body) {

        console.log('addRecipe called, body is :');
        // console.log(body);
        if(!body)return Promoise.reject("No request body found");
        return recipes().then((recipeCollection) => {
            let newrecipe = {
                _id: uuid.v4(),
                title: body.title,
                ingredients: body.ingredients,
                steps: body.steps,
                comments: []
            };
            if(body.comments){
                body.comments.forEach( function(element, index) {
                    let thiscomment = {
                        _id: uuid.v4(),
                        poster:element.poster,
                        comment:element.comment
                    }
                    newrecipe.comments.push(thiscomment)
                });
            }

            return recipeCollection.insertOne(newrecipe).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((id) => {
                return this.getRecipeById(id);
            });
        });
    },
    

    updateRecipe(id,body) {
        if(!body||!id)return Promise.reject("No request body/id provide");

        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({_id:id}).then(recipe =>{
                let newrecipe = recipe;

                if(body.title)
                    newrecipe['title']=body.title;
                if(body.ingredients)
                    newrecipe['ingredients']=body.ingredients; 
                if(body.steps)
                    newrecipe['steps']=body.steps;
                if(body.comments)
                    newrecipe['comments']=body.comments;

                return recipeCollection.updateOne({ _id: id }, newrecipe).then((result) => {
                    return this.getRecipeById(id);
                });

            }).catch(err =>{
                return Promise.reject(err);
            });

        });     
    },


    removeRecipe(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    return Promise.reject(`Could not delete recipe with id of ${id}`)
                } else { 
                    return Promise.resolve("Remove successfully");
                }
            });
        });
    },


    getcommentByRecipeId(recipeId) {

        //{_id: COMMENT_ID, recipeId: RECIPE_ID, reciipeTitle: RECIPE_TITLE, name: COMMENT_NAME, poster: COMMENT_POSTER}

        return this.getRecipeById(recipeId).then(recipe => {

            let commentlist = recipe.comments;
            let list = [];
            commentlist.forEach( function(ele, index) {
                let obj  = {
                    _id: ele._id,
                    recipeId: recipeId,
                    reciipeTitle: recipe.title,
                    name :ele.comment,
                    poster : ele.poster
                }
                list.push(obj);
            });
            return list;
                
        })
        .catch(err =>{
                return Promise.reject(err);
        });

    },


    getcommentById(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({'comments._id':{$eq:id}}).then((recipe) => {
                if(!recipe) return Promise.reject("No comment found")

                
                let commentlist = recipe.comments;
                let obj;
                let found = false;
                commentlist.forEach( function(ele, index) {
                    if(ele._id == id){
                        found = true;
                        obj  = {
                            _id: ele._id,
                            recipeId: recipe._id,
                            reciipeTitle: recipe.title,
                            name :ele.comment,
                            poster : ele.poster
                        }
                        
                    }
                    
                });
                if(found)
                    return obj;
                else 
                    return Promise.reject("No comment found");

            })
            .catch(err =>{
                console.log(err);
                return Promoise.reject(err);
            });
        });
    },

    addcomment(id,body) {
        if(!body) return Promoise.reject("No body provide");
        if(!id) return Promoise.reject("No Id provide");

    
        return recipes().then((recipeCollection) => {  
            let newcoment = {};
            if(!body.comment)
                return Promoise.reject("Not comment content provide");
            if(!body.poster)
                return Promoise.reject("Not comment poster provide");
            newcoment['_id']= uuid.v4();
            newcoment['comment']= body.comment;
            newcoment['poster']= body.poster;   

            return recipeCollection.update({ _id: id }, { $push: { "comments": newcoment } })
            .then(()=>{
                return newcoment;

            }).
            catch(err =>{
                return Promise.reject(err);
            });
        });
        
    },
    removecomments(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({ "comments._id":id}).then((recipe) => {
                               
                return recipeCollection.update({ _id: recipe._id }, { $pull: { "comments": { _id: id } } })
                .then(recipe => {
                    return recipe;
                });

            })
            .catch(err =>{
                return Promoise.reject(err);
            });
        });
    },
    updatecomments(id, recipeId, body) {
        console.log('updatecomments called , parms is ');
        console.log('id is '+id);
        console.log('recipeId is '+recipeId);
        console.log('body is :');
        console.log(body);

        if (id === undefined) return Promise.reject("No comment id provided");
        if (!recipeId) return Promise.reject("No recipeId provided");



        return recipes().then((recipeCollection) => {
            return this.getcommentById(id).then(foundcomment =>{
                console.log('comment fonud:');
                console.log(foundcomment);

                let newcomment = {
                    _id: foundcomment._id,
                    comment: foundcomment.name,
                    poster: foundcomment.poster,
                }

                console.log('body: ')
                console.log(body);

                if(typeof body.comment === "string"){
                    console.log('body has comment')
                    newcomment.comment=body.comment;
                }
                if(typeof body.poster === "string"){
                    console.log('body has poster')

                    newcomment.poster=body.poster;
                }

                console.log('newcomment ready:');
                console.log(newcomment);

                return recipeCollection.update({ _id: recipeId }, { $pull: { "comments": { _id: id } } })
                .then(recipe => {
                    return recipeCollection.update({ _id: recipeId }, { $push: { "comments": newcomment } })
                    .then(recipe => {
                        return newcomment;
                    });
                });

            });

                               
                

        })
        .catch(err =>{
            return Promoise.reject(err);
        });
        
    }


}

module.exports = exportedMethods;