require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// testing route
app.get('/test', (req, res) => {
    res.json({msg: 'testing route'})
})

const port = process.env.PORT || '5000';

const start = async() => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port: ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();