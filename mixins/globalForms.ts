/**
 * This enum holds the values for declaring the types of error messages
 */
 export enum MessageType{
    ERROR = "error",
    SUCCESS = "success",
    NEUTRAL = "neutral"
}

/**
 * This function is used to reset a form or any object element into its default values
 * @param {any} form This is the form variable to be reset
 * @param {object} specialKeys This is an array of keys with their reset values
 * @return {void} Returns nothing but the element
 */
export function resetForm(form: any, specialKeys?: any): void {    
    let keys = Object.keys(form)
    let max = keys.length

    while(--max >= 0){
        if(typeof form[keys[max]] == 'string'){
            form[keys[max]] = ''
        }else if(typeof form[keys[max]] == 'number'){
            form[keys[max]] = 0
        }else if(typeof form[keys[max]] == 'boolean'){
            form[keys[max]] = false
        }
    }

    //if the special keys is not undefined
    if(typeof specialKeys != 'undefined'){
        keys = Object.keys(specialKeys)
        const values = Object.values(specialKeys)
        max = keys.length

        while(--max >= 0){
            form[keys[max]] = values[max]
        }
    }
}

/**
 * This function is responsible for checking if a phone number has a right prefix
 * @param {string} phoneNumber This is the phone number to be checked
 * @return {boolean} True if the phone number has a right prefix
*/
export function checkPhoneNumber(phoneNumber:string): boolean{
    const phonePrefix = [
        "024", "027", "020",
        "054", "057", "050",
        "026", "055", "+233",
        "+234", "025"
    ]
    let found = false;

    //check for internationally written numbers and locally written ones
    const prefix = phoneNumber.startsWith("+") ? phoneNumber.substring(0,4) : phoneNumber.substring(0,3)

    if(phonePrefix.includes(prefix)){
        found = true;
    }

    return found
}