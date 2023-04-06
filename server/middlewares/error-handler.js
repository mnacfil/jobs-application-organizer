module.exports = (err, req, res, next) => {
    console.log("Error handler");
    console.log(err);
    return res.json({err})
}