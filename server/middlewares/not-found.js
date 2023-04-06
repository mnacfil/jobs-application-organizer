module.exports = (req, res) => {
    return res.status(404).json({ msg: 'Resource not found'});
}