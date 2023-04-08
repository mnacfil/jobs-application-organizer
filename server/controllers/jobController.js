const JobService = require('../services/jobService');
const { responseTemplate } = require('../middlewares/utilities')

const createJob = async (req, res) => {
    const jobCreated = await JobService.create(req.body);
    res.
        status(201).
        json(responseTemplate('SUCCESS', 'Job created!', jobCreated))
}
const getJob = (req, res) => {
    res.status(200).json({ route: 'get job'})
}
const updateJob = (req, res) => {
    res.status(200).json({ route: 'update job'})
}
const deleteJob = (req, res) => {
    res.status(200).json({ route: 'delete job'})
}
const getAllJob = (req, res) => {
    res.status(200).json({ route: 'get all job'})
}

module.exports = {
    getAllJob,
    getJob,
    createJob,
    updateJob,
    deleteJob
}