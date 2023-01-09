type ExistsCheck = {
    value: boolean,
    message?: string
}

type RegistrationError = {
    emailError?: string
    usernameError?: string
}

/**
 * This function would be used to test if a user is already in the system
 * @param {string} email This receives the email of the user
 * @param {string} username This receives the username of the user
 * 
 * @returns {ExistsCheck} returns response for interface
 */
export async function doesUserExist(email: string, username: string): Promise<ExistsCheck> {
    const emailExist = true
    const usernameExist = true

    const errors:RegistrationError = {}

    if(emailExist) {
        errors.emailError = "This email, " + email + ", already exists in the system"
    }

    if(usernameExist){
        errors.usernameError = "This username, " + username + ", already exists in the system"
    }

    if(emailExist || usernameExist){
        const message = JSON.stringify(errors)
        return {value: true, message}
    }

    return false
}