//@desc Get all contacts
//@route GET /api/contacts
//@access public 

const getContacts = (req, res) => {
    // Send a response with a 200 status code (OK) and a JSON message
    // This message will be returned to the client when they make a GET request to this route
    res.status(200).json({ message: "Get all contacts" });
  }; 

   



  //@desc Create New  contact
//@route POST /api/contacts
//@access public 

const createContact = (req, res) => {
    // Send a response with a 200 status code (Resource Created) and a JSON message
    // This message will be returned to the client when they make a POST request to this route
    res.status(201).json({ message: "Create Contact" });
  }; 




  //@desc GET  individual contact
//@route GET /api/contacts/:id
//@access public 

const getContact = (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
}


  //@desc Update contact
//@route PUT  /api/contacts/
//@access public 

const updateContact = (req, res) => {
    // The ":id" part of the route is a parameter that will be passed to the request handler
    // We can access this parameter using req.params.id
    // Send a response with a 200 status code (OK) and a JSON message that includes the ID
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
  }


   //@desc Delete contact
//@route DELETE  /api/contacts/:id
//@access public 

const deleteContact =  (req, res) => {
    // The ":id" part of the route is a parameter that will be passed to the request handler
    // We can access this parameter using req.params.id
    // Send a response with a 200 status code (OK) and a JSON message that includes the ID
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
  }









  module.exports = {getContacts, createContact , getContact, updateContact, deleteContact };