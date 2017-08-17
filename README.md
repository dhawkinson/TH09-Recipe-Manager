# fsjsProject09

## Single Page App

##Project Instructions

###To complete this project, follow the instructions below. If you get stuck, ask a question in the community.

 ###8 steps
 ### 1 [x] Set up your angular application:
<ul>
<li> [x] Create an AngularJS module, save it into a variable called app, and add ngRoute as a dependency. * Important Note: It's important to use app for the name of your app, otherwise the provided Angular routes won't function properly.

<li> [x] Update the index.html file with the ng-app directive.
<li> [x] As you add JavaScript files to your project, remember to add the necessary script tags to the index.html page.
<ul>
<li> [x] app.js
<li> [x] route-config.js
<li> [x] data.js
<li> [x] recipes.js
<li> [x] recipe-detail.js
</ul>

### 2 [x] Create a service called dataService. This service will make calls to the REST API we have provided for you. Remember that you’ll need to use the built-in $http service as a dependency for your dataService.
<ul>
    <li> [x] The base URL for the REST API is http://localhost:5000/.
    <li> [x] To your service, add methods to call the following API endpoints:
    <ul>
        <li> [x] GET /api/recipes - Gets all of the recipes.
        <li> [x] GET /api/categories - Gets all of the categories.
        <li> [x] GET /api/fooditems - Gets all of the food items.
        <li> [x] GET /api/recipes?category={category} - Gets all of the recipes for the specified category.
        <li> [x] GET /api/recipes/{id} - Gets the recipe for the specified ID.
        <li> [x] PUT /api/recipes/{id} - Updates the recipe for the specified ID.
        <li> [x] POST /api/recipes - Adds a recipe.
        <li> [x] DELETE /api/recipes/{id} - Deletes the recipe for the specified ID.
    </ul>
</ul>

### 3 [x] Set up routes for the "Recipes" and "Recipe Detail" screens:
<ul>
    <li> [x] Uncomment the commented-out code in the route-config.js file in the scripts folder
    <li> [x] The / route will display the "Recipes" screen.
    <li> [x] The /edit/{id} route will display the "Recipe Detail" screen for the specified recipe ID.
    <li> [x] The /add route will display the "Recipe Detail" screen (with no data).
    <li> [x] To create links to the "Recipes" and "Recipe Detail" screens, you can add HTML anchor elements with href
     attribute values of /#/ and /#/edit/{id} (or /#/add if you want to add a recipe). Be sure to replace {id} with an actual recipe ID from your a record in your database.
    <li> [x] From your controllers, you can browse to the "Recipes" and "Recipe Detail" screens using the built-in AngularJS $location service's path method. For instance, after a user has saved a recipe using the “Recipe Detail” screen, you can send the user back to the “Recipes” screen with: $location.path('/').
</ul>

### 4 [x] Create a RecipesController AngularJS Controller that provides the business logic for the recipes.html template. Important Note: The name of the controller needs to match in order for the provided Angular routes to function properly. Update the RecipesController controller to satisfy the following requirements:
<ul>
    <li> [x] The list of recipes can be filtered by the selected category
    <li> [x] When a recipe “Edit” button is clicked, the user is taken to the “Recipe Detail” screen, where they can view and edit the details of the recipe.
    <li> [x] Clicking the recipe “Delete” button deleted that recipes.
    <li> [x] Clicking the recipe “Add” button adds a new recipe
</ul>

### 5 [x] Add built-in ng directives to recipes.html.
<ul>
    <li> [x] Add directives to the "Categories" select list element to:
    <ul>
        <li> [x] Populate the list with the categories from the database.
        <li> [x] Refresh the recipe list when the user has selected a new category
    </ul>
    <li> [x] Add a directive to the "Add Recipe" button to handle user clicks.
    <li> [x] Add a directive to the "No recipes found!" outermost 'div' element so that the message only displays when there are no recipes to display.
    <li> [x] Add directives to the 'div' element that represents each recipe row to:
    <ul>
        <li> [x] Repeat the 'div' element (and it's content) for each recipe to display.
        <li> [x] Hide the 'div' element when there are no recipes to display.
    </ul>
    <li> [x] Within the recipe row 'div' element, make the following updates:
    <ul>
        <li> [x] Add a directive to the first <a> element in order to allow users to click on a recipe row in order to display the details for that recipe using the "Recipe Detail" screen.
        <li> [x] Add binding expressions to display the recipe information.
        <li> [x] Add directives to the "Edit" and "Delete" links to handle user clicks.
    </ul>
</ul>

### 6 [x] Create a RecipeDetailController AngularJS Controller that provides the business logic for the recipe-detail.html template. Important Note: The name of the controller needs to match in order for the provided Angular routes to function properly. Update the RecipeDetailController controller to add the following features:
<ul>
    <li> [x] Add or update a recipe. Allow the user to provide the following values:
    <ul>
        <li> [x] Name (text box)
        <li> [x] Description (multi-line text box)
        <li> [x] Category (select list)
        <li> [x] Prep Time (text box)
        <li> [x] Cook Time (text box)
    </ul>
    <li> [x] Add one or more ingredients and steps to a recipe. The user should be able to provide the following values:
    <ul>
        <li> [x] Item (select list)
        <li> [x] Condition (text box)
        <li> [x] Quantity (text box)
    </ul>
    <li> [x] Add a step to a recipe. The user should be able to provide the following values:
    <ul>
        <li> [x] Description (text box)
    </ul>
</ul>

### 7 [x] Add built-in Angular ng directives to recipe-detail.html:
<ul>
    <li> [x] Replace the static text "Add/Edit Recipe" with a binding expression that displays the recipe name when editing a recipe.
    <li> [x] When adding a recipe, display the static text 'Add New Recipe'.
    <li> [x] Add directives to both the "Save Recipe" and "Cancel" buttons in order to handle user clicks.
    <li> [x] Add a directive to the following properties to bind their value or contents to the corresponding properties on the recipe model:
    <ul>
        <li> [x] Name, Prep Time and Cook Time <input> elements
        <li> [x] Description (textarea)
        <li> [x] Category (select element)
        <li> [x] Prep Time (input)
        <li> [x] Cook Time (input)
    </ul>
    <li> [x] Add a directive to the "Ingredient" 'div' element so that it repeats for each recipe ingredient to display.
    <li> [x] Add directives to the "Item" <select> element to bind its value to the recipe ingredient model's foodItem property and to populate the list with the food items from the database.
    <li> [x] Add a directive to the "Condition" <input> element to bind its value to the recipe ingredient model's 
    condition property.
    <li> [x] Add a directive to the "Amount" <input> element to bind its value to the recipe ingredient model's 
    amount property.
    <li> [x] Add a directive to the "Delete" <a> element so that you can delete the recipe ingredient when the user clicks on the link.
    <li> [x] Add a directive to the "Add Another Ingredient" <button> element in order to handle when the user clicks to add a new recipe ingredient.
    <li> [x] Add a directive to the "Step" 'div' element so that it repeats for each recipe step to display.
    <li> [x] Add a directive to the "Description" <input> element to bind its value to the recipe step model's description property.
    <li> [x] Add a directive to the "Delete" <a> element so that you can delete the recipe step when the user clicks 
    on the link.
    <li> [x] Add a directive to the "Add Another Step" <button> element in order to handle when the user clicks to add a new recipe step.
</ul>

### 8 [x] Wrap all of your JavaScript application, controller, and services code in immediately invoked functions in order to prevent from polluting the global namespace.

##Extra Credit

To get an "exceeds" rating, you can expand on the project in the following ways:

###1 step
 
#### [ ] Write code that asks the user to confirm a recipe deletion before it is deleted.

