export enum CardType{
    CARO = "caro-card",
    HERO = "heroCard",
    EVENT = "event-card"
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
    {title:"Sponsor", to:"/sponsor"}
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