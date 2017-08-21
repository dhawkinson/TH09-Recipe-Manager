(function() {
    'use strict';
    
    angular.module('app')
        .controller('RecipesController', function($scope, $location, dataService) {
            //  get all categories
            dataService.getCategories(res => {
                $scope.categories = res.data;
            });
            //  get all recipes for the category
            dataService.getRecipes(res => {       
                $scope.recipes = res.data;
            });
            //  delete a recipe
            $scope.deleteRecipe = (recipe, index) => {
                if (confirm(`Are you sure you want to delete recipe: ${recipe.name}?`)) {
                    dataService.deleteRecipe(recipe._id, res => {
                        $scope.recipes.splice(index, 1);
                    });
                }
            };
            //  add a recipe
            $scope.addRecipe = () => {
                $location.path('/add');
            };
        });
}());
