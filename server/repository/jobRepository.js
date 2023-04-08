const Job = require('../models/Job');
const { NotFound } = require('../error');

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
    findAll = (userID) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await Job.find({ owner: userID }));
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
    delete = (jobID) => {
        return new Promise (async(resolve, reject) => {
            try {
                const job = await Job.findByIdAndDelete({ _id: jobID });
                if(!job) {
                    throw new NotFound('No job found!');
                }
                resolve('Job Deleted');
            } catch (error) {
                console.log('delete job repository error');
                reject(error);
            }
        })
    }
    update = (jobId, updatedJob) => {
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
            } catch (error) {
                console.log("update job repository error");
                console.log(error);
                reject(error)
            }
        })
    }
}

module.exports = new JobRepository();