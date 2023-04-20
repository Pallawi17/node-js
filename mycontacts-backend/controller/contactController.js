const asyncHandler = require('express-async-handler');

//@desc get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async(req, res, next) => {
  res.status(200).json({
    message: "Get all contacts"
  })
})

//@desc get contacts
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async(req, res, next) => {
  res.status(200).json({
    message: `get contact with id ${req.params.id}`
  })
})

//@desc create new contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const {name, email, phone} = req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({
    message: "Create contact"
  })
})

//@desc update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async(req, res, next) => {
  res.status(200).json({
    message: `update contact with id ${req.params.id}`
  })
})

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async(req, res, next) => {
  res.status(200).json({
    message: `delete contact with id ${req.params.id}`
  })
})

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
}