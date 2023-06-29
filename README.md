# Todo-App
A Todo app is a simple and intuitive application designed to help users organize and manage their tasks and to-do lists effectively. It provides a user-friendly interface that allows users to create, update, and track their tasks easily.

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


# Deployment Link
 * Backend: It deploye on cyslic.sh

      [BackEnd deployment](https://inquisitive-sundress-foal.cyclic.app/)
   

* Frontend : It deployed on vercel

    [FrontEnd deployment](https://todo-delta-ivory.vercel.app/)

