import {MessageType, checkPhoneNumber} from "./globalForms"

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
    
    if(checkForm()){
        formComps.value.message = "You have successfully submitted the form"
    }

    clearTimeout(popTimer.value)            //clear any ongoing timer
    popTimer.value = setTimeout(()=>{       //start a new timer
        formComps.value.showMessage = false
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
    }else if(Form.fname == ''){
        formComps.value.message = "Firstname field cannot be empty"
    }else if(Form.lname == ''){
        formComps.value.message = "Lastname field cannot be empty"
    }else if(Form.phone == ''){
        formComps.value.message = "Please provide your phone number"
    }else if(Form.phone.length < 10 || Form.phone.length > 13){
        formComps.value.message = "Phone number invalid. Please provide a 10 digit number"
    }else if(!checkPhoneNumber(Form.phone)){
        formComps.value.message = "Identified an invalid phone number. Please provide a valid AirtelTigo, MTN or Vodafone number" 
    }else{
        formState = true
        formComps.value.messageType = MessageType.SUCCESS
    }

    return formState;
}