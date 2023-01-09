import { adminUser, userGender } from "./globalVars"
import {resetForm, checkPhoneNumber, MessageType} from "./globalForms"
import {registerUser, loginUser, makeSession} from "@/composables/userAuth"

//login form essentials
export const form = ref({
    username: '',
    password: '',
    submit: 'login'
})

//signup form essentials
export const newUser = ref<adminUser>({} as adminUser)

//form variables to check for errors
export const formVars = ref({
    showMessage: false,
    message: "",
    messageType: MessageType.NEUTRAL
})

//default form gender
newUser.value.gender = userGender.NONE

//message box timer variables
let messageTimer:ReturnType<typeof setTimeout>
let time = 5000

/**
 * This function is used to signup a user
 */
export function signup(){
    //enable the message box
    formVars.value.showMessage = true

    //clear time interval if any
    clearInterval(messageTimer)

    //check if all data is presented
    if(checkSignup()){
        //submit = signup
        newUser.value.submit = "signup"
        

        //register the user
        const signupdata = registerUser(newUser.value)

        signupdata.then(function(result){
            if(result["error"]){
                formVars.value.message = result["message"]
                formVars.value.messageType = MessageType.ERROR
            }else{
                // formVars.value.message = "Your account has been created"
                formVars.value.message = result["message"]
                formVars.value.messageType = MessageType.SUCCESS
            }
        }).catch(function(e){
            console.log(e.toString)
        })
    }else{
        formVars.value.messageType = MessageType.ERROR
    }

    //remove message from screen
    messageTimer = setTimeout(() => {
        formVars.value = {
            showMessage: false, message: "", messageType: MessageType.NEUTRAL
        }
    }, time)
}

/**
 * This function makes sure that the desired data is present for submission
 * @return {boolean} returns true if all data required is available
 */
function checkSignup(){
    const userdata = newUser.value
    var returnValue = false;

    if(userdata.fname == "" || userdata.fname == null){
        formVars.value.message = "Please enter your firstname"
    }else if(userdata.lname == "" || userdata.lname == null){
        formVars.value.message = "Please enter your lastname"
    }else if(userdata.email == "" || userdata.email == null){
        formVars.value.message = "Please enter your email"
    }else if(userdata.gender == userGender.NONE){
        formVars.value.message = "Please select your gender"
    }else if(userdata.username == "" || userdata.username == null){
        formVars.value.message = "Please enter your username"
    }else if(userdata.password == "" || userdata.password == null){
        formVars.value.message = "Please enter your password"
    }else if(userdata.phone == "" || userdata.phone == null){
        formVars.value.message = "Please enter your phone number"
    }else if(!checkPhoneNumber(userdata.phone)){
        formVars.value.message = "Phone number provided is invalid"
    }else{
        returnValue = true
    }

    return returnValue
}

/**
 * Function to check if details for login are present
 * @return {boolean} true if details are present
 */
export function checkLogin(){
    const userdata = form.value
    let returnValue = false

    if(userdata.username == "" || userdata.username == null){
        formVars.value.message = "Please enter your username"
    }else if(userdata.password == "" || userdata.password == null){
        formVars.value.message = "Please enter your password"
    }else{
        returnValue = true
    }
    
    return returnValue
}

/**
 * function to handle login submission
 */
export function login(){
    //enable the message box
    formVars.value.showMessage = true

    //clear time interval if any
    clearInterval(messageTimer)

    //check if all data is presented
    if(checkLogin()){      
        //register the user
        const logindata = loginUser(form.value)

        logindata.then(function(result){
            if(result["error"]){
                formVars.value.message = result["message"]
                formVars.value.messageType = MessageType.ERROR
            }else{
                formVars.value.message = "Login was successful"
                formVars.value.messageType = MessageType.SUCCESS

                //create a user session
                var session = makeSession(parseInt(result["id"]), result["session_id"])

                setTimeout(function(){
                    useRouter().push('/admin/dashboard')
                },3000)
            }
        }).catch(function(e){
            console.log(e.toString());
        })
    }else{
        formVars.value.messageType = MessageType.ERROR
    }

    //remove message from screen
    messageTimer = setTimeout(() => {
        formVars.value = {
            showMessage: false, message: "", messageType: MessageType.NEUTRAL
        }
    }, time)
}