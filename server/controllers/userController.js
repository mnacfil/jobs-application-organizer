

const register = async(req, res) => {
    res.json({msg: req.body});
}
const login = async(req, res) => {
    res.json({msg: req.body});
}

module.exports = {
    register,
    login
}