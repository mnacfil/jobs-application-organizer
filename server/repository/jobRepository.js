const Job = require('../models/Job');
const { NotFound, Unauthorized } = require('../error');
const { isAuthorize } = require('../middlewares/utilities');
const mongoose = require('mongoose');
const moment = require('moment');

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
        return new Promise(async (resolve, reject) => {
            try {
                console.log(whereParams);
                const queryJobs = await Job.find(whereParams).limit(limit).skip(skip).sort(sort);
                const totalJobApplication = await Job.countDocuments( whereParams );
                const numberOfPage = Math.ceil( totalJobApplication / limit );
                resolve({queryJobs,totalJobApplication,numberOfPage});
            } catch (error) {
                console.log('find all job repository error');
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
        } = updatedJob;
        return new Promise (async (resolve, reject) => {
            try {
                const job = await this.findById(jobId);
                console.log(job);
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
                    await job.save(); 
                    resolve('Job updated.');
                } else {
                    throw new Unauthorized('Youre not authorize to perform this operation');
                }
            } catch (error) {
                console.log("update job repository error");
                reject(error);
            }
        })
    }
    stats = (userID) => {
        return new Promise(async(resolve, reject) => {
            try {
                let stats = await Job.aggregate([
                    { $match: { owner: new mongoose.Types.ObjectId(userID) }},
                    { $group: { _id: '$jobStatus', count: { $sum: 1 }}}
                ])
                stats = stats.reduce((data, item) => {
                    const { _id, count } = item;
                    data[_id] = count;
                    return data;
                }, {});
                const statsData = {
                    exam: stats.exam || 0,
                    assestment: stats.assestment || 0,
                    ghosted: stats.ghosted || 0,
                    applied: stats.applied || 0,
                    finalInterview: stats['final interview'] || 0,
                    initialInterview: stats['initial interview'] || 0,
                    jobOffer: stats['job offer'] || 0,
                    notSelected: stats['not selected'] || 0,
                    waitingInResult: stats['waiting in result'] || 0
                }
                let monthlyApplication = await Job.aggregate([
                    { $match: { owner: new mongoose.Types.ObjectId(userID) }},
                    { $group: { 
                        _id: {
                            year: { $year: '$createdAt'},
                            month: { $month: '$createdAt'}
                        },
                        count: { $sum: 1}
                    }},
                    { $sort : { '_id.year': -1, '_id.month': -1}},
                    { $limit: 6}
                ])
                monthlyApplication = monthlyApplication.map(item => {
                    const { _id: { year, month }, count } = item;
                    const date = moment().month(month - 1).year(year).format('MMMM Y');
                    return { date, count };
                })
                resolve({ statsData, monthlyApplication });
            } catch (error) {
                console.log("stats job repository error");
                reject(error)
            }
        })
    }
}

module.exports = new JobRepository();