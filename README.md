# Todo-App
A Todo app is a simple and intuitive application designed to help users organize and manage their tasks and to-do lists effectively. It provides a user-friendly interface that allows users to create, update, and track their tasks easily.

# For Backend
# Prerequisites
Before running the application, make sure you have the following installed:

* Node.js
MongoDB
Getting Started
Clone the repository:

      git clone https://github.com/manoj7654/Todo-App.git

# Install the dependencies:

     cd backend
     npm install

      "dependencies": {
    "bcrypt": "^5.1.0",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "elasticsearch": "^16.7.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.3.1",
    "nodemon": "^2.0.22",
    "redis": "^4.6.7"
  }

# Set up environment variables:
 * Create a .env file in the root directory of the project and add the following variables:


        port=4500 // for running server
        mongoUrl=mongodb+srv://manoj:manoj@cluster0.gf9pf1i.mongodb.net/React_Todo // for connecting to mongodb database

        key=process.env.secret_key  // for generating jwt token
       

# Start the server:

     npm run server
The server will start running on the specified port.

# API Endpoints
 1.Basic 
 
 * method : GET
 * Endpoint : /
  * Response : Returns a basic message indicating that the API is running.

2. User Endpoints 

   `Register`
    * method : POST
    * Endpoint : users/registe
    * Request body:

        {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "password": "password123"
            }
    * Response : If user is not register before then it will register successfully other wise throw an error user already exist.

    `Login`
    
   Logs in an existing user.
   * method : POST
   * Endpoint : /users/login
   * Request body :
     
            {
         "email": "john.doe@example.com",
          "password": "password123"
         }

3. Todo Endpoints

   `Add Todo`
    
    * method : POST
    * Endpoint : todos/add
     * Authorization : User need to login first then they can add todo.
    * Request body : 
      
            {
                "title": "Task Title",
                "description": "Task Description",
                "status": true,
                "userId": "user-id"
                }
    * Response : Todo added in database
 
   `Get all Todo`
      
    * method : GET
    * Endpoint : todos/allTodo
    * Response : It returns all the todo from database
    
    `Get Todo by Search`

    * const {query}=req.query
    * method : GET
    * Endpoint : todos/search?query=search query
    * Response : It returns todos based on the given query

   ` Delete Todo by Id`
    
     * method : DELETE
     * Endpoint : todos/remove/:id
      * Authorization : Users need to login then they can delete todo.
     * Response : Todo has been deleted of specified id from database.

   `Update Todo by Id`

    * method : PATCH
    * Endpoint : todos/edit/:id
     * Authorization : User need to login first then they can update todo.
    * Request body : payload
    * Response : Todo has been updated for specified id from database.




# Middleware

 ## authenticate

Middleware function to authenticate requests. It checks for a valid JWT token in the Authorization header.

## Database Connection
The application uses MongoDB as the database. The connection to the database is established in the config/db.js file. Make sure to provide the correct MongoDB connection URL in the .env file.

# Additional Notes

* The application uses the bcrypt library for password hashing and the jsonwebtoken library for JWT token generation.

* CORS is enabled in the application to allow cross-origin requests.
* The API follows RESTful principles and returns JSON responses.
* Error handling is implemented for various scenarios, including validation errors and server errors.


# For Front End

## Create React app using command

       npx creat-reac-app Todo-App

## Go to app
  
     cd todo

## Start application 

    npm start

## Dependecies

        "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },


## Structure
The project is organized into the following folders:

* src/pages: Contains the main pages of the application.

* src/components: Contains reusable components used in the pages.

* src/App.js: The entry point of the application.

* src/index.js: Renders the root component and mounts it to the DOM.
 


## Components
The following reusable components are available in the src/components folder:

* Header: Displays the application header.

* TodoForm: Renders a form for adding and updating todos.
* TodoList: Renders the list of todos.

* TodoItem: Displays an individual todo item.

* LoadingIndicator: Shows a loading spinner while fetching data from the API.

* ErrorIndicator: Displays an error message if there is a problem with API requests.
## Pages
The main pages of the application are located in the src/pages folder:

* HomePage: Displays the list of todos.

* AddTodoPage: Provides a form for adding a new todo.
* EditTodoPage: Allows editing status an existing todo.


## API Integration
The application communicates with a RESTful API to perform CRUD operations on todos. The API endpoints used are as follows:

* GET /todos: Retrieves all todos.
* POST /todos: Adds a new todo.
* PUT /todos/:id: Updates an existing todo.
* DELETE /todos/:id: Deletes a todo.
The API integration is handled in the respective page components.

## Loading and Error Indicators
The application includes loading and error indicators to provide feedback to the user during API requests:

`Loading`
* The LoadingIndicator component shows a loading spinner while fetching data from the API. It is displayed when data is being loaded from the server.

`Error`
* The ErrorIndicator component displays an error message if there is a problem with API requests. It is shown when an error occurs during API communication.
Additional Notes

`Style`
* Styling is done using CSS and inline styles in the components.
The application is responsive and works well on different screen sizes.

Home page
![Screenshot (530)](https://github.com/manoj7654/Todo-App/assets/107467981/3212260c-4eec-4354-b1b6-541b36b76a92)

Add Todo
![Screenshot (531)](https://github.com/manoj7654/Todo-App/assets/107467981/19c643bc-8536-490a-9d91-d596d49a9a08)

Todo List 
![Screenshot (532)](https://github.com/manoj7654/Todo-App/assets/107467981/fa0be36c-2430-41f2-89e6-a930660e54e1)

Resgister
![Screenshot (533)](https://github.com/manoj7654/Todo-App/assets/107467981/869f9ef8-a1e2-4e65-800b-e58562019caf)

Login
![Screenshot (534)](https://github.com/manoj7654/Todo-App/assets/107467981/eb6a0267-2928-468f-8f14-bc2ad2cfc801)


# Deployment Link
 * Backend: It deploye on cyslic.sh

      [BackEnd deployment](https://inquisitive-sundress-foal.cyclic.app/)
   

* Frontend : It deployed on vercel

    [FrontEnd deployment](https://todo-delta-ivory.vercel.app/)

