(function() {
    'use strict';
    angular.module('app')
        //  dataService provides all the CRUD functionality for recipes
        .service('dataService', function($http) {
    
            //  Gets all of the categories
            this.getCategories = callback => {
                $http.get('/api/categories').then(callback);
            };
            
            //  Gets all of the recipes
            this.getRecipes = callback => {
                $http.get('/api/recipes').then(callback);
            };
    
            //  Gets all of the food items
            this.getFoodItems = callback => {
                $http.get('/api/fooditems').then(callback);
            };
    
            //  Gets all of the recipes for the specified category
            this.getRecipesCategory = callback => {
                $http.get('/api/recipes?category={category}').then(callback);
            };
    
            //  Gets the recipe for the specified ID
            this.getRecipeId = callback => {
                $http.get('/api/recipes/{id}').then(callback);
            };
    
            //  Updates the recipe for the specified ID -- notice this is a PUT
            this.updateRecipe = (id, recipeData) => {
                $http.put(`/api/recipes/${id}`, recipeData);
            };
    
            //  Adds a recipe -- notice this is a POST
            this.addRecipe = recipeData => {
                $http.post('/api/recipes', recipeData);
            };
    
            //  Delete the recipe for the specified ID
            this.deleteRecipe = (id, callback) => {
                $http.delete(`/api/recipes/${id}`).then(callback);
            };
        });
}());