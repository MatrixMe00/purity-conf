import {MessageType, checkPhoneNumber, payWithPaystack} from "./globalForms"
import { detectInternet } from "./globalVars"

export var form = ref({
    //individual exclusive
    fname: '',
    lname: '',

    //agency exclusive
    agency: '',
    location: '',

    //general
    email: '',
    phone: '',
    sponsorType: '',
    amount: 0.0,
    sponsor: '',

    paynow: false,
    page: "sponsor"
})

//items to show in the form
export var formComps = ref({
    showMessage: false,
    message: '',
    messageType: MessageType.NEUTRAL,
})

interface comps{
    showMessage: boolean,
    message: string,
    messageType: MessageType
}

var popTimer = ref()         //a timer variable to track message popup
var popTime = 5             //value in seconds used to set the time for a message to be shown

/**
     * This is the submission form for the ticket
     * This form will submit when all the required fields are filled
    */
 export function submitForm(){
    
    /*
        //For Testing only
        messageType.value = MessageType.SUCCESS
        message.value = "Everything is correct"
    */
    formComps.value.showMessage = true
    
    if(detectInternet()){
        if(checkForm()){
            if(form.value.paynow){
                //alert user that payment is ongoing
                formComps.value.message = "Payment Ongoing, please wait..."

                const makePayment = payWithPaystack(form.value)

                makePayment.then((response) => {
                    formComps.value.message = "You have successfully submitted the form"
                    formComps.value.messageType = MessageType.SUCCESS

                    submitTimeout()
                }).catch((error) => {
                    formComps.value.message = error["message"]
                    formComps.value.messageType = MessageType.ERROR

                    submitTimeout()
                })
            }else{
                formComps.value.message = "You have successfully submitted the form"
                formComps.value.messageType = MessageType.SUCCESS
            }
            
        }
    }else{
        formComps.value.message = "Internet connection is not established. Try again later..."
        formComps.value.messageType = MessageType.ERROR

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
        formComps.value.showMessage = false

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
    formComps.value.messageType = MessageType.ERROR

    if(Form.sponsor == ''){
        formComps.value.message = "Please select your mode of sponsorship"
    }else if(Form.sponsorType == ''){
        formComps.value.message = "Please select your type of sponsorship"
    }else if(Form.fname == '' && Form.sponsor == "individual"){
        formComps.value.message = "Firstname field cannot be empty"
    }else if(Form.lname == '' && Form.sponsor == "individual"){
        formComps.value.message = "Lastname field cannot be empty"
    }else if(Form.phone == ''){
        formComps.value.message = "Please provide your phone number"
    }else if(Form.location == '' && Form.sponsor == 'agency'){
        formComps.value.message = "Please provide city of your agency or business"
    }else if(Form.phone.length < 10 || Form.phone.length > 13){
        formComps.value.message = "Phone number invalid. Please provide a 10 digit number"
    }else if(!checkPhoneNumber(Form.phone)){
        formComps.value.message = "Identified an invalid phone number. Please provide a valid AirtelTigo, MTN or Vodafone number" 
    }else{
        formState = true
        formComps.value.messageType = MessageType.NEUTRAL
    }

    return formState;
}