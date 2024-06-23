import { z } from 'zod'

const signupSchema = z.object({
    username: z
        .string({required_error: "Username is required"})
        .trim()
        .min(5, {message: "Username must be atleast 5 character"})
        .max(25, ({message: "Username must not be more than 25 character"})),
    email: z
        .string({required_error: "Email is required"})
        .trim()
        .email({message: "Email is not valid"})
        .min(5, {message: "Email must be atleast 5 character"})
        .max(255, ({message: "Email must not be more than 25 character"})),
    phone: z
        .string({required_error: "Phone is required"})
        .trim()
        .min(10, {message: "Phone must be atleast 10 character"})
        .max(12, ({message: "Phone must not be more than 12 character"})),
    password: z
        .string({required_error: "Password is required"})
        .trim()
        .min(8, {message: "Password must be atleast 8 character"})
        .max(26, ({message: "Password must not be more than 26 character"})),
})

export default signupSchema