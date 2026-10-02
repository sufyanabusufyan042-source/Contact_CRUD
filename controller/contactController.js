import Contact from "../models/Contact.js";
import mongoose from "mongoose";


export const getContacts=async(req, res) => {
 try{ 
    const {page=1, limit=3}=req.query;

    const options={
        page:parseInt(page),
        limit:parseInt(limit)
    }
    const result=await Contact.paginate({},options)

    res.render("home",{result});
    }catch(error){
      res.render('500',{message:error})
    }
};

export const getContact = async (req, res) => {
    try {
          const {page=1, limit=3}=req.query;

    const options={
        page:parseInt(page),
        limit:parseInt(limit)
    }
    const result=await Contact.paginate({},options)
     
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            return res.render('404', { message: 'contact not found.' });
        }
        res.render("show-contact", { contacts:result.docs,  result ,Counter:result.pagingCounter});
    } catch (error) {
        res.render('500', { message: error });
    }
};

export const addContactPage=(req, res) => {
    res.render("add-contact");
};

export const addContact= async (req, res) => {
    try{
     const { name, email, phone, address } = req.body;
    await Contact.create({ name, email, phone, address });
    res.redirect("/show-contact");
    }catch(error){
      res.render('500',{message:error});
    }
    
    
}

export const updteContactPage=async (req, res) => {
     if(!mongoose.Types.ObjectId.isValid(req.params.id)){
       return res.render('404',{message:'invalid id'})
    }

    try{
    const { id } = req.params;
    const contact = await Contact.findById(id);
    if(!contact){
     return res.render('404',{message:'contact not found.'})
    }
     res.render("update-contact", { contact });
    }catch(error){
       res.render('500',{message:error})
    }
    
   
}

export const updateContact=async (req, res) => {
     if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render('404',{message:'invalid id'})
    }
    try{
     const { id } = req.params;
    const { name, email, phone, address } = req.body;
    await Contact.findByIdAndUpdate(id, { name, email, phone, address });
    res.redirect("/show-contact");
    }catch(error){
     res.render('500',{message:error});
    }
   
    
}

export const deleteContact=async (req, res) => {
     if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render('404',{message:'invalid id'})
    }

     try{
     const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.redirect("/show-contact");
    }catch(error){
     res.render('500',{message:error});
    }
}