const express = require('express')
const mongoose = require('mongoose')
const app = express()
const EmployeeRoute = require('./route/EmployeeRoute')
const ProjectRoute = require('./route/ProjectRoute')
const UserRoute = require('./route/UserRoute')
const cors = require('cors')

var bodyParser = require('body-parser');

const dbURI = 'mongodb://localhost:27017/AquaSoft'

// const uri = "mongodb+srv://user:parola@cluster0.w3zdp.mongodb.net/Cluster0?authSource=admin&replicaSet=atlas-rnmabo-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
// const URI = "mongodb+srv://user:parola@cluster0.w3zdp.mongodb.net/AquaSoft"

mongoose.connect(dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error: "))

db.once("open", function () {
  console.log("Connected successfully")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// app.get('/', cors(), (req, res) => {
//   res.json({
//       message: 'Hello World'
//   });
// });

app.use('/employee', EmployeeRoute)
app.use('/project', ProjectRoute)
app.use('/users', UserRoute)

app.get('/', function(req, res){
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log('Server started on port 3000...')
})