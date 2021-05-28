-- NODE/EXPRESS Setup

1. Create folder /backend
2. npm init -y (installs basic node_modules, add package.json)
3. npm i express dotenv nodemon cors mongoose
4. create app.js file inside /backend folder
5. create .gitignore & .env files inside /backend folder
6. add /node_modules to .gitignore files
7. add your port inside .env file
8. inside /app.js create basic express app server to
   listen on port 3000 for connections, and respond with "hello world"
9. add /routes folder , inside create testAPI.js file add simple
   router to test server enpoint, export then import on app.js
10. create script for nodemon in package.json to "watch" for changes
11. start nodemon script, go to localhost:{PORT #}/ , page should
    display "Hello World", go to localhost:{PORT #}/test, page should display "API is working properly"
