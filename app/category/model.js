const mongoose = require('mongoose');
let categorySchema = mongoose.Schema({
    name : {
        type: String,
        require : [true, 'Nama Category Harus di isi']
    }
})

module.exports = mongoose.model('Category', categorySchema)