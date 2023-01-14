export enum TAG{
    COME = "coming",
    LIVE = "live",
    PAST = "past",
    MON = "month"
}

export const event = [
    {
        imgUrl:"assets/img/events/Hohoe-2023.jpg", title:"Purity Conference | Hohoe", content: "Coming March, we will be having Rev. Edem Arku, Rev. Juanita and Rev. Kofi Asante joining us to bring the very first edition of purity conference to Hohoe on the 3rd of March, 2023",
        btnLink: true, linkUrl: "", otherData:{
            month: "March", year: "2023", day: "3", tag: "", guest: "Rev. Juanita x Rev. Edem"
        }
    },
    {
        imgUrl:"assets/img/events/Ho-2023.jpg", title:"Purity Conference | Ho", content: "The third year of Purity Conference would be coming off on the 11th of March, 2023 in Ho. As exciting as it gets, we will be graced with Rev. Edem Arku, Rev Juanita and Rev. Kofi Asante",
        btnLink: true, linkUrl: "", otherData:{
            month: "March", year: "2023", day: "11", tag: "", guest: "Rev. Juanita x Rev. Edem"
        }
    },
    {
        imgUrl:"assets/img/events/Ho-2022.jpg", title:"Purity Conference | Ho", content: "Content to show. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odio?",
        btnLink: true, linkUrl: "", otherData:{
            month: "March", year: "2022", day: "26", tag: "", guest: "Rev. Juanita x Mrs. Achiaa"
        }
    },
    {
        imgUrl:"assets/img/events/Ada-2022.jpg", title:"Purity Conference | Ada", content: "Purity Conference had its way to Ada on the 5th of March, 2022. It was graced by Rev. Charlotte Oduro, Rev. Juanita, Rev. Laweteh and Bro. Caesar Ebenezer",
        btnLink: true, linkUrl: "", otherData:{
            month: "March", year: "2022", day: "5", tag: "", guest: "Rev. Charlotte x Rev. Juanita"
        }
    }
]

export const events = updatedEvents()

/**
 * This function would be used to update the tags of the events
 * @returns {any} Returns an object of events
 */
function updatedEvents():any {
    const year = new Date().getFullYear()
    const month = new Date().getMonth()+1
    const day = new Date().getDate()
    let items = event

    items.filter((item) => {
        if(parseInt(item.otherData.year) < year){
            item.otherData.tag = TAG.PAST
        }else if(parseInt(item.otherData.year) > year || getMonthFromString(item.otherData.month) > month){
            item.otherData.tag = TAG.COME
        }else if(getMonthFromString(item.otherData.month) == month && parseInt(item.otherData.day) != day){
            item.otherData.tag = TAG.MON
        }else{
            item.otherData.tag = TAG.LIVE
        }
    })

    return items
}

/**
 * This function would get the month's number in js
 * @param {string} month month to be changed
 * @returns {number} returns month's number'
 */
function getMonthFromString(month:string):number{
    return new Date(Date.parse(month +" 1, 2012")).getMonth()+1
}

/**
 * This function would be used to get the events up next
 */
function getUpNextEvents():[]{
    /*const caroselCard = ref({
        imgUrl:"assets/img/gallery/gal9.jpg", title:"This November", content: "Some Content to show. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odio?"
    })*/

    var year = new Date().getFullYear()
    var month = new Date().getMonth()+1

    const new_events = events.filter(
        (event: { otherData: { year: string } }) => (
                parseInt(event.otherData?.year) == year || (parseInt(event.otherData?.year) == year) && 
                parseInt(event.otherData?.year) > year
            ) ? event : null
    )
    const old_events = events.filter(
        (event: { otherData: { year: string; month: string } }) => (
                (parseInt(event.otherData?.year) < year) || (parseInt(event.otherData?.year) == year) && 
                (getMonthFromString(event.otherData?.month) < month)
            ) ? event : null
        )
    
    if(new_events.length > 0)
        return new_events
    else
        return old_events
}

export const bigEvent = getUpNextEvents()