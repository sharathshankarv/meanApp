const express = require('express');
const router = express.Router();


const Contact = require('../models/ContactsSchema');

router.get('/contact', (req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
})

router.post('/addContact',(req, res,next)=>{
    console.log("request body" + req.body);
    let newContact = new Contact({
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "phone" : req.body.phone
    })

    newContact.save((err, contact)=>{
        if(!err){
            res.json({'msg': "Conatct Added successfully"})
        }else{
            res.json({'msg': "Couldnt save contact"})
        }
    })
})

router.delete('/delContact', (req, res, next)=>{
    Contact.remove({_id: req.param.id},function(err, res){
        if(!err){
            res.json(res);
        }else{
            res.json(err);
        }
    });
});

module.exports = router;
