const mongoose = require('mongoose');

const connect = () =>{
    return mongoose.connect("mongodb+srv://sunnyshk:adminadmin@cluster0.zobmn.mongodb.net/Backend")
} 

module.exports = connect;