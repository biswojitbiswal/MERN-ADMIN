import { z } from 'zod'

const loginSchema = z.object({
    username: z
        .string({required_error: "Username is required"})
        .trim()
        .min(5, {message: "Username must be atleast 5 character"})
        .max(25, ({message: "Username must not be more than 25 character"})),
    password: z
        .string({required_error: "Password is required"})
        .trim()
        .min(8, {message: "Password must be atleast 8 character"})
        .max(26, ({message: "Password must not be more than 26 character"})),
})

export default loginSchema