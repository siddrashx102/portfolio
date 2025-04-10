const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// Database connection
// mongoose.connect(process.env.DB_URI, { 
//   useNewUrlParser: true, 
//   useUnifiedTopology: true 
// });

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/main'));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));