const URL = "https://api.jsonbin.io/v3/b/656776740574da7622cdef98";
const API_KEY = "$2a$10$8lRXaS1lPtqtGcBI5V.JMubf9l8riQBNzI3BKDaUY7wliOK.0A5tK";

const fetchPoems = async (query) => {
    const {data} = await fetch.get(URL, {
        params: {
            poems: query,
            APPID: API_KEY,
        }
    });

    return data;
}

export default fetchPoems;