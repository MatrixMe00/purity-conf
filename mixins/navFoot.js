import {ref} from "vue"

export default function navFoot(){
    const Links = ref([
        {title:"Home", to:"/"},
        {title:"About Us", to:"/about"},
        {title:"Gallery", to:"/gallery"},
        {title:"Events", to:"/events"},
        {title:"Sponsor", to:"/sponsor"}
    ])

    return {Links}
}