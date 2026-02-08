import {ApiResponse} from "../utils/api-response.js"

const healthCheck = (req,res) =>{
    try {
        res.status(200).json(
            new ApiResponse(200, {messsage: "Server in Running..."})
        )
    } catch (error) {
        
    }
}

export {healthCheck};