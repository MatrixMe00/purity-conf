import {adminUser, ISession} from "~/mixins/globalVars"
import { jsonToFormData } from "~~/mixins/globalForms";

/**
 * This function would be used to handle the user registration
 * @param {adminUser} userData This is the data to be processed
 * @return {Promise<any>} an object to show the state of the request
 */
export async function registerUser(userData:adminUser): Promise<any> {
    var returnData = {}

    try {
        var form = jsonToFormData(userData)

        const response = await $fetch<ISession>('http://localhost/vue-course/auth.php', {
            method: 'POST',
            body: form
        })

        if(response){
            returnData = JSON.parse(JSON.stringify(response))
        }else{
            returnData = {
                "error": true,
                "message": "No response found"
            }
        }
    } catch (e) {
        console.log("error: " + e);
    } finally {
        return returnData
    }
}

/**
 * This would be used to handle user login
 * @param {object} userdata This is the data to be processed
 * @returns {Promise<any>} returns an object containing data
 */
export async function loginUser(userdata: any): Promise<any> {
    var returnData = null

    try {
        var form = jsonToFormData(userdata)

        const response = await $fetch<ISession>('http://localhost/vue-course/auth.php', {
            method: 'POST',
            body: form
        })

        if(response){
            returnData = JSON.parse(JSON.stringify(response))
        }else{
            returnData = {
                "error": true,
                "message": "No response found"
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        return returnData;
    }
}

/**
 * This function is used to make a session for a user
 * @param {number} user_id ID of the user
 * @param {string} session_id ID of the session
 * @return {Promise<any>} Promise resolved 
 */
export async function makeSession(user_id: number, session_id: string): Promise<any> {
    const authToken = session_id
    const session = await createSession(user_id, session_id)

}

/**
 * This function is used to create a session for the given user
 * @param {string} session_id ID of the session
 */
async function createSession(session_id: string){
    const session = await getSessionByAuthToken(session_id)

    return session.user
}