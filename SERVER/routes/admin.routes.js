import { Router } from 'express'
import { getAllUser, getAllContact, deleteUserById, getUserById, updateUserDataById, deleteContactById } from '../controlllers/admin.controllers.js';
import authMiddleware from '../middlewares/auth.middlewares.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';



const router = Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUser)
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUserById)
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById)
router.route("/users/edit/:id").patch(authMiddleware, adminMiddleware, updateUserDataById)
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContact)
router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, deleteContactById)

export default router