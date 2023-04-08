const Job = require('../models/Job');

class JobRepository {

    create = (job) => {
        return new Promise (async(resolve, reject) => {
            try {
                resolve(await Job.create(job));
            } catch (error) {
                console.log("Create job repository error");
                reject(err)
            }
        })
    }
}

module.exports = new JobRepository();