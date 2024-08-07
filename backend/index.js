// Initiate the server and connect to the database
require("./database/connection/Connection.js");

// Regular imports
const PORT = 5000; // Our frontend will run on port 3000
const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const routesPath = path.join(__dirname, "routes");


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Dynamically import all routes (in case we want to add more routes other than "/articles" in the future)
fs.readdirSync(routesPath).forEach((file) => {
    try {
        const route = require(path.join(routesPath, file));
        const routeToServe = `/${file.split(".")[0]}`; // Get the route name from the file name
        app.use(routeToServe, route);
        console.log('\x1b[33m%s\x1b[0m', `📌 | [ File ${file} imported and initialized successfully ;) ] | http://localhost:${PORT}${routeToServe}`);
    } catch(err) {
        console.log(err);
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});