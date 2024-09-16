// Import the mongoose library, which is a popular MongoDB ORM (Object Relational Mapping) tool
const mongoose = require("mongoose");

// Define a function called connectDb that connects to our MongoDB database
const connectDb = async () => {
  // Try to connect to the database
  try {
    // Use mongoose to connect to the database using the connection string stored in an environment variable
    const connect = await mongoose.connect(process.env.CONNECTION_STRING)
    
    // If the connection is successful, log a message to the console with the database host and name
    console.log("Database connected: ",
      connect.connection.host, // The host name of the database
      connect.connection.name // The name of the database
    );
  } 
  // If there's an error connecting to the database, catch it and handle it
  catch (err) {
    // Log the error message to the console
    console.log(err);
    
    // Exit the process with a non-zero status code to indicate an error
    process.exit(1);
  }
};

// Export the connectDb function so it can be used in other parts of the application
module.exports = connectDb; 