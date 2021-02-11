import axios from 'axios';

const news = axios.create({
    baseURL: "https://newsapi.org/",

});

const getNews = () => {
    return news.get("/v2/top-headlines", {
        params: {
            sources: "bbc-news",
            apiKey: "6d1656a093d84ef9b96675eae235b94a"
        }
    })
}

export { getNews };