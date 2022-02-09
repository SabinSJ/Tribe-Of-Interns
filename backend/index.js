const express = require('express')
const mongoose = require('mongoose')
const app = express()
const EmployeeRoute = require('./route/EmployeeRoute')
const dbURI = 'mongodb://localhost:27017/AquaSoft'
const uri = "mongodb+srv://user:parola@cluster0.w3zdp.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use('/employee', EmployeeRoute)

app.get('/', function(req, res){
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log('Server started on port 3000...')
})