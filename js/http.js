export class Http {
    constructor(url) {
        this.url = url;
    }

    getWeather() {
        return fetch(`${this.url}`);
    }
}