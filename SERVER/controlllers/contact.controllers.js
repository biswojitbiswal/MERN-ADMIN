import { AsyncHandler } from "../utils/AsyncHandler.js";
import { Contact } from '../models/contact.models.js';

const contactData = AsyncHandler(async (req, res) => {
    try {
        const { message, email, username } = req.body;

        // Check if any required fields are missing
        if (!message || !email || !username) {
            return res.status(400).json({ message: "All fields required" });
        }

        const data = await Contact.create({ message, email, username });

        if (!data) {
            return res.status(500).json({ message: "Something went wrong" });
        }

        return res.status(200).json({ message: "Message delivered" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});


export default contactData