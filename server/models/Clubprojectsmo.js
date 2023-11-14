const mongoose = require('mongoose')

const ProjectsSchema = new mongoose.Schema({
    image: String,
    name:String,
    description:String
   
    
})

const ProjectsModel = mongoose.model("clubProjects", ProjectsSchema)
module.exports = ProjectsModel