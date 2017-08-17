###Download the project files. We've supplied the following files for you to use:
<ul>
<li>The public folder is where you’ll be building your AngularJS application. We’ve provided some files to get you 
started.
<li>The images folder contains a handful of images that are used in the application’s design.
<li>The scripts folder is where you’ll put all of your JavaScript files. We’ve included a route-config.js file that contains the code to configure the routes for your AngularJS application.
<li>The styles folder contains the application’s CSS files.
<li>The templates folder contains two HTML files that you’ll use as AngularJS templates. The recipe-detail.html and recipes.html files are the templates for the “Recipe Detail” and “Recipes” screens. You’ll be adding ng directive attributes to these templates as you add functionality to the application.
<li>The index.html file is the one and only HTML page in the application (this is a single page application after all!)
<li>The src folder contains the code files for the provided Node.js REST API. You won’t be making any changes to any of the files in this folder, but you’re welcome to (optionally) explore the code to see how the API functions.
<li>We’ve included a .gitignore file to ensure that the node_modules folder and the application’s database files don’t get pushed to your GitHub repo.
<li>The nodemon.json file configures the nodemon Node.js module, which we are using to run the provided REST API.
<li>The package.json file is the project’s npm configuration, which includes the project’s dependencies.
<li>The RecipeAPI.json.postman_collection file is a collection of Postman requests that you can use to test and explore 
the provided REST API.
</ul>

###When developing your AngularJS application, you’ll need to run the provided Node.js application locally on your PC. This application has two important responsibilities. First, it serves the files in the public folder as the root of your application. Second, it provides the REST API that your application will use.
<ul>
<li> [x] Open a Command Prompt (on Windows) or Terminal (on Mac OS X and Linux) instance and browse to the root project 
folder.
<li> [x] Run the command npm install to install the required dependencies.
<li> [x] Run the command npm run-script db to build the database.
<li> [x] Run the command npm start to run the Node.js application.
<li> [x] To test your application, open your web browser and browse to http://localhost:5000/. You should see your application’s “Home” or “Default” page, which is the index.html file located in the public folder.
<li> [x] To test the REST API, open your web browser and browse to http://localhost:5000/api/recipes. You should see a list of recipes displayed in JSON format.
<li>You can press Ctrl-C to stop the Node.js application.
<li>Important Note: When testing your AngularJS application, you must start the Node.js application and browse to your application using the URL http://localhost:5000/. Do not open the index.html file from the file system as this will produce errors and unexpected results.
</ul>

####The required AngularJS JavaScript files have already been included as part of this project via the npm angular and angular-route packages. Additionally, the provided index.html HTML page already includes the necessary 'script' tags to load the angular.js and angular-route.js files.

####To learn more about Angular routing with ng-route, look at the example in the Project Resources section.

