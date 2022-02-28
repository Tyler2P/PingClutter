class request {
    /**
     * Construct a HTTP request
     * @param {String} url The request URL
     * @param {Object} options The request options
     */
    constructor(url: String, options: Object): void;
    /**
     * Send the constructed HTTP request
     * @returns If the request was successful
     */
    send(): Boolean;
}

export { request };