const mongoose = require('mongoose')

const gvtOfficialsSchema = new mongoose.Schema({
    no:{
        type:Number,
    },
    accountName:{
        type:String,
    },
    platform:{
        type:String,
    },
    url:{
        type:String,
    },
    dateReported:{
        type:String
    },
    status:{
        type:String
    },
    officer:{
        type:String
    }
})

module.exports = mongoose.model('gvt_officials',gvtOfficialsSchema)