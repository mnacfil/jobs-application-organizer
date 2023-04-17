const { responseTemplate } = require('./utilities')

module.exports = (err, req, res, next) => {
    console.log("Error handler");
    console.log(err);
    if(err.name.name === 'ValidationError') {
        return res.
            status(err.status).
            json(responseTemplate(
                'Failed',
                'Some of the values you provided is not supported',
                err.name._message,
            ));
    }
    if(err.name.name === 'CastError') {
        return res.
            status(err.status).
            json(responseTemplate(
                'Failed',
                'No job found.',
                err.name._message,
            ));
    }
    return res.
        status(err.status || 500).
        json(responseTemplate(
            'Failed',
             err.name.name || err.name || 'Something went wrong',
            null
        )
    )
    return res.json({ err })
}