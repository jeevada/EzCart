const sendToken = (user, statusCode, res) => {
    // Creating JWT 
    const token = user.getJwtToken();

    //  setting cookies
    const options = {
        expires: new Date(Date.now() + Number(process.env.COOKIE_EXPIRES_TIME) * 24 * 60 * 60 * 1000),
        httpOnly: true,
    }

    res.status(statusCode)
    .cookie('token', token, options)
    .json({
        success: true,
        token,
        user
    })
}

module.exports = sendToken;