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
    const updatedJob = await JobService.update( req.user.userID, req.params.id, req.body );
    res.
        status(200).
        json(responseTemplate(
            "SUCCESS",
            "Succesfully update the job",
            updatedJob
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
    const result = await JobService.findAll( req.query );
    res.
        status(200).
        json(responseTemplate(
            "SUCCESS",
            "Succesfully fetch all the job",
            result
    ));
}

const getJobApplicationStats = async(req, res) =>{
    const result = await JobService.stats(req.user.userID);
    res.
        status(200).
        json(responseTemplate(
            "SUCCESS",
            "Succesfully get all the job stats",
            result
    ));
}

module.exports = {
    getAllJob,
    getJob,
    createJob,
    updateJob,
    deleteJob,
    getJobApplicationStats
}