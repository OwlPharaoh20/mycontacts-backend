const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");


//@desc Get all contacts
//@route GET /api/contacts
//@access private 

const getContacts =  asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
  }); 


  //@desc Create New  contact
//@route POST /api/contacts
//@access private 

const createContact =  asyncHandler(async  (req, res) => {
    console.log( "The request Body is:", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const contact = await Contact.create({
        name, 
        email,
        phone,
        user_id: req.user.id
    });


    res.status(201).json(contact);
  } ); 




  //@desc GET  individual contact
//@route GET /api/contacts/:id
//@access private 

const getContact =   asyncHandler(async  (req, res) => {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not found")
    }
     res.status(200).json(contact);
});  


  //@desc Update contact
//@route PUT  /api/contacts/
//@access private 




const updateContact =    asyncHandler(async (req, res) => {
   const contact = await Contact.findById(req.params.id);
   if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
   }

   const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new : true}
   );
    res.status(200).json( updatedContact);
  });  


   //@desc Delete contact
//@route DELETE  /api/contacts/:id
//@access private 


asyncHandler(async (req, res) => {});
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
      res.status(404);
      throw new Error("Contact not found");
    }
    await Contact.remove();
    res.status(200).json(contact);
  }); 









  module.exports = {getContacts, createContact , getContact, updateContact, deleteContact };