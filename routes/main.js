const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', (req, res) => {
    res.render('index', { 
        title: 'John Doe - Portfolio',
        success: req.query.success 
    });
});

router.post('/contact', async (req, res) => {
    try {
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        await newContact.save();
        res.redirect('/#contact?success=true');
    } catch (err) {
        res.redirect('/#contact?success=false');
    }
});

module.exports = router;