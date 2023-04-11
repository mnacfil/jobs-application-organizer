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
    update = async (userID, jobID, updatedJob) => {
        try {
            return await JobRepository.update(userID, jobID, updatedJob);
        } catch (error) {
            throw new BadRequest(error);
        }
    }
    findAll = async(query) => {
        const { search, status, type, page, sort, limit } = query;
        let whereParams = { owner: query.owner}
        if(status && status !== 'all') {
            whereParams.jobStatus = status;
        }
        if(type && type !== 'all') {
            whereParams.jobType = type;
        }
        if(sort === 'a-z') {
            query.sort = 'position';
        }
        if(sort === 'z-a') {
            query.sort = '-position';
        }
        if(sort === 'latest') {
            query.sort = '-createdAt';
        }
        if(sort === 'oldest') {
            query.sort = 'createdAt';
        }
        if(search) {
            whereParams.position = { $regex: search, $options: 'i'}
        }
        const targetPage = Number(page) || 1;
        let targetLimit = Number(limit) || 10;
        let skip = (targetPage - 1) * targetLimit;
        try {
            return await JobRepository.findAll(whereParams, targetLimit, skip, query.sort);
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
    delete = async(userID, jobID) => {
        try {
            return await JobRepository.delete(userID, jobID);
        } catch (error) {
            throw new NotFound(error);
        }
    }
    stats = async(userID) => {
        try {
            return await JobRepository.stats(userID);
        } catch (error) {
            throw new BadRequest(error);
        }
    }
}

module.exports = new JobService()