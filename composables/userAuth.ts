import {adminUser, ISession} from "~/mixins/globalVars"
import { jsonToFormData } from "~~/mixins/globalForms";

/**
 * This function would be used to handle the user registration
 * @param {adminUser} userData This is the data to be processed
 * @return {Promise<any>} an object to show the state of the request
 */
export async function registerUser(userData:adminUser): Promise<any> {
    return await new Promise(async (resolve, reject) => {
        try {
            var form = jsonToFormData(userData)
    
            // const response = await $fetch<ISession>('http://localhost/vue-course/auth.php', {
            const response = await $fetch<ISession>('https://www.purity.shsdesk.com/auth.php', {
                method: 'POST',
                body: form
            })
    
            if(response){
                resolve(JSON.parse(JSON.stringify(response)))
            }else{
                const returnData = {
                    "error": true,
                    "message": "No response found"
                }

                reject(returnData)
            }
        } catch (e) {
            reject("error: " + e);
        }
    })
}

/**
 * This would be used to handle user login
 * @param {object} userdata This is the data to be processed
 * @returns {Promise<any>} returns an object containing data
 */
export async function loginUser(userdata: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            var form = jsonToFormData(userdata)
    
            // const response = await $fetch<ISession>('http://localhost/vue-course/auth.php', {
            const response = await $fetch<ISession>('https://www.purity.shsdesk.com/auth.php', {
                method: 'POST',
                body: form
            })
    
            if(response){
                resolve(JSON.parse(JSON.stringify(response)))
            }else{
                const returnData = {
                    "error": true,
                    "message": "No response found"
                }
                reject(returnData)
            }
        } catch (error) {
            reject(error);
        }
    })
}

/**
 * This function is used to make a session for a user
 * @param {number} user_id ID of the user
 * @param {string} session_id ID of the session
 * @return {Promise<any>} Promise resolved 
 */
export async function makeSession(user_id: number, session_id: string): Promise<any> {
    const authToken = session_id
    const session = await createSession(session_id)

}

/**
 * This function is used to create a session for the given user
 * @param {string} session_id ID of the session
 * @returns {Promise<any>} Promise resolved
 */
async function createSession(session_id: string){
    //const session = await getSessionByAuthToken(session_id)

    //return session.user
}

/**
 * This function is responsible for sending the payment data unto the server
 * @param {any} user This is the user data to be sent
 * @param {string} reference This is the reference received from the paystack server
 * @returns {Promise<any>} Promise resolved
 */
export async function passItemToDatabase(user:any, reference:string):Promise<any>{
    var returnData = null
    
    try {
        let form = jsonToFormData(user)
        form.append("submit","database-entry")

        if(user.type="sponsor"){
            
        }else if(user.type=""){

        }

        const response = $fetch<ISession>('http://localhost/vue-course/auth.php', {
        // const response = await $fetch<ISession>('https://purity.shsdesk.com/auth.php', {        
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
        returnData = error;
    }

    return await new Promise((resolve, reject) => {
        
    })
    
}