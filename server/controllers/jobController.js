

const createJob = (req, res) => {
    res.status(200).json({ route: 'create job'})
}
const getJob = (req, res) => {
    res.status(200).json({ route: 'get job'})
}
const updateJob = (req, res) => {
    res.status(200).json({ route: 'update job'})
}
const deleteJob = (req, res) => {
    res.status(200).json({ route: 'delete job'})
}
const getAllJob = (req, res) => {
    res.status(200).json({ route: 'get all job'})
}

module.exports = {
    getAllJob,
    getJob,
    createJob,
    updateJob,
    deleteJob
}