import { Router } from "express";
import { servicesData } from "../controlllers/services.controllers.js";

const router = Router()

router.route("/service").get(servicesData)

export default router