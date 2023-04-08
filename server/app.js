require('dotenv').config();
require('express-async-errors');

const express = require('express');
const morgan = require('morgan');
const connectToDatabase = require('./config/db');
const userRoutes = require('./routes/userRoute');
const jobRoutes = require('./routes/jobRoute');
const { errorHandler, notFoundPage } = require('./middlewares');
const cookieParser = require('cookie-parser');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser(process.env.TOKEN_SECRET));
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