const JobRepository = require('../repository/jobRepository');
const { NotFound, BadRequest } = require('../error')

class JobService {

    create = async (job) => {
        try {
             return await JobRepository.create(job);
        } catch (error) {
            throw new BadRequest(error)
        }
    }
    update = async (jobID, updatedJob) => {
        try {
            return await JobRepository.update(jobID, updatedJob);
        } catch (error) {
            throw new BadRequest(error);
        }
    }
    findAll = async(userID) => {
        try {
            return await JobRepository.findAll(userID);
        } catch (error) {
            throw new BadRequest(error);
        }
    }
    findById = async(jobID) => {
        try {
            return await JobRepository.findById(jobID);
        } catch (error) {
            throw new NotFound(error);
        }
    }
}

module.exports = new JobService()