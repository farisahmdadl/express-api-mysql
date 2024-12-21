const logRequest = (req, res, next) => {
    console.log('Log Request to Path:', req.path);
    next();
}

module.exports = logRequest;