import {passItemToDatabase} from "~/composables/userAuth"
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

/**
 * This function is responsible for converting json element to formdata
 * @param {any} formData This is the json element to be converted
 * @return {FormData} returns a formdata object
 */
export function jsonToFormData(formData:any): FormData{
    var form = new FormData;

    for(var key in formData){
        form.append(key, formData[key]);
    }

    return form
}

/**
 * This is the paystack function to work on money transaction in the system
 * @param {any} formData This is the data received from the form
 * 
 * @return {Promise<any>} Returnsreturns an array of data
 */
export async function payWithPaystack(formData:any): Promise<any>{
    return await new Promise((resolve, reject) => {
        let final = {
            error: true,
            message: "no message"
        };
        
        //for testing purposes
        let mykey = "pk_test_c5dcd641dd1de34981af774e53ccd56ca8e4f36d";
        let cust_amount = 100;
        let cust_name = ""

        if(formData.fname != "" && formData.lname != ""){
            cust_name = formData.fname + " " + formData.lname
        }else if(formData.agency != ""){
            cust_name = formData.agency
        }

        switch(formData.page){
            case "sponsor":
                cust_amount *= formData.amount
                break;
            case "ticekt":
                cust_amount *= formData.price
        }
        
        try {
            var handler = PaystackPop.setup({
            key: mykey,
            email: formData.email,
            amount: cust_amount,
            currency: "GHS",
            metadata: {
                custom_fields: [
                    {
                        display_name: "Mobile Number",
                        variable_name: "mobile_number",
                        value: formData.phone
                    },
                    {
                        display_name: "Customer's Name",
                        variable_name: "customer_name",
                        value: cust_name
                    }
                ]
            },
            callback: function(response:any){//parse data into database
                let resp = passItemToDatabase(formData, response.reference);
                
                resp.then((response) => {
                    final["error"] = false;
                    final["message"] = "Process complete";
                })
                
    
                resolve(final)
            },
            onClose:  function(){
                final["error"] = true;
                final["message"] = "Transaction has been canceled by user";

                reject(final)
            }
            });
            
            handler.openIframe();
        } catch (error) {
            final["error"] = true;
            final["message"] = error.toString()

            reject(final)
        }
    })
}