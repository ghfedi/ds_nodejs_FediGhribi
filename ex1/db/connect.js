const mongoose = require('mongoose');
mongoose
.connect('mongodb+srv://Mouadh:mouadh123@cluster0.ajc8j.mongodb.net/DSnodejs?retryWrites=true&w=majority')
.then(()=> console.log('connected!')).catch(err=>console.error('error connection :',err.message));