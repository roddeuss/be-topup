const mongoose = require('mongoose');
let playerSchema = mongoose.Schema({
    email : {
        type : String,
        require : [true, 'email harus diisi']
    },
    name : {
        type : String,
        require : [true, 'nama harus diisi'],
        maxLength : [225, "panjang nama harus antara 3 - 225 karakter"],
        minLength : [3, "panjang nama harus antara 3 - 225 karakter"]
    },
    userName : {
        type : String,
        require : [true, 'username harus diisi'],
        maxLength : [225, "panjang username harus antara 3 - 225 karakter"],
        minLength : [3, "panjang username harus antara 3 - 225 karakter"]
    },
    password : {
        type : String,
        require : [true, 'kata sandi harus diisi'],
        maxLength : [30, "panjang username harus antara 8 - 30 karakter"],
        minLength : [8, "panjang username harus antara 8 - 30 karakter"]
    },
    role : {
        type : String,
        enum : ['admin', 'user'],
        default : 'user'
    },  
    status : {
        type : String,
        enum : ['Y', 'N'],
        default : 'Y'
    },
    avatar : {
        type : String
    },
    fileName : {
        type: String
    },
    phoneNumber : {
        type : String,
        require : [true, 'Nomor Telepon harus diisi'],
        maxLength : [13, "panjang username harus antara 11 - 13 karakter"],
        minLength : [11, "panjang username harus antara 11 - 13 karakter"]
    },
    favorit : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    }
}, {timestamps : true})

module.exports = mongoose.model('Player', playerSchema) 