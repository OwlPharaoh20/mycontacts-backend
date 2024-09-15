// Import the Express.js framework
const express = require("express");

// Create a new router instance
const router = express.Router();

//import contact controllers
const {getContacts,  
    createContact , 
    getContact,
     updateContact, 
     deleteContact 
    } = require("../controllers/contactController");

// Define a route for the root URL ("/")
// This route will handle HTTP GET requests
router.route("/").get(getContacts);

// Define a route for the root URL ("/")
// This route will handle HTTP POST requests
router.route("/").post(createContact);

// Define a route for a URL with an ID parameter (e.g. "/123")
// This route will handle HTTP GET requests
router.route("/:id").get(getContact);



// Define a route for a URL with an ID parameter (e.g. "/123")
// This route will handle HTTP PUT requests
router.route("/:id").put(updateContact);


// Define a route for a URL with an ID parameter (e.g. "/123")
// This route will handle HTTP DELETE requests
router.route("/:id").delete(deleteContact);




// Export the router instance so it can be used in other parts of the application
module.exports = router;