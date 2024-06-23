import { AsyncHandler } from "../utils/AsyncHandler.js";
import {Service} from '../models/service.model.js'

const servicesData = AsyncHandler ( async(req, res) => {
    try {
        const response = await Service.find();

        if(!response){
            res.status(404).json({nsg : "No service found"})
        }

        res.status(200).json({msg: response})
    } catch (error) {
        console.log(`services: ${error}`)
    }
})

export {
    servicesData
}