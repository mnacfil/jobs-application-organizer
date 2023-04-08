const mongoose = require('mongoose');
const validator = require('validator')

const RecruiterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide recruiter name'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide recruiter email'],
        validate: {
            validator: validator.isEmail,
            message: 'Plese provide valid recruiter email'
        }
    },
    contactNumber: {
        type: String,
        required: [true, 'Please provide recruiter contact number'],

    },
})

const JobSchema = new mongoose.Schema({
    jobStatus: {
        type: String,
        enum: {
            values: ['initial interview', 'final interview', 'exam', 'assestment', 'not selected', 'job offer', 'applied', 'ghosted'],
            message: `{VALUE} is not supported`
        },
        default: 'applied'
    },
    jobType: {
        type: String,
        enum: {
            values: ['full time', 'part time', 'internship', 'remote', 'freelance'],
            message: '{VALUE} is not supported'
        },
        default: 'full time'
    },
    jobLocation: {
        type: String,
        default: 'Earth'
    },
    company: {
        type: String,
        required: [true, 'Please provide company']
    },
    position: {
        type: String,
        required: [true, 'Please provide position']
    },
    recruiter: RecruiterSchema
}, {timestamps: true});

module.exports = mongoose.model('Job', JobSchema);