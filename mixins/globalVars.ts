export enum CardType{
    CARO = "caro-card",
    HERO = "heroCard",
    EVENT = "event-card",
    SPONSOR = "sponsor"
}

export enum FollowMode{
    LIGHT = "light",
    DARK = "dark",
    WHITE = "white",
    DARKER = "darker"
}

export const Links = ref([
    {title:"Home", to:"/"},
    {title:"About Us", to:"/about"},
    {title:"Gallery", to:"/gallery"},
    {title:"Events", to:"/events"},
    {title:"Sponsor", to:"/sponsor"},
    {title:"Admin", to:"/admin"}
])

export interface monthYear{
    month: string,
    year: string
}

export interface fullDate{
    month: string,
    year: string,
    day: string
}

export enum userGender {
    NONE = "",
    MALE = "male",
    FEMALE = "female"
}

export interface adminUser{
    id?: number,
    fname: string,
    lname: string,
    oname?: string,
    email: string,
    username: string,
    password: string,
    phone: string,
    avatarUrl?: string,
    gender: userGender,
    submit?: string
}

export interface ISession{
    authToken?: string, user?: adminUser
}

export interface internetVar{
    online: boolean,
    message: string
}

export enum caroselSpeed{
    VSLOW = 10,
    SLOW = 7.5,
    NORMAL = 5,
    FAST = 3,
    VFAST = 1.5
}

/**
 * This function determines if there is an internet connection
 * @param {boolean} addMessage determines if a message should be added
 * 
 * @returns {boolean|internetVar} true if there is an internet connection
 */
export function detectInternet(addMessage:boolean = false): boolean|internetVar {
    var online = false
    var message = ""

    if(navigator.onLine){
        message = "You are back online"
        online = true
    }else{
        message = "You are offline"
        online = false
    }

    if(addMessage){
        var response:internetVar = {online: online, message: message}
        return response
    }else{
        return online
    }    
}