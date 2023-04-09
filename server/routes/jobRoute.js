const express = require('express');
const router = express.Router();
const {authenticate} = require('../middlewares')

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
                post( authenticate, createJob).
                get( authenticate, getAllJob);
router.route('/:id').
                    get( authenticate, getJob).
                    patch( authenticate, updateJob).
                    delete( authenticate, deleteJob);

module.exports = router;