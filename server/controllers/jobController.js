const JobService = require('../services/jobService');
const { responseTemplate } = require('../middlewares/utilities');

const createJob = async (req, res) => {
    req.body.owner = req.user.userID;
    const jobCreated = await JobService.create(req.body);
    res.
        status(201).
        json(responseTemplate(
            'SUCCESS', 
            'Job created!', 
            jobCreated
        ));
}
const getJob = async (req, res) => {
    const job = await JobService.findById(req.params.id);
    res.
        status(200).
        json(responseTemplate(
            'SUCCESS', 
            'Job found!', 
            job
        ));
}
const updateJob = async (req, res) => {
    const result = await JobService.update( req.user.userID, req.params.id, req.body );
    res.
        status(200).
        json(responseTemplate(
            "SUCCESS",
            "Succesfully update the job",
            result
    ));
}
const deleteJob = async (req, res) => {
    const result = await JobService.delete(req.user.userID, req.params.id);
    res.
        status(200).
        json(responseTemplate(
            "SUCCESS",
            "Succesfully delete the job",
            result
    ));
}
const getAllJob = async (req, res) => {
    req.query.owner = req.user.userID;
    const jobs = await JobService.findAll( req.query );
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