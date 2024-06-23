import mongoose from 'mongoose'

export const contactSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    message : {
        type: String,
        required: true
    },
}, {timestamps: true})

export const Contact = mongoose.model("Contact", contactSchema)