const express = require('express');
const router = express.Router();
const {authenticated} = require('../middlewares')

const {
    getAllJob,
    getJob,
    createJob,
    updateJob,
    deleteJob
} = require('../controllers/jobController');

// setup authentication middleware,
// only authenticate user can perform crud operations
router.route('/').
                post( authenticated, createJob).
                get( authenticated, getAllJob);
router.route('/:id').
                    get( authenticated, getJob).
                    patch( authenticated, updateJob).
                    delete( authenticated, deleteJob);

module.exports = router;