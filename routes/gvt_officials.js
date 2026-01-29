const express = require('express')
const gvt_officials_model = require('../models/gvt_officials_model')
const router = express.Router()

router.get('/',async (req,res)=>{

    try{
        const gvtOfficials = await gvt_officials_model.find()
        res.json(gvtOfficials)

    }catch(err){
        res.status(500).json("could not retrieve gvt officials")
        console.log(err)
    }

})

router.get('/:id',(req,res)=>{

    res.send(req.params.id)
})

router.post('/', async (req,res)=>{

    const official = new gvt_officials_model({
        no:req.body.no,
        accountName:req.body.accountName,
        platform:req.body.platform,
        url:req.body.url,
        dateReported:req.body.dateReported,
        status:req.body.status,
        officer:req.body.officer
    })


    try{
        const newOfficial = await official.save()
        res.status(201).json(newOfficial)
    }catch(err){
        res.status(400).json("could not create new official")
    }
})

router.patch('/:id', (req,res)=>{

})

router.delete('/:id', (req,res)=>{

})

module.exports = router