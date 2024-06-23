import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "")

        if(!token) {
            res.status(400).json({msg: "Unauthorized requests"})
        }
        console.log(token)

        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SIGN)

        const user = await User.findOne({email:decodeToken.email}).select("-password")

        if(!user){
            res.status(400).json({msg: "Invalid Access Token"})
        }

        console.log(user)

        req.user = user
        req.token = token
        req.userId = user._id

        next();
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Unauthorized Invalid Token"})
    }
}

export default authMiddleware