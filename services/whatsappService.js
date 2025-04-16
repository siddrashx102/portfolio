// services/whatsappService.js
const twilio = require('twilio');

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

const sendWhatsApp = async (name, email, message) => {
    try {
      console.log('Sending WhatsApp message...');
      await client.messages.create({
        body: `New Contact:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        from: 'whatsapp:+14155238886', // Twilio sandbox number
        to: 'whatsapp:+918445468881' // Your number with country code
      });
      console.log('WhatsApp message sent successfully!');
      return true;
    } catch (error) {
      console.error('WhatsApp error:', error);
      return false;
    }
  };
  
  module.exports = { sendWhatsApp };