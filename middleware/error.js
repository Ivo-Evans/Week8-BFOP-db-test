function handleError(err, req, res, next){

    const errorStatus = err.status || 400;
    res.status(errorStatus).send({ "error": err });
    // console.error(err);

}

module.exports = handleError;