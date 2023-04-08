const JobRepository = require('../repository/jobRepository');
const { Unauthorized, NotFound, BadRequest } = require('../error')

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
}

module.exports = new JobService()