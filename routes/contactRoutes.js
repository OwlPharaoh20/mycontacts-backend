// Import the Express.js framework
const express = require("express");

// Create a new router instance
const router = express.Router();

// Define a route for the root URL ("/")
// This route will handle HTTP GET requests
router.route("/").get((req, res) => {
  // Send a response with a 200 status code (OK) and a JSON message
  // This message will be returned to the client when they make a GET request to this route
  res.status(200).json({ message: "Get all contacts" });
});

// Define a route for the root URL ("/")
// This route will handle HTTP POST requests
router.route("/").post((req, res) => {
  // Send a response with a 200 status code (OK) and a JSON message
  // This message will be returned to the client when they make a POST request to this route
  res.status(200).json({ message: "Create Contact" });
});

// Define a route for a URL with an ID parameter (e.g. "/123")
// This route will handle HTTP PUT requests
router.route("/:id").put((req, res) => {
  // The ":id" part of the route is a parameter that will be passed to the request handler
  // We can access this parameter using req.params.id
  // Send a response with a 200 status code (OK) and a JSON message that includes the ID
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

// Define a route for a URL with an ID parameter (e.g. "/123")
// This route will handle HTTP DELETE requests
router.route("/:id").delete((req, res) => {
  // The ":id" part of the route is a parameter that will be passed to the request handler
  // We can access this parameter using req.params.id
  // Send a response with a 200 status code (OK) and a JSON message that includes the ID
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

// Export the router instance so it can be used in other parts of the application
module.exports = router;