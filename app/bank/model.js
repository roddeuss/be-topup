const mongoose = require('mongoose');
let bankSchema = mongoose.Schema({

    name : {
        type : String,
        require : [true, 'Nama Pemilik harus diisi']
    },
    nameBank : {
        type : String,
        require : [true, 'Nama BanK harus diisi']
    },
    noRekening : {
        type : String,
        require : [true, 'Nomor Rekening harus diisi']
    },
}, {timestamps : true})

module.exports = mongoose.model('Bank', bankSchema) 