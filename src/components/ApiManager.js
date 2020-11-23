const API_KEY = `0e54fdc30e0f4fe8a4e1e372a825af9d`;
const API_HOST = `http://newsapi.org/v2`;

export default class ApiManager {
    static fetchNews(source, query, page, pageSize) {
        let url = `${API_HOST}/everything?apiKey=${API_KEY}&sources=${source}&page=${page}&pageSize=${pageSize}`;
        if (query) {
            url += `&q=${query}`;
        }
        return fetch(url).then(response => response.json())
    }
};