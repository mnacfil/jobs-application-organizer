const CustomError = require('./customError');
const { StatusCodes } = require('http-status-codes')

class InterServer extends CustomError {
    constructor(message) {
        super(message)
        this.name = message
        this.status = StatusCodes.INTERNAL_SERVER_ERROR;
    }
}

module.exports = InterServer