import {eventHandler, sendError} from "h3"
import {doesUserExist} from "~/server/services/userService"
import {createUser} from "~/server/db/users.js"

export default async (event: eventHandler) => {
    //get data from the server
    const body = await readBody(event)

    //retrieve data from the server
    const fname = body.fname
    const lname = body.lname
    const oname = body.oname
    const email = body.email
    const username = body.username
    const password = body.password
    const phone = body.phone
    const gender = body.gender
    const avatarUrl = body.avatarUrl
    const id = body.id

    //check if user exists
    const userExist = await doesUserExist(email, username)

    if(userExist.value == true){
        sendError(event, createError({
            statusCode: 422, statusMessage: userExist.message
        }))
    }

    const userData = {
        username: username,
        password: password,
        gender: gender
    }

    const user = await createUser(userData)

    return await makeSession(user, event)
}