const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    image: String,
    title:String,
    description:String
   
    
})

const ImageModel = mongoose.model("titleandimage", ImageSchema)
module.exports = ImageModel