//Create Express server
const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();

const app = express();

const port = process.env.PORT ||5002;

//Add  in built middleware as parser to parse the data received from the client to server side.
app.use(express.json());


//add middleware 
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})