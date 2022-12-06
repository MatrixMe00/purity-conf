import {resetForm as formReset, checkPhoneNumber, MessageType} from './globalForms'

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
     * This form will submit when all the required fields are filled
    */
 export function submitForm(){
    /*
        //For Testing only
        formVars.value.messageType = MessageType.SUCCESS
        formVars.value.message = "Everything is correct"
    */
    formVars.value.showMessage = true
    
    if(checkForm()){
        formVars.value.message = "You have successfully submitted the form"
        formVars.value.finalTicket = form.value.ticketNumber
    }

    clearTimeout(popTimer.value)           //clear any ongoing timer
    popTimer.value = setTimeout(()=>{
        formVars.value.showMessage = false
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
        formVars.value.messageType = MessageType.SUCCESS
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