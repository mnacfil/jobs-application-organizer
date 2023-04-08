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
const updateJob = async (req, res) => {
    const result = await JobService.update(req.params.id, req.body);
    res.
        status(200).
        json(responseTemplate(
            "SUCCESS",
            "Succesfully update the job",
            result
    ));
}
const deleteJob = (req, res) => {
    res.status(200).json({ route: 'delete job'})
}
const getAllJob = async (req, res) => {
    const jobs = await JobService.findAll();
    res.
        status(200).
        json(responseTemplate(
            "SUCCESS",
            "Succesfully fetch all the job",
            jobs
    ));
}

module.exports = {
    getAllJob,
    getJob,
    createJob,
    updateJob,
    deleteJob
}