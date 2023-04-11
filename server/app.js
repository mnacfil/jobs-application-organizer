require('dotenv').config();
require('express-async-errors');

const express = require('express');
const morgan = require('morgan');
const connectToDatabase = require('./config/db');
const userRoutes = require('./routes/userRoute');
const jobRoutes = require('./routes/jobRoute');
const { errorHandler, notFoundPage } = require('./middlewares');
const cors = require('cors');
const xss = require('xss-clean');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize')

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(xss());
app.use(helmet());
app.use(mongoSanitize());

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/job', jobRoutes);

// testing route
app.get('/test', (req, res) => {
    res.json({msg: 'testing route'})
})

app.use(notFoundPage);
app.use(errorHandler);

const port = process.env.PORT || '5000';

const start = async() => {
    try {
        await connectToDatabase(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is listening on port: ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();