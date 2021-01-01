import {CovidPostMan} from "./../api/Covid19Postman"

const getWorldStats = ()=>{
    return CovidPostMan.get("/summary", {
        headers: { 'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864' }});
}
export {getWorldStats};