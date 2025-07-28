const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002; // Using a different port to avoid conflict

// --- Middleware ---
// Enable CORS to allow requests from your frontend
app.use(cors()); 
// Parse incoming JSON requests (like our form data)
app.use(express.json());

// --- MongoDB Connection ---
// IMPORTANT: Replace the following with your actual MongoDB connection string.
// You can get this from your MongoDB Atlas dashboard.
const MONGO_URI = 'YOUR_MONGODB_CONNECTION_STRING';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- Mongoose Schema & Model ---
// This defines the structure of the data we want to save in our database.
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

// The model is a constructor compiled from the schema, used to create and read documents.
const Contact = mongoose.model('Contact', contactSchema);


// --- API Routes ---

// A simple root route to confirm the server is running
app.get('/', (req, res) => {
    res.send('Contact Form API is running...');
});

/**
 * @api {post} /api/contact Save a new contact form submission
 * @description Receives contact form data and saves it to the MongoDB database.
 */
app.post('/api/contact', async (req, res) => {
  try {
    // Create a new document using the Contact model and the request body
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });

    // Save the new document to the database
    const savedContact = await newContact.save();
    
    // Send a success response back to the frontend
    res.status(201).json({ 
        message: 'Your message has been sent successfully!', 
        data: savedContact 
    });

  } catch (error) {
    // If an error occurs, send an error response
    console.error('Error saving contact form data:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});


// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Contact form server is running on http://localhost:${PORT}`);
});
