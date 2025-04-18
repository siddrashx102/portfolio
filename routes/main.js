const express = require('express');
const router = express.Router();
const { sendWhatsApp } = require('../services/whatsappService');
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
        // await newContact.save();
        // Send WhatsApp
        // console.log("Sending WhatsApp message...");
        const whatsappSent = await sendWhatsApp(newContact.name, newContact.email, newContact.message);

        if (whatsappSent) {
            res.redirect('/#contact?success=true');
        } else {
            res.redirect('/#contact?success=whatsapp-failed');
        }
    } catch (err) {
        res.redirect('/#contact?success=false');
    }
});

module.exports = router;