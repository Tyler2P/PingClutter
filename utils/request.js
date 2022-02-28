class request {
    constructor(url, options) {
        if (typeof url == "string")
            this.url = url;
        if (typeof options == "object")
            this.options = options;
    }
    send() {
        const { default: axios } = require("axios");
        if (!this.url) return;
        axios.get(this.url, this.optioins);
    }
}

module.exports.request = request;