const mongoose = require('mongoose');
const{Schema}=mongoose;
const NotesSchema = new Schema({

    
    id: Number,
    name: String    
    
   

  });

  const NotesModel = mongoose.model("notes", NotesSchema)
module.exports = NotesModel