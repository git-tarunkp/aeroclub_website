const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const UserModel = require('./models/User')
const NotesModel= require('./models/Activity')
const ImageModel=require('./models/Imagemo')
const multer = require('multer')
const path =require('path')
const MembersModel = require("./models/Clubmemmo")
const HeadsModel = require("./models/Clubheadsmo")
const ProjectsModel = require("./models/Clubprojectsmo")


const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST","DELETE","PUT"],
    credentials: true
}))
app.use(cookieParser())

mongoose.connect('mongodb://127.0.0.1:27017/employee');

const varifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json("Token is missing")
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err) {
                return res.json("Error with token")
            } else {
                if(decoded.role === "admin") {
                    next()
                } else {
                    return res.json("not admin")
                }
            }
        })
    }
}

app.get('/dashboard',varifyUser ,(req, res) => {
    res.json("Success")
})




app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({name, email, password: hash})
        .then(user => res.json("Success"))
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if(response) {
                  const token = jwt.sign({email: user.email, role: user.role},
                        "jwt-secret-key", {expiresIn: '1d'})  
                    res.cookie('token', token)
                    return res.json({Status: "Success", role: user.role})
                }else {
                    return res.json("The password is incorrect")
                }
            })
        } else {
            return res.json("No record existed")
        }
    })
})


// app.get("/homex", (req, res) => {
//     res.json("Success");
//   });


//   app.get("/homex", (req, res) => {

    
//     NotesModel.find({}, function(err, data) {
              
//                 // console.log(data[0]);
               
//                 if (err) {
//         console.log(err);
//         return res.send(500, 'Something Went wrong with Retrieving data');
//       } else {
//         // console.log(data[0]);
//         res.json(data);
//       }
                
              
//             }); });

// const userCollection = client.db('employee').collection('notes');

// async function run() {
//     try {
//         await client.connect()
//         const userCollection = client.db('employee').collection('notes');
//         app.get('/homex', async (req, res) => {
//             const query = {}
//             const result = await userCollection.find(query).toArray()
//             res.send(result)
//         })
//     } finally {
//     }
// }
// run().catch(console.dir);


//   app.get('/', function(req, res) {

//     db.find({}, function(err, data) {
//       if (err) {
//         console.log(err);
//         return res.send(500, 'Something Went wrong with Retrieving data');
//       } else {
//         // console.log(data[0]);
//         res.json(data);
//       }
//     });
  
//   });





app.get('/homex',(req,res)=>{
NotesModel.find()
.then(users=>res.json(users))
.catch(err=> res.json(err))

})


const storage=multer.diskStorage({
    destination: (req,file,cb)=>
    {
        cb(null,'public/Images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})

const upload =multer({
    storage:storage
})

app.post('/uploadact',upload.single('file'),(req,res)=>{
    ImageModel.create({image: req.file.filename,
         title:req.body.title,
         description:req.body.description})
    .then(result=>res.json(result))
    .catch(err=> console.log(err))

})


app.get('/getact',(req,res)=>{
    ImageModel.find()
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})

app.delete('/deleteact/:id', (req, res) => {
    const id=req.params.id;
    ImageModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err)) 
})



app.post('/uploadclubmem',upload.single('file'),(req,res)=>{
    MembersModel.create({image: req.file.filename,
         name:req.body.name,
         description:req.body.description})
    .then(result=>res.json(result))
    .catch(err=> console.log(err))

})


app.get('/getclubmem',(req,res)=>{
    MembersModel.find()
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})

app.delete('/deleteclubmem/:id', (req, res) => {
    const id=req.params.id;
    MembersModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err)) 
})



app.post('/uploadclubheads',upload.single('file'),(req,res)=>{
    HeadsModel.create({image: req.file.filename,
         name:req.body.name,
         description:req.body.description})
    .then(result=>res.json(result))
    .catch(err=> console.log(err))

})


app.get('/getclubheads',(req,res)=>{
    HeadsModel.find()
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})

app.delete('/deleteclubheads/:id', (req, res) => {
    const id=req.params.id;
    HeadsModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err)) 
})



app.post('/uploadclubprojects',upload.single('file'),(req,res)=>{
    ProjectsModel.create({image: req.file.filename,
         name:req.body.name,
         description:req.body.description})
    .then(result=>res.json(result))
    .catch(err=> console.log(err))

})


app.get('/getclubprojects',(req,res)=>{
    ProjectsModel.find()
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})

app.delete('/deleteclubprojects/:id', (req, res) => {
    const id=req.params.id;
    ProjectsModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err)) 
})




app.listen(3001, () => {
    console.log("Server is Running")
})