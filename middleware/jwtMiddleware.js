const jwtMiddleware = (req, res, next) => {
    //logic
    console.log(`inside jwt middleware`);
    const token = req.headers[`authorization`]
    console.log(token);
    next()

}

module.exports = jwtMiddleware