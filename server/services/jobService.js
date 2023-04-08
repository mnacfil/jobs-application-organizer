const JobRepository = require('../repository/jobRepository');
const { Unauthorized, NotFound, BadRequest } = require('../error')

class JobService {

    create = async (job) => {
        try {
             return await JobRepository.create(job);
        } catch (error) {
            console.log(`job servicer error`);
            console.log(error);
            throw new BadRequest(error)
        }
    }
}

module.exports = new JobService()