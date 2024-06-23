import { z } from 'zod'

const contactformSchema = z.object({
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
    message: z
        .string({required_error: "Message is required"})
        .min(15, {message: "Message must be atleast 25 character"})
        .max(255, ({message: "Message must not be more than 255 character"})),
})

export default contactformSchema