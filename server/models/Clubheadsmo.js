const mongoose = require('mongoose')

const HeadsSchema = new mongoose.Schema({
    image: String,
    name:String,
    description:String
   
    
})

const HeadsModel = mongoose.model("clubheads", HeadsSchema)
module.exports = HeadsModel