import express from "express";
const router=express.Router();
import Contact from "../models/Contact.js";
import { getContacts,
         getContact,
         addContactPage,
         addContact,
         updteContactPage,
         updateContact,
         deleteContact
} from "../controller/contactController.js";

// ===== Routes =====c

// Home page
router.get("/", getContacts);

// Show all contacts
router.get("/show-contact", getContact);

// Add contact - form
router.get("/add-contact", addContactPage );

// Add contact - submit form
router.post("/add-contact",addContact);

// Update contact - form (get existing data by id)
router.get("/update-contact/:id", updteContactPage);

// Update contact - submit updated data
router.post("/update-contact/:id", updateContact);

// Delete contact
router.get("/delete-contact/:id",deleteContact);

export default router