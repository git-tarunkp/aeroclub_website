const mongoose = require('mongoose')

const MembersSchema = new mongoose.Schema({
    image: String,
    name:String,
    description:String
   
    
})

const MembersModel = mongoose.model("clubmembers", MembersSchema)
module.exports = MembersModel