import axios from "axios";

const url = "https://64c10bfafa35860bae9fd682.mockapi.io/amirhk888/";

class Actions {
    constructor() {

    }

    async get(url, data) {
        await axios.get(url, data)
        .then(data);
    }

    async post(url, data) {
        await axios.post(url, data);
    }

    async delete(url) {
        await axios.delete(url);
    }
}

const Action = new Actions();

export { url, Action }
