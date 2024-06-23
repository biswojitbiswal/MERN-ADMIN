import { AsyncHandler } from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";

const registerUser = AsyncHandler( async (req, res) => {
    try {
        const {username, email, phone, password} = req.body;
    
        if([username, email, phone, password].some((field) => field?.trim() === "")){
            res.status(400).json({message: "All fields required"});
        }
    
        if(!JSON.stringify(email).includes('@')){
            res.status(400).json({message: "Email is not valid"})
        }
    
        const userExist = await User.findOne(
            {
                $or: [{username}, {email}]
            }
        )
    
        if(userExist){
            res.status(400).json({message: "User or Email already exist!"})
        }
    
        const user = await User.create({
            username,
            email,
            phone,
            password
        })
    
        const createdUser = await User.findById(user._id).select(
            "-password"
        )
    
        if(!createdUser){
            res.status(401).json({message: "Something went wrong while registering"});
        }
    
        res.status(200).json({
            message: "User registered Successfully!", 
            user : createdUser,
            token: await createdUser.generateToken(),
            userId : createdUser._id.toString(),
        })
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
})

const loginUser = AsyncHandler(async (req, res) => {
    try {
        const {username, password} = req.body
    
        if(!username || !password){
            res.status(401).json({message: "plz fill all the fields"});
        }
    
        const user = await User.findOne({username})
        // console.log(user)
    
        if(!user){
            res.status(404).json({message: "User does not exist"})
        }

    
        const isPasswordValid = async function(password) {    
            return await bcrypt.compare(password, this.password);    
        };
        

        if(isPasswordValid){
            res.status(200).json({
                message: "User login successful",
                token : await user.generateToken(),
                userId: user._id.toString()
            })
        } else {
            res.status(401).json({message: "Invalid User authentication"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error"})
    }
})

const getUserData = AsyncHandler( async(req, res) => {
    try {
        const userData = req.user;
        // console.log(userData)
        return res.status(200).json({userData})
    } catch (error) {
        console.log(`Error from userdata route ${error}`)
    }
})

export {
    registerUser,
    loginUser,
    getUserData
}