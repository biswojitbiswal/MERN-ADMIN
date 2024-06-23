import { AsyncHandler } from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";
import { Contact } from "../models/contact.models.js";

const getAllUser = AsyncHandler( async(req, res) => {
    try {
        const users = await User.find({}).select("-password");

        if(!users || users.length === 0){
            return res.status(404).json({message: "Users does not found"})
        }

        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
})

const getAllContact = AsyncHandler( async(req, res) => {
    try {
        const contacts = await Contact.find({});

        if(!contacts || contacts.length === 0){
            return res.status(404).json({message: "Contacts does not found"})
        }

        res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
})

const getUserById = AsyncHandler( async(req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id : id }).select("-password");

        return res.status(200).json({data})
    } catch (error) {
        console.log(error)
    }
})

const updateUserDataById = AsyncHandler( async(req, res) => {
    try {
        const id = req.params.id;
        const currData = req.body;
        const updatedData = await User.updateOne(
            {_id: id}, 
            {
                $set: currData,
            }
    );

    return res.status(200).json(updatedData)
    } catch (error) {
        console.log(error)
    }
})

const deleteUserById = AsyncHandler( async(req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id : id });

        return res.status(200).json({message: "User deleted successfully"})
    } catch (error) {
        next(error)
    }
})

const deleteContactById = AsyncHandler( async(req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id : id});

        return res.status(200).json({message: "Contacts deleted successfully"})

    } catch (error) {
        next(error)
    }
})

export {
    getAllUser,
    getAllContact,
    deleteUserById,
    getUserById,
    updateUserDataById,
    deleteContactById
}