import {resetForm as formReset, checkPhoneNumber, MessageType, payWithPaystack} from './globalForms'
import { detectInternet } from './globalVars'

export var form = ref({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    ticketNumber: 1,
    price: 20
})

//variables for the top of the form [caption]
export const formVars = ref({
    showMessage: false,
    message: '',
    messageType: MessageType.NEUTRAL,
    finalTicket: 0    //variable to track total number of tickets bought at a time
})

var popTimer = ref()         //a timer variable to track message popup
var popTime = 5             //value in seconds used to set the time for a message to be shown


/**
     * This is the submission form for the ticket
     * This form will submit when all the required fields are filledasync 
    */
 export function submitForm(){
    /*
        //For Testing only
        formVars.value.messageType = MessageType.SUCCESS
        formVars.value.message = "Everything is correct"
    */
    formVars.value.showMessage = true
    
    if(detectInternet()){
        if(checkForm()){
            //alert user that payment is ongoing
            formVars.value.message = "Payment Ongoing, please wait..."

            const makePayment = payWithPaystack(form.value)

            makePayment.then((response) => {
                formVars.value.message = "You have successfully submitted the form"
                formVars.value.finalTicket = form.value.ticketNumber
                formVars.value.messageType = MessageType.SUCCESS

                submitTimeout()
            }).catch((error) => {
                formVars.value.message = error["message"]
                formVars.value.messageType = MessageType.ERROR

                submitTimeout()
            })
        }
    }else{
        formVars.value.message = "Internet connection is not established. Try again later..."
        formVars.value.messageType = MessageType.ERROR

        submitTimeout()
    }
    
}

/**
 * This function is responsible for making sure message boxes are properly displayed or hidden
 * @param {number} time This determines how long a message should be displayed
 */
function submitTimeout(time:number = popTime){
    clearTimeout(popTimer.value)           //clear any ongoing timer

    if(time != popTime){
        popTime = time
    }
    popTimer.value = setTimeout(()=>{
        console.log("timer finished")
        formVars.value.showMessage = false

        //reset pop time
        popTime = 5
    }, (popTime * 1000))
}

/** 
 * This function is responsible for checking the details of the form
 * It also makes sure required fields are not empty
 * @return Returns a boolean state of the form
*/
function checkForm() :boolean{
    let formState = false
    const Form = form.value
    formVars.value.messageType = MessageType.ERROR

    if(Form.fname == ''){
        formVars.value.message = "Firstname field cannot be empty"
    }else if(Form.lname == ''){
        formVars.value.message = "Lastname field cannot be empty"
    }else if(Form.phone == ''){
        formVars.value.message = "Please provide your phone number"
    }else if(Form.phone.length < 10){
        formVars.value.message = "Phone number invalid. Please provide a 10 digit number"
    }else if(!checkPhoneNumber(Form.phone)){
        formVars.value.message = "Identified an invalid phone number. Please provide a valid AirtelTigo, MTN or Vodafone number" 
    }else if(Form.ticketNumber < 1){
        formVars.value.message = "You can buy at least one ticket"
    }else{
        formState = true
        formVars.value.messageType = MessageType.NEUTRAL
    }

    return formState;
}

/**
* This is a function to reset the form to its default values
* @return {void} It returns no value at the end
*/
export function resetForm(): void{
    const defaultKeys = {
        ticketNumber: 1, price: 20
    }

    //reset the form 
    formReset(form.value, defaultKeys)

    //reset the form vars
    formReset(formVars.value, {messageType : MessageType.NEUTRAL})
}