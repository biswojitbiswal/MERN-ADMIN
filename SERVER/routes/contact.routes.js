import { Router } from "express";
import contactData from "../controlllers/contact.controllers.js";
import contactformSchema from "../validator/contact.validator.js";
import validate from "../middlewares/validate.middlewares.js";

const router = Router()

router.route("/form").post(validate(contactformSchema), contactData)

export default router