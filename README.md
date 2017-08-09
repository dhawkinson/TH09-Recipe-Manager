#fsjsProject09
## Single Page App

##Project Instructions

###To complete this project, follow the instructions below. If you get stuck, ask a question in the community.

 ###8 steps
 ### 1 [ ] Set up your angular application:
<ul>
    <li> [ ] Create an AngularJS module, save it into a variable called app, and add ngRoute as a dependency. * Important Note: It's important to use app for the name of your app, otherwise the provided Angular routes won't function properly.
    
    <li> [ ] Update the index.html file with the ng-app directive.
    <li> [ ] As you add JavaScript files to your project, remember to add the necessary script tags to the index.html page.
</ul>

### 2 [ ] Create a service called dataService. This service will make calls to the REST API we have provided for you. Remember that you’ll need to use the built-in $http service as a dependency for your dataService.
<ul>
    <li> [ ] The base URL for the REST API is http://localhost:5000/.
    <li> [ ] To your service, add methods to call the following API endpoints:
    <ul>
        <li> [ ] GET /api/recipes - Gets all of the recipes.
        <li> [ ] GET /api/categories - Gets all of the categories.
        <li> [ ] GET /api/fooditems - Gets all of the food items.
        <li> [ ] GET /api/recipes?category={category} - Gets all of the recipes for the specified category.
        <li> [ ] GET /api/recipes/{id} - Gets the recipe for the specified ID.
        <li> [ ] PUT /api/recipes/{id} - Updates the recipe for the specified ID.
        <li> [ ] POST /api/recipes - Adds a recipe.
        <li> [ ] DELETE /api/recipes/{id} - Deletes the recipe for the specified ID.
    </ul>
</ul>

### 3 [ ] Set up routes for the "Recipes" and "Recipe Detail" screens:
<ul>
    <li> [ ] Uncomment the commented-out code in the route-config.js file in the scripts folder
    <li> [ ] The / route will display the "Recipes" screen.
    <li> [ ] The /edit/{id} route will display the "Recipe Detail" screen for the specified recipe ID.
    <li> [ ] The /add route will display the "Recipe Detail" screen (with no data).
    <li> [ ] To create links to the "Recipes" and "Recipe Detail" screens, you can add HTML anchor elements with href attribute values of /#/ and /#/edit/{id} (or /#/add if you want to add a recipe). Be sure to replace {id} with an actual recipe ID from your a record in your database.
    <li> [ ] From your controllers, you can browse to the "Recipes" and "Recipe Detail" screens using the built-in AngularJS $location service's path method. For instance, after a user has saved a recipe using the “Recipe Detail” screen, you can send the user back to the “Recipes” screen with: $location.path('/').
</ul>

### 4 [ ] Create a RecipesController AngularJS Controller that provides the business logic for the recipes.html template. Important Note: The name of the controller needs to match in order for the provided Angular routes to function properly. Update the RecipesController controller to satisfy the following requirements:
<ul>
    <li> [ ] The list of recipes can be filtered by the selected category
    <li> [ ] When a recipe “Edit” button is clicked, the user is taken to the “Recipe Detail” screen, where they can view and edit the details of the recipe.
    <li> [ ] Clicking the recipe “Delete” button deleted that recipes.
    <li> [ ] Clicking the recipe “Add” button adds a new recipe
</ul>

### 5 [ ] Add built-in ng directives to recipes.html.
<ul>
    <li> [ ] Add directives to the "Categories" select list element to:
    <ul>
        <li> [ ] Populate the list with the categories from the database.
        <li> [ ] Refresh the recipe list when the user has selected a new category
    </ul>
    <li> [ ] Add a directive to the "Add Recipe" button to handle user clicks.
    <li> [ ] Add a directive to the "No recipes found!" outermost 'div' element so that the message only displays when there are no recipes to display.
    <li> [ ] Add directives to the 'div' element that represents each recipe row to:
    <ul>
        <li> [ ] Repeat the 'div' element (and it's content) for each recipe to display.
        <li> [ ] Hide the 'div' element when there are no recipes to display.
    </ul>
    <li> [ ] Within the recipe row 'div' element, make the following updates:
    <ul>
        <li> [ ] Add a directive to the first <a> element in order to allow users to click on a recipe row in order to display the details for that recipe using the "Recipe Detail" screen.
        <li> [ ] Add binding expressions to display the recipe information.
        <li> [ ] Add directives to the "Edit" and "Delete" links to handle user clicks.
    </ul>
</ul>

### 6 [ ] Create a RecipeDetailController AngularJS Controller that provides the business logic for the recipe-detail.html template. Important Note: The name of the controller needs to match in order for the provided Angular routes to function properly. Update the RecipeDetailController controller to add the following features:
<ul>
    <li> [ ] Add or update a recipe. Allow the user to provide the following values:
    <ul>
        <li> [ ] Name (text box)
        <li> [ ] Description (multi-line text box)
        <li> [ ] Category (select list)
        <li> [ ] Prep Time (text box)
        <li> [ ] Cook Time (text box)
    </ul>
    <li> [ ] Add one or more ingredients and steps to a recipe. The user should be able to provide the following values:
    <ul>
        <li> [ ] Item (select list)
        <li> [ ] Condition (text box)
        <li> [ ] Quantity (text box)
    </ul>
    <li> [ ] Add a step to a recipe. The user should be able to provide the following values:
    <ul>
        <li> [ ] Description (text box)
    </ul>
</ul>

### 7 [ ] Add built-in Angular ng directives to recipe-detail.html:
<ul>
    <li> [ ] Replace the static text "Add/Edit Recipe" with a binding expression that displays the recipe name when editing a recipe.
    <li> [ ] When adding a recipe, display the static text 'Add New Recipe'.
    <li> [ ] Add directives to both the "Save Recipe" and "Cancel" buttons in order to handle user clicks.
    <li> [ ] Add a directive to the following properties to bind their value or contents to the corresponding properties on the recipe model:
    <ul>
        <li> [ ] Name, Prep Time and Cook Time <input> elements
        <li> [ ] Description (textarea)
        <li> [ ] Category (select element)
        <li> [ ] Prep Time (input)
        <li> [ ] Cook Time (input)
    </ul>
    <li> [ ] Add a directive to the "Ingredient" 'div' element so that it repeats for each recipe ingredient to display.
    <li> [ ] Add directives to the "Item" <select> element to bind its value to the recipe ingredient model's foodItem property and to populate the list with the food items from the database.
    <li> [ ] Add a directive to the "Condition" <input> element to bind its value to the recipe ingredient model's condition property.
    <li> [ ] Add a directive to the "Amount" <input> element to bind its value to the recipe ingredient model's amount property.
    <li> [ ] Add a directive to the "Delete" <a> element so that you can delete the recipe ingredient when the user clicks on the link.
    <li> [ ] Add a directive to the "Add Another Ingredient" <button> element in order to handle when the user clicks to add a new recipe ingredient.
    <li> [ ] Add a directive to the "Step" 'div' element so that it repeats for each recipe step to display.
    <li> [ ] Add a directive to the "Description" <input> element to bind its value to the recipe step model's description property.
    <li> [ ] Add a directive to the "Delete" <a> element so that you can delete the recipe step when the user clicks on the link.
    <li> [ ] Add a directive to the "Add Another Step" <button> element in order to handle when the user clicks to add a new recipe step.
</ul>

### 8 [ ] Wrap all of your JavaScript application, controller, and services code in immediately invoked functions in order to prevent from polluting the global namespace.

##Extra Credit

To get an "exceeds" rating, you can expand on the project in the following ways:

###1 step
 
#### [ ] Write code that asks the user to confirm a recipe deletion before it is deleted.
# fsjsProject09
