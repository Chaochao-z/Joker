const API_URL = 'https://deckofcardsapi.com/api'

const states = {
    deck: [], playerHand: [],
}

async function advancedFetch(url, options) {
    const controller = new AbortController();
    const { signal } = controller;
    const timeout = setTimeout(() => {
        // propose to cancel
    }, 5000);
    try {
        const res = await fetch(url, {
            ...options,
            signal
        });
    } catch (e) {
        clearTimeout(timeout);
        throw new Error(e);
    }
}

function objectToQueryString(object) {
    if (typeof object !== 'object') return '';
    if (object.length < 1) return '';
    const paramsArray = Object.keys(object).map((key) => `${key}=${object[key]}`);
    const queryString = paramsArray.join('&');
    return `?${queryString}`
}

class Deck {
    deck = {};
    newDeckLoading = false;

    constructor(params) {
        this.newDeckLoading = true;
        this.generateDeck(params)
            .then((deck) => {
                this.deck = deck;
            })
            .catch((err) => {
                throw new Error(err);
            })
            .finally(() => {
                this.newDeckLoading = false;
            })
    }

    async generateDeck(params) {
        const queryParams = objectToQueryString(params);
        const res = await fetch(`${API_URL}/deck/new/${queryParams}`);
        return await res.json();
    }
}

export default Deck;