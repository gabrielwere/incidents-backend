const express = require('express')
const compromised_accounts_model = require('../models/compromised_accounts_model')

const router = express.Router()

router.get('/',async (req,res)=>{

    try{
        const compromisedAccounts = await compromised_accounts_model.find()
        res.json(compromisedAccounts)

    }catch(err){
        res.status(500).json("could not retrieve compromised accounts")
        console.log(err)
    }

})

router.get('/:id',(req,res)=>{

    res.send(req.params.id)
})

router.post('/', async (req,res)=>{

    const compromised_account = new compromised_accounts_model({
          accountNo: req.body.accountNo,
          accountName:req.body.accountName,
          platform:req.body.platform,
          compromisedAccount:req.body.platform,
          dateReported:req.body.dateReported,
          incident:req.body.incident,
          status:req.body.status,
          officerResponsible:req.body.officerResponsible,
          referenceNumber:req.body.referenceNumber
    })


    try{
        const newCompromisedAccount = await compromised_account.save()
        res.status(201).json(newCompromisedAccount)
    }catch(err){
        res.status(400).json("could not create new compromised account")
    }
})

router.patch('/:id', (req,res)=>{

})

router.delete('/:id', (req,res)=>{

})

module.exports = router