require('dotenv').config();
require('express-async-errors');

const express = require('express');
const morgan = require('morgan');
const connectToDatabase = require('./config/db');
const userRoutes = require('./routes/userRoute');
const { errorHandler, notFoundPage } = require('./middlewares');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/user', userRoutes);


app.use(notFoundPage);
app.use(errorHandler);

// testing route
app.get('/test', (req, res) => {
    res.json({msg: 'testing route'})
})

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