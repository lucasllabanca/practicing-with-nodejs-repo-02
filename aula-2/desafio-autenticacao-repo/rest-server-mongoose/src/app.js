const express = require('express');
const app = express();

// Middlewares
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const notFound = require('./middleware/not-found');

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routes
const questionsRouter = require('./routes/questions');
const usersRouter = require('./routes/users');
app.use('/api/questions', questionsRouter);
app.use('/api/users', usersRouter);

// Missing routes
app.use(notFound);

module.exports = app;