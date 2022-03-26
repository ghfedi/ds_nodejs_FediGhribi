function isAdmin(req, res, next) {
    if (req.user.role != 'ADMIN')
        return res.status(401).send('You must be admin to do this');
    next();
}
module.exports = isAdmin;