import axios from "axios";

class HttpService {
    constructor() {
        const service = axios.create({
            baseURL: 'http://localhost:3000/products?_page=1&_limit=8'
,
            headers: {'X-Custom-Header': 'foobar'}


    });

        service.interceptors.response.use(this.handleSuccess, this.handleError);

        this.service = service;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        switch (error.response.status) {
            case 404:
                // Not found
                this.redirectTo("/404");
                break;
            default:
                // Internal server error
                this.redirectTo("/500");
                break;
        }
        return Promise.reject(error);
    }

    redirectTo(url) {
        window.location.href = url;
    }

    get(...args) {
        return this.service.get(...args);
    }

    post(...args) {
        return this.service.post(...args);
    }

    put(...args) {
        return this.service.put(...args);
    }

    patch(...args) {
        return this.service.patch(...args);
    }

    delete(...args) {
        return this.service.delete(...args);
    }
}

export default new HttpService();