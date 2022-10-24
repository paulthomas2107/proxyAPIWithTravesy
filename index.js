const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 Minutes
  max: 200,
});

// Set static routes
app.use(express.static('public'))

app.use(limiter)
app.set('trust proxy', 1)

// Routes
app.use('/api', require('./routes'));

// Enable Cors
app.use(cors());

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
