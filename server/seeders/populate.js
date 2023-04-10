require('dotenv').config();
const Job = require('../models/Job')
const connectToDatabase = require('../config/db');
const mockData = require('./mockData.json')

async function pupulateData () {
    try {
        await connectToDatabase(process.env.MONGO_URL);
        await Job.create(mockData)
        process.exit(0)
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

pupulateData()