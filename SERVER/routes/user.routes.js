import { Router } from "express";
import { registerUser, loginUser } from "../controlllers/user.controller.js";
import signupSchema from "../validator/user.validator.js";
import loginSchema from "../validator/login.validator.js"
import validate from "../middlewares/validate.middlewares.js";
import { getUserData } from "../controlllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middlewares.js";

const router = Router()

router.route("/").get( (req, res) => {
    res.send("hello world from homepage")
})

router.route("/register").post(validate(signupSchema),registerUser)
router.route("/login").post(validate(loginSchema), loginUser)
router.route("/auth").get(authMiddleware, getUserData)


export default router