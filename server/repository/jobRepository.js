const Job = require('../models/Job');
const { NotFound, Unauthorized } = require('../error');
const { isAuthorize } = require('../middlewares/utilities');

class JobRepository {

    create = (job) => {
        return new Promise (async(resolve, reject) => {
            try {
                resolve(await Job.create(job));
            } catch (error) {
                console.log('Create job repository error');
                reject(error)
            }
        })
    }
    findAll = (whereParams, limit, skip, sort) => {
        console.log(whereParams);
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await Job.find(whereParams).limit(limit).skip(skip).sort(sort));
            } catch (error) {
                console.log('find job repository error');
                reject(error);
            }
        })
    }
    findById = (jobID) => {
        return new Promise(async (resolve, reject) => {
            try {
                const job = await Job.findOne({ _id: jobID });
                if(!job) {
                    throw new NotFound('No job found!');
                }
                resolve(job);
            } catch (error) {
                console.log('find job repository error');
                reject(error);
            }
        })
    }
    delete = (userID, jobID) => {
        return new Promise (async(resolve, reject) => {
            try {
                const job = await this.findById(jobID)
                if(!job) {
                    throw new NotFound('No job found!');
                }
                const isUserAuthorize = isAuthorize(userID, job.owner);
                if(isUserAuthorize) {
                    await Job.findOneAndDelete({ _id: jobID})
                    resolve('Job Deleted');
                } else {
                    throw new Unauthorized('Youre not authorize to perform this operation');
                }
            } catch (error) {
                console.log('delete job repository error');
                reject(error);
            }
        })
    }
    update = (userID, jobId, updatedJob) => {
        const { 
            jobStatus, 
            jobType, 
            jobLocation, 
            company, 
            position,
            recruiter: {
                name,
                email,
                contactNumber
            } 
        } = updatedJob;
        return new Promise (async (resolve, reject) => {
            try {
                const job = await this.findById(jobId);
                if(!job) {
                    throw new NotFound('No job found!');
                }
                const isUserAuthorize = isAuthorize(userID, job.owner);
                if(isUserAuthorize) {
                    job.jobStatus = jobStatus;
                    job.jobType = jobType;
                    job.jobLocation = jobLocation;
                    job.company = company;
                    job.position = position;
                    job.recruiter.name = name;
                    job.recruiter.email = email;
                    job.recruiter.contactNumber = contactNumber;
                    await job.save(); 
                    resolve(job);
                } else {
                    throw new Unauthorized('Youre not authorize to perform this operation');
                }
            } catch (error) {
                console.log("update job repository error");
                reject(error)
            }
        })
    }
}

module.exports = new JobRepository();