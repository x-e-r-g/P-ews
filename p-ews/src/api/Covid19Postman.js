import {create} from 'apisauce';

const CovidPostMan = create({
    baseURL: "https://api.covid19api.com/"
});
export {CovidPostMan};