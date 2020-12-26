import {CovidPostMan} from "./../api/Covid19Postman"

const getWorldStats = ()=>{
    return CovidPostMan.get("/summary");
}
export {getWorldStats};