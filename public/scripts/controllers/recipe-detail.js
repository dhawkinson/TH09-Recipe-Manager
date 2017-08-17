(function() {
    'use strict';
    
    angular.module('app')
        .controller('RecipeDetailController', function($scope, $routeParams, $location, dataService) {
            
            const newRecipe = {
                "name": "",
                "desciption": "",
                "category": "",
                "prepTime": "",
                "cookTime": "",
                "ingredients": [],
                "steps": []
            };
            
            //  editing is true when there is a match to an existing item
            $scope.editing = $location.url() === `/edit/${$routeParams.id}` ? true : false;
            
            //  make the recipe category = the selected category
            $scope.recipeDetail.cataegory = $scope.categories[0];
    
            $scope.cancelRecipeEdit = () => {
                $location.path('/');
            };
    
            $scope.addRecipe = recipeData => {
                dataService.addRecipe(recipeData);
                $location.path('/');
            };
    
            $scope.updateRecipe = (id, recipeData) => {
                dataService.updateRecipe(id, recipeData);
                $location.path('/');
            };
    
            $scope.addIngredient = recipe => {
                recipe.ingredients.push({
                    "foodItem": "",
                    "condition": "",
                    "amount": ""
                });
            };
    
            $scope.removeIngredient = (recipe, index) => {
                recipe.ingredients.splice(index, 1);
            };
    
            $scope.addStep = recipe => {
                recipe.steps.push({ "description": "" });
            };
    
            $scope.removeStep = (recipe, index) => {
                recipe.steps.splice(index, 1);
            };
    
            dataService.getRecipes(response => {
                const recipes = response.data;
                $scope.recipeDetail = recipes.filter(recipe => {
                        return recipe._id === $routeParams.id;
                    })[0] || newRecipe;
            });
    
            dataService.getAllFoodItems(response => {
                $scope.foodItems = response.data;
            });
    
            dataService.getAllCategories(response => {
                $scope.categories = response.data;
            });
    
        });
    
}());
