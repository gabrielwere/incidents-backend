const mongoose = require('mongoose')
  
  const compromisedAccountsSchema = new mongoose.Schema({
      accountNo:{
          type:Number,
      },
      accountName:{
          type:String,
      },
      platform:{
          type:String,
      },
      compromisedAccount:{
          type:String,
      },
      dateReported:{
          type:String
      },
      incident:{
        type:String
      },
      status:{
          type:String
      },
      officerResponsible:{
          type:String
      },
      referenceNumber:{
        type:String
      },
  })
  
  module.exports = mongoose.model('compromised_accounts',compromisedAccountsSchema)