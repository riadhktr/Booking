const express = require('express');
const { register, allUsers, login, createTicket, getTickets } = require('../controllers/user');
const { authMiddleware } = require('../midellwares/authMiddleware');


const userRoutes = express.Router();


userRoutes.post('/register',register);
userRoutes.post('/login',login)
userRoutes.post('/tickets/:id',authMiddleware,createTicket)
userRoutes.get('/MyTickets',authMiddleware,getTickets)
// Admin actions
userRoutes.get('/allUser',allUsers)

module.exports = userRoutes