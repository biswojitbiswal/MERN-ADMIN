const adminMiddleware = async(req, res, next) => {
    try {
        const userData = req.user;

        if(userData.isAdmin){
            return next();
        }

        return res.redirect('/error');
    } catch (error) {
        console.log(error)
    }
}

export default adminMiddleware