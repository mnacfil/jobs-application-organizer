const { responseTemplate } = require('./utilities')

module.exports = (err, req, res, next) => {
    console.log("Error handler");
    console.log(err);
    return res.
        status(err.status).
        json(
        responseTemplate('Failed', err.name, null)
    )
}