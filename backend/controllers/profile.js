
module.exports = profile =(req, res)=>{
    // console.log('Cookies: ', req.cookies)

    res.send(req.profile)
}