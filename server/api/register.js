import {sendError} from "h3"
import {createUser} from "../db/users"

export default defineEventHandler(async(event)=>{
    const body = await useBody(event);

    const {username, email, password, name} = body

    if(!username || !email || !password || !name) {
        return sendError(event, createError({
            statusCode: 400, statusMessage: "Something is off"
        }))
    }
    
    const userData = {
        username, email, password, name
    }

    const user = await createUser(userData)

    return {
        body: user
    }
})