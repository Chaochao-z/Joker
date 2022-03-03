class FetchRequest {
    controller = null;
    timeout = null;
    url = null;
    options = null;
    requesting = false;
    timeoutFunction = null;
    timeoutCallback = null;

    constructor(url, options = {}, timeout = 5000, timeoutCallback) {
        this.controller = new AbortController();
        this.url = url;
        this.options = options;
        this.timeout = timeout;
        this.timeoutCallback = () => {
            this.controller.abort();
            this.#requestEnd();
            timeoutCallback();
        };
    }

    async fetch() {
        this.#requestStart();
        try {
            const res = await fetch(this.url, {
                ...this.options,
                signal: this.controller.signal
            });
            this.#requestEnd();
            return res;
        } catch (e) {
            this.#requestEnd();
            throw new Error(e);
        }
    }

    #requestStart() {
        this.requesting = true;
        this.timeoutFunction = setTimeout(this.timeoutCallback, this.timeout);
    }

    #requestEnd() {
        this.requesting = false;
        clearTimeout(this.timeoutFunction)
    }

    cancel() {
        if (this.requesting) {
            this.controller.abort();
            this.#requestEnd();
        }
    }
}

export default FetchRequest;